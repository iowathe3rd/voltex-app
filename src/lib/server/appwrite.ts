"use server";

import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
const appwrite_endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const appwrite_project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
const appwrite_key = process.env.NEXT_APPWRITE_KEY;

export async function createSessionClient() {
  if (!appwrite_project || !appwrite_endpoint) {
    throw Error(
      "NEXT_PUBLIC_APPWRITE_ENDPOINT or NEXT_PUBLIC_APPWRITE_PROJECT is not valid",
    );
  }
  const client = new Client()
    .setEndpoint(appwrite_endpoint)
    .setProject(appwrite_project);

  const session = cookies().get("appw");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  if (!appwrite_project || !appwrite_endpoint || !appwrite_key) {
    throw Error(
      "NEXT_PUBLIC_APPWRITE_ENDPOINT or NEXT_PUBLIC_APPWRITE_PROJECT is not valid",
    );
  }
  const client = new Client()
    .setEndpoint(appwrite_endpoint)
    .setProject(appwrite_project)
    .setKey(appwrite_key);

  return {
    get account() {
      return new Account(client);
    },
  };
}
