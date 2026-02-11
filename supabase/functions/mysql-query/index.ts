import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import mysql from "npm:mysql2@3.11.0/promise";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const connectionString = Deno.env.get('MYSQL_CONNECTION_STRING');
    if (!connectionString) {
      throw new Error('MYSQL_CONNECTION_STRING is not configured');
    }

    const { query, params } = await req.json();

    if (!query || typeof query !== 'string') {
      return new Response(
        JSON.stringify({ error: 'A valid query string is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const connection = await mysql.createConnection(connectionString);

    try {
      const [rows] = await connection.execute(query, params || []);
      return new Response(
        JSON.stringify({ data: rows }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } finally {
      await connection.end();
    }
  } catch (error: unknown) {
    console.error('MySQL query error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
