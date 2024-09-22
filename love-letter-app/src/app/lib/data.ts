"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { MessagesTable } from "./definitions";


// this function will get a message by id
export async function getMessage(id: number | undefined) {
    noStore();
    try {
        const result = await sql<MessagesTable>`SELECT * FROM messages WHERE id = ${id}`;
        return result.rows[0];
    }
    catch (e) {
        console.error("Database Error: ", e);
        return { message: "No message found" };
    }
}

