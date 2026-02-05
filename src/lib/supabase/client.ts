import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.https://tgicnitlcmpkeamhosyh.supabase.co,
    process.env.sb_publishable_QCL5TUa_tvkMr-NvigBTkw_D8myrQfL,
  );
}
