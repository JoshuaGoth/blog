import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a2d9df0aa7bee6b48d13ec43af5db8c8756c9476', queries,  });
export default client;
  