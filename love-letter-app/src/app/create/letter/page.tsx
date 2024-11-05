import { getMessage } from "@/app/lib/data";
import AnimatedCard from "@/app/ui/animatedCard";
import Link from "next/link";
import Clipboard from "@/app/ui/clipBoard";
import { workSans } from "@/app/ui/fonts";

export default async function Letter({
  searchParams,
}: {
  searchParams?: {
    id: number;
    svg: string;
    bgcolor: string;
  };
}) {

  const handleClipboard = async () => {
    // await navigator.clipboard.writeText(window.location.href);
    console.log("copied to clipboard");
  }

  const message = await getMessage(searchParams?.id);
  console.log("test : ", searchParams?.bgcolor);
  return (
    <div className={workSans.className}>

    <div
      className="letter-container"
      style={
        {
          "--background-letter-rgb": searchParams?.bgcolor,
        } as React.CSSProperties
      }
    >
      <div className="animated-card">
        <AnimatedCard svg={searchParams?.svg} msg={message.message} />
      </div>
      <Link className="start-button bot-right" href="/create">
        Create new...
      </Link>
      <Clipboard/>
    </div>
  </div>
  );
}
