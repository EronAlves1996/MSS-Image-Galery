import "@/styles/globals.css";
import { HOVER_LINK } from "@/utils/cssClasses";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const pathname = router.pathname;

  return (
    <>
      <Navbar {...{ pathname }} />
      <Component {...pageProps} />;
    </>
  );
}

const Navbar = ({ pathname }: { pathname: string }) => {
  const navigationMenuFlexPosition =
    pathname === "/" ? "justify-end" : "justify-between";

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className={"flex p-5 " + navigationMenuFlexPosition}>
        <MenuItems {...{ pathname }} />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const MenuItems = ({ pathname }: { pathname: string }) => {
  if (pathname === "/")
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
};

const GithubMenuItem = () => (
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
