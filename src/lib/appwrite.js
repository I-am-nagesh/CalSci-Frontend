import { Client, Account, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint("import.meta.env.VITE_APPWRITE_ENDPOINT") // Your API Endpoint
  .setProject("import.meta.env.VITE_APPWRITE_PROJECT");

export const account = new Account(client);
export const databases = new Databases(client);
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export { ID };
