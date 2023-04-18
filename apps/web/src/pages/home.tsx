import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const HOVER_LINK = "hover:font-bold";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col p-5">
        <h2>Galeria</h2>
        <section>
          <Sidebar />
          <div></div>
        </section>
      </section>
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

const Sidebar = () => (
  <>
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-col gap-5">
        <NavigationMenu.Item className="pt-4">
          <NavigationMenu.Link>Item 1</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="border-t-2 border-t-gray-400 pt-4">
          <NavigationMenu.Link>Item 2</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </>
);
