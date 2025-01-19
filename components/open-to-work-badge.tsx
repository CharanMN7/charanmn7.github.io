import { Badge } from "./ui/badge";

const OpenToWorkBadge = () => {
  return (
    <Badge className="h-fit w-fit flex gap-2">
      {" "}
      <div className="w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full "></div>{" "}
      <div>Open to work</div>
    </Badge>
  );
};
export default OpenToWorkBadge;
