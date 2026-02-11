import { supabase } from "@/integrations/supabase/client";

export async function queryMySQL<T = any>(query: string, params?: any[]): Promise<T[]> {
  const { data, error } = await supabase.functions.invoke('mysql-query', {
    body: { query, params },
  });

  if (error) throw new Error(error.message);
  if (data?.error) throw new Error(data.error);
  return data.data as T[];
}
