import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { LinkedinIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const BottomBar = () => {
  return (
    <div className="fixed max-w-screen-lg bottom-0 left-0 right-0 mx-auto px-12 mb-8">
      <div className="container sm:flex sm:flex-wrap p-2 sm:items-center sm:justify-between w-full border-solid border border-gray-200 dark:border-gray-800 rounded-[1rem] md:rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/35">
        <div className="sm:flex items-center justify-center gap-4 text-center sm:text-left">
          {/* <img
            src="https://placeholder.co/64x64/"
            alt="Picture of Charan"
            className="rounded-full hidden sm:block"
            loading="lazy"
          /> */}
          <div className="ml-4">
            <h2 className="text-2xl font-semibold flex justify-center items-center gap-4">
              <span>Charan</span>{" "}
              <Badge className="h-fit flex gap-2">
                {" "}
                <div className="w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full"></div>{" "}
                <div>Open to work</div>
              </Badge>
            </h2>
            <span className="mt-2 mb-4 sm:m-0 block">contact@charan.dev</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <ModeToggle />

          <Button variant="outline" className="rounded-full" asChild>
            <a href="http://linkedin.com/in/charan-manikanta/" target="_blank">
              <LinkedinIcon />
            </a>
          </Button>
          <Button
            variant="default"
            className="rounded-full sm:mr-4 bg-[#FFB20B] "
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
