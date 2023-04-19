import { HOVER_LINK } from "@/utils/cssClasses";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";


const HOVER_LINK = "hover:font-bold";

//TODO: delete fake thumbs data
const images = [
  "12-harold.jpg",
  "1550001306201.jfif",
  "500_F_214350091_vk8S4WcEy1vSYozD9S2reb6rVRb8amuL.jpg",
  "500x500 (1).jpg",
  "500x500.jpg",
  "51cxe+2bpvL.jpg",
  "artworks-000057933559-tr05lk-t500x500.jpg",
  "download.jfif",
  "images (1).jfif",
  "images (2).jfif",
  "images (3).jfif",
  "images.jfif",
  "main-qimg-700d9e110c44a58fb9947cb8ba640c73-lq.jfif",
  "tumblr_nrut65MIld1rfwfq9o1_500.jpg",
  "web-dubois-1868-1963-american-educator-editor-and-writer-who-helped-create-the-naacp-national-association-for-the-advancement-of-colored-people-undated-photograph-gett.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-sidebar-content grid-rows-2 gap-3 p-5">
        <div></div>
        <h2 className="text-7xl">Galeria</h2>
        <Sidebar className="w-32" />
         <div className="flex flex-wrap gap-1">
           {images.map((image) => (
             <ImageItem imageName={image} />
           ))}
         </div>
      </section>
    </>
  );
}


const Sidebar = () => (
  <>
    <NavigationMenu.Root {...{ className }}>
      <NavigationMenu.List className="flex flex-col gap-5">
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

const ImageItem = ({ imageName }: { imageName: string }) => {
  return (
    <>
      <img src={`fakeThumbs/${imageName}`} className="w-48 hover:opacity-60" />
    </>
  );
};
