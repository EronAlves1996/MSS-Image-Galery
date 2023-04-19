import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Home() {
  return (
    <>
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
