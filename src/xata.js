// Generated by Xata Codegen 0.18.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "users",
    columns: [
      { name: "password", type: "string" },
      { name: "username", type: "string" },
      { name: "email", type: "email" },
    ],
  },
  {
    name: "items",
    columns: [{ name: "user", type: "link", link: { table: "users" } }],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Olufunke-Moronfolu-s-workspace-vj48pf.xata.sh/db/hackmamba-hackathon",
  apiKey: "xau_WAMw8evIhRbrATj5QNZqERFdUuQgdHQv6"

};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
