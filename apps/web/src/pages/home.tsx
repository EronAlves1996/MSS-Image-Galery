import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}

const Navbar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>Image Gallery</NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://github.com/EronAlves1996/MSS-Image-Galery">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/*TODO: edit the link to point to logout */}
          <NavigationMenu.Link href="#">Logout</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
