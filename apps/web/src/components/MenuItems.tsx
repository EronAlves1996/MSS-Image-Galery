import { HOVER_LINK } from "@/utils/cssClasses";
import GithubMenuItem from "./GithubMenuItem";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function MenuItems({ pathname }: { pathname: string }) {
  if (["/", "/register"].includes(pathname))
    return (
      <div>
        <GithubMenuItem />
      </div>
    );

  return (
    <>
      <NavigationMenu.Item>Image Gallery</NavigationMenu.Item>
      <div className="flex justify-end gap-10">
        <GithubMenuItem />
        <NavigationMenu.Item className={HOVER_LINK}>
          {/*TODO: edit the link to point to logout */}
          <NavigationMenu.Link href="#">Logout</NavigationMenu.Link>
        </NavigationMenu.Item>
      </div>
    </>
  );
}
