import Card from "@/app/(component)/Card";
import CreateCard from "@/app/(component)/CreateCard";
import CustomTooltip from "@/app/(component)/CustomTooltip";
import Heading from "@/app/(component)/Heading";

export default function Home() {
  return (
    <div className="px-4 py-6">
      <Heading
        title="All setting packs"
        description="Combine task types, fields, status, labels, automation together to quickly update multiple project."
      />
      <div className="grid md:grid-cols-2 3xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-y-8 pt-8">
        <CreateCard />
        <Card
          title="Product development"
          description="Use this pack for product development process."
          board={["learnbase"]}
        />
        <Card board={["learnbase", "learnbase", "learnbase", "learnbase"]} />
        <Card board={["learnbase"]} />
        <CustomTooltip />
      </div>
    </div>
  );
}
