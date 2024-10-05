import { getMessage } from "@/app/lib/data";
import AnimatedCard from "@/app/ui/animatedCard";

export default async function Letter({
  searchParams,
}: {
  searchParams?: {
    id: number;
    svg: string;
    bgcolor: string;
  };
}) {

  const message = await getMessage(searchParams?.id);
  console.log("test : ", searchParams?.bgcolor);
  return (
    <div className="letter-container" style={{"--background-letter-rgb": searchParams?.bgcolor} as React.CSSProperties}>
      <div className="animated-card">
        <AnimatedCard svg={searchParams?.svg} msg={message.message} />
      </div>
    </div>
  );
}
