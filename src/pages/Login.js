import { useAuth } from "../context/authContext"
import Form from "../components/ui/form"

const LOGIN_ELEMENTS = [
  {
    type: "input",
    inputType: "text",
    name: "user",
    placeholder: "Usuário",
    className: "border rounded-lg p-3 outline-none",
  },
  {
    type: "input",
    inputType: "password",
    name: "password",
    placeholder: "Senha",
    className: "border rounded-lg p-3 outline-none",
  },
]

export default function Login() {
  const { login } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Form
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4"
        title="Login"
        titleClassName="text-3xl font-bold text-center"
        elements={LOGIN_ELEMENTS}
        submitText="Entrar"
        submitButtonClassName="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-3 transition"
        onSubmit={login}
      />
    </div>
  )
}