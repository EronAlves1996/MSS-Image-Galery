import FormInputField, { FormConfiguration } from "@/components/FormInputField";
import SubmitButton from "@/components/SubmitButton";

const registerFormConfig: Array<FormConfiguration> = [
  {
    id: "fullname",
    label: "Seu nome Completo",
    name: "fullname",
    type: "text",
  },
  {
    id: "username",
    label: "Nome de Usuário",
    name: "username",
    type: "text",
  },
  {
    id: "password",
    label: "Senha",
    name: "password",
    type: "password",
  },
  {
    id: "confirm-password",
    label: "Repita sua senha",
    name: "confirm-password",
    type: "password",
  },
];

export default function Register() {
  return (
    <div className="bg-[url('/demo-photo.png')] bg-repeat-x h-[90vh] w-screen relative -z-0">
      <div className="bg-gradient-to-br from-white from-30% to-transparent h-[100%] w-[100%] top-0 left-0 absolute -z-10" />
      <section className="flex flex-col gap-10 p-7 ml-32">
        <h2 className="text-7xl">Se Registrar</h2>
        <form className="z-10 w-80 flex flex-col gap-4">
          {registerFormConfig.map((el) => (
            <FormInputField {...el} key={el.id} />
          ))}
          <SubmitButton className="w-28 self-center">Registrar</SubmitButton>
        </form>
      </section>
    </div>
  );
}
