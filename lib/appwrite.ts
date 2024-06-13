import { APPWRITE_ID } from "@/lib/app.constants";
import { Account, Client, Databases, Storage } from "appwrite";

export const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(APPWRITE_ID);

export const account = new Account(client);
export { ID } from "appwrite";
export const database = new Databases(client);
export const storage = new Storage(client);
