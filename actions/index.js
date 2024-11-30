'use server';

import client from "@/db";
import { revalidatePath } from "next/cache";

const db = await client.db("todos");

// ... existing code ...
export async function createTodos(task) { // Accept task as a parameter
    try {
        const todos = await db.collection('todos').insertOne({ task }); // Store the task in the document
        console.log(todos);
        revalidatePath('/');
    } catch (error) {
        console.log(error);
    }
}
// ... existing code ...