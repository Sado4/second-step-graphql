import { initUrqlClient } from "next-urql";
import { cacheExchange, Client, fetchExchange } from "urql";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
        exchanges: [cacheExchange, fetchExchange], // 必要なエクスチェンジを追加
      },
      false
    );
    if (!client) {
      reject(Error("Failed to init initUrqlClient."));
    } else {
      resolve(client);
    }
  });
}
