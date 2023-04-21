import { HOVER_LINK } from "@/utils/cssClasses";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function GithubMenuItem() {
  return (
    <>
      <NavigationMenu.Item className={HOVER_LINK}>
        <NavigationMenu.Link
          href="https://github.com/EronAlves1996/MSS-Image-Galery"
          className="flex gap-2"
        >
          <img src={"/Octicons-mark-github.svg"} className="w-6" />
          <p>Github</p>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </>
  );
}
