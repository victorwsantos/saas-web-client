import { useNavigate } from "react-router-dom"

import Form from "../components/form"

export default function CreateOrder() {
  const navigate = useNavigate()

  async function handleCreateOrder(data) {
    console.log(data)

    /*
      Aqui você envia para API
    */

    navigate("/orders")
  }

  return (
    <div
      className="
        max-w-4xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-sm
        border
        border-gray-100
        p-6
      "
    >
      <Form
        title="Nova Ordem de Serviço"
        description="Preencha os dados da nova OS"

        className="
          flex
          flex-col
          gap-6
        "

        titleClassName="
          text-3xl
          font-bold
          text-gray-900
        "

        descriptionClassName="
          text-gray-500
          mb-2
        "

        submitButtonClassName="
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-xl
          transition
          mt-4
        "

        submitText="Criar Ordem"

        onSubmit={handleCreateOrder}

        elements={[
          {
            type: "input",
            name: "clientName",
            inputType: "text",
            placeholder: "Nome do cliente",
          },

          {
            type: "input",
            name: "phone",
            inputType: "text",
            placeholder: "Telefone",
          },

          {
            type: "input",
            name: "brand",
            inputType: "text",
            placeholder: "Marca do veículo",
          },

          {
            type: "input",
            name: "model",
            inputType: "text",
            placeholder: "Modelo do veículo",
          },

          {
            type: "input",
            name: "engine",
            inputType: "text",
            placeholder: "Motor",
          },

          {
            type: "input",
            name: "description",
            inputType: "text",
            placeholder: "Descrição do problema",
          },

          {
            type: "input",
            name: "observation",
            inputType: "text",
            placeholder: "Observações",
          },

          {
            type: "text",
            text: "Fotos do veículo",
            className: "font-medium text-gray-700 mt-2",
          },

          {
            type: "input",
            name: "photos",
            inputType: "file",
            placeholder: "",
          },

          {
            type: "text",
            text: "Vídeo do veículo",
            className: "font-medium text-gray-700 mt-2",
          },

          {
            type: "input",
            name: "video",
            inputType: "file",
            placeholder: "",
          },
        ]}
      />
    </div>
  )
}