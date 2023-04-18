import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const HOVER_LINK = "hover:font-bold";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col p-5">
        <h2 className="text-7xl ml-32">Galeria</h2>
        <section className="flex">
          <Sidebar />
          <div className="flex-grow"></div>
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
      <NavigationMenu.List className="flex flex-col gap-5 max-w-7xl">
        <NavigationMenu.Item className="pt-4">
          {/*TODO: edit link to point to new album */}
          <NavigationMenu.Link href="#" className={HOVER_LINK}>
            Novo album
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="border-t-2 border-t-gray-400 pt-4">
          {/*TODO: edit link to point to upload new photo*/}
          <NavigationMenu.Link href="#" className={HOVER_LINK}>
            Nova foto
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </>
);
