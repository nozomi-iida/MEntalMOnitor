import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/schema.gen";
export const supabaseCli = createClientComponentClient<Database>();
