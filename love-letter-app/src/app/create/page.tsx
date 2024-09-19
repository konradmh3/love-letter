import Link from "next/link";

export default function create() {
  return (
    <div className="create-card-page">
      <div className="create-card-container">
        <div>Choose a Card...</div>
        <div className="svg-container"></div>
        <div>Create a Message...</div>
        <div className="message-container"></div>
        <Link href="/create/letter" className="">
            Create!
        </Link>
      </div>
    </div>
  );
}
