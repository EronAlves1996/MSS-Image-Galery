import { HOVER_LINK } from "@/utils/cssClasses";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";

export default function GithubMenuItem() {
  return (
    <>
      <NavigationMenu.Item className={HOVER_LINK}>
        <NavigationMenu.Link
          href="https://github.com/EronAlves1996/MSS-Image-Galery"
          className="flex gap-2"
        >
          <Image
            src={"/Octicons-mark-github.svg"}
            className="w-6"
            alt=""
            width={100}
            height={100}
          />
          <p>Github</p>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </>
  );
}
