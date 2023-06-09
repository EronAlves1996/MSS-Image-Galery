import FormInputField from "@/components/FormInputField";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/demo-photo.png')] bg-repeat-x h-[90vh] w-screen relative">
      <div className="bg-gradient-to-br from-white from-30% to-transparent h-[100%] w-[100%] top-0 left-0 absolute" />
      <section className="grid grid-rows-[0.5fr_minmax(0,_1fr)] grid-cols-[1fr_min-content]">
        <IndexLogo className="col-span-2" />
        <div />
        <LoginSlot />
      </section>
    </div>
  );
}

const IndexLogo = ({ className }: { className?: string }) => (
  <div className={`z-20 p-7 ${className}`}>
    <h2 className="text-7xl pl-9">Image Gallery</h2>
    <h3>Todas as suas fotos...</h3>
    <h3>...em um só lugar</h3>
  </div>
);

const LoginSlot = () => (
  <div className="z-20 border-gray-600 border-solid border-2 rounded-lg bg-white opacity-80 mr-7 w-[27rem] flex flex-col p-3 py-8">
    <form className="p-7 flex flex-col gap-5">
      <p className="text-center font-bold">Comece já a aproveitar!!</p>
      <FormInputField
        id="username"
        label="Nome de Usuário"
        name="username"
        type="string"
      />
      <FormInputField
        id="password"
        label="Senha"
        name="password"
        type="password"
      />
      <div>
        <SubmitButton>Login</SubmitButton>
      </div>
    </form>
    <button className="border-gray-500 border-solid border-2 bg-cyan-300 rounded-md p-1 hover:bg-cyan-500 hover:text-white w-20 self-center">
      <Link href={"/register"}>Registrar</Link>
    </button>
  </div>
);
