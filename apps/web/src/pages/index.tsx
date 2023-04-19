import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="p-7">
      <IndexLogo />
      <Background />
      <LoginSlot />
    </section>
  );
}

const IndexLogo = () => (
  <div className="z-20 absolute">
    <h2 className="text-7xl pl-9">Image Gallery</h2>
    <h3>Todas as suas fotos...</h3>
    <h3>...em um só lugar</h3>
  </div>
);

const Background = () => (
  <div className="bg-[url('/demo-photo.png')] bg-repeat-x h-screen w-screen absolute">
    <div className="bg-gradient-to-br from-white from-30% to-transparent h-[100%] w-[100%]" />
  </div>
);

const LoginSlot = () => {};
