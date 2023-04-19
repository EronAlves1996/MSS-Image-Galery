import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex">
      <div className="bg-[url('/demo-photo.png')] h-screen w-screen">
        <div className="bg-gradient-to-bl from-white from-30% to-transparent h-[100%] w-[100%]" />
      </div>
    </section>
  );
}
