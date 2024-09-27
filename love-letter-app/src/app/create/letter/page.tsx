import { getMessage } from "@/app/lib/data";
import AnimatedCard from "@/app/ui/animatedCard";

export default async function Letter({
  searchParams,
}: {
  searchParams?: {
    id?: number;
    svg?: string;
  };
}) {
  const message = await getMessage(searchParams?.id);
  return (
    <div className="letter-container">
      <div className="animated-card">
        <AnimatedCard svg={searchParams?.svg} msg={message.message} />
      </div>
    </div>
  );
}
