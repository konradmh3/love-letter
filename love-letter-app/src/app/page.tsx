import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <Link href="/create">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] hover:invert" 
            src="/image 1.svg"
            alt="Envelope Logo"
            width={116}
            height={77}
            priority
          />
          
        </Link>
      <div className="title-text">LoveLetter</div>
      <Link className="create-button" href="/create">
        Create new message
      </Link>
    </main>
  );
}
