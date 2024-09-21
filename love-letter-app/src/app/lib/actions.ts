"use server";

import { sql } from "@vercel/postgres";


export async function postMessage(message: string) {


    const result = await sql`INSERT INTO messages (message) VALUES (${message}) RETURNING id`;
    return result.rows[0].id;
}   