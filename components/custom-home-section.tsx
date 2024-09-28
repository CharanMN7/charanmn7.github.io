import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CustomHomeSection = ({
  title,
  heading,
  children,
}: {
  title: string;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Separator className="my-12" />
      <section className=" text-center">
        <Badge className="text-sm rounded-md">{title}</Badge>
        <h2 className="m-4 text-3xl font-semibold">{heading}</h2>
        {children}
      </section>
    </>
  );
};
export default CustomHomeSection;
