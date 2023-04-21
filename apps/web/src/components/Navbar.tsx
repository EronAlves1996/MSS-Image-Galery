import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import MenuItems from "./MenuItems";

export default function Navbar({ pathname }: { pathname: string }) {
  const navigationMenuFlexPosition =
    pathname === "/" ? "justify-end" : "justify-between";

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className={"flex p-5 " + navigationMenuFlexPosition}>
        <MenuItems {...{ pathname }} />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
