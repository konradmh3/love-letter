'use server';

import { getMessage } from "../lib/data";


export default async function Message(props
    : { id: string | null; }
) {
    console.log("props.id: ", props.id);
    if (props.id === "" || props.id === null) {
        return <>No message found</>;
    }
    const message = await getMessage(parseInt(props.id));
    return <>{message.message}</>;
}