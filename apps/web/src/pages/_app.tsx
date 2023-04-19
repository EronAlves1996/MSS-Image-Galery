import "@/styles/globals.css";
import { HOVER_LINK } from "@/utils/cssClasses";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

const Navbar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex justify-between p-5">
        <NavigationMenu.Item>Image Gallery</NavigationMenu.Item>
        <div className="flex justify-end gap-10">
          <NavigationMenu.Item className={HOVER_LINK}>
            <NavigationMenu.Link
              href="https://github.com/EronAlves1996/MSS-Image-Galery"
              className="flex gap-2"
            >
              <img src={"/Octicons-mark-github.svg"} className="w-6" />
              <p>Github</p>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className={HOVER_LINK}>
            {/*TODO: edit the link to point to logout */}
            <NavigationMenu.Link href="#">Logout</NavigationMenu.Link>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
