import { useNavigate } from "react-router-dom"

import Form from "../components/ui/form"

const serviceOptions = [
  "Sacar Estojo Quebrado",
  "Recuperar Face",
  "Recuperar Mancal Cabeçote",
  "Recuperar Mancal Bloco",
  "Colocar Sede Nova",
  "Geral Cabeçote 4V",
  "Geral Cabeçote 8V",
  "Geral Cabeçote 12V",
  "Geral Cabeçote 16V",
  "Facear Cabeçote",
  "Facear Bloco",
  "Solda Cabeçote",
  "Solda Bloco",
  "Lavar / Banho Químico",
  "Ferro de Fixo e Ajustagem",
  "Ferro de Carcaça",
  "Retificar e Ajustar Bielas",
  "Embuchar Bielas",
  "Retificar Virabrequim",
  "Polir Virabrequim",
  "Encher Lateral do Eixo",
  "Encamisar Cilindro",
  "Retificar Cilindro",
  "Brunir Cilindro",
  "Montar Pistões",
  "Montagem de Motor",
  "Venda",
]

export default function CreateOrder() {
  const navigate = useNavigate()

  async function handleCreateOrder(data) {
    console.log(data)
    navigate("/orders")
  }

  return (
    <div
      className="
        max-w-6xl
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
        description="
          Preencha os dados da ordem
        "
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
          /*
           * CLIENTE
           */

          {
            type: "text",
            text: "Cliente",
            className:
              "text-2xl font-semibold text-gray-900",
          },

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

          /*
           * MOTOR / VEÍCULO
           */

          {
            type: "text",
            text: "Motor e Veículo",
            className:
              "text-2xl font-semibold text-gray-900 mt-4",
          },

          {
            type: "input",
            name: "engineNumber",
            inputType: "text",
            placeholder:
              "Número do motor",
          },

          {
            type: "input",
            name: "engine",
            inputType: "text",
            placeholder: "Motor",
          },

          {
            type: "input",
            name: "vehicleBrand",
            inputType: "text",
            placeholder:
              "Marca do veículo",
          },

          {
            type: "input",
            name: "vehicleModel",
            inputType: "text",
            placeholder:
              "Modelo do veículo",
          },

          {
            type: "input",
            name: "entryDate",
            inputType: "date",
          },

          /*
           * SERVIÇOS
           */

          {
            type: "text",
            text: "Serviços a Executar",
            className:
              "text-2xl font-semibold text-gray-900 mt-4",
          },

          ...serviceOptions.map(
            (service) => ({
              type: "checkbox",
              name: "services",
              label: service,
              value: service,
            })
          ),

          {
            type: "input",
            name: "otherServices",
            inputType: "text",
            placeholder:
              "Outros serviços",
          },

          /*
           * OBSERVAÇÕES
           */

          {
            type: "text",
            text: "Observações",
            className:
              "text-2xl font-semibold text-gray-900 mt-4",
          },

          {
            type: "textarea",
            name: "observations",
            placeholder:
              "Digite observações da OS",
          },

          /*
           * PEÇAS
           */

          {
            type: "text",
            text:
              "Peças que o cliente precisa trazer",
            className:
              "text-2xl font-semibold text-gray-900 mt-4",
          },

          {
            type: "textarea",
            name: "requiredParts",
            placeholder:
              "Liste as peças necessárias",
          },

          /*
           * MÍDIAS
           */

          {
            type: "text",
            text: "Fotos",
            className:
              "text-2xl font-semibold text-gray-900 mt-4",
          },

          {
            type: "input",
            name: "photos",
            inputType: "file",
            multiple: true,
          },
          {
            type: "input",
            name: "video",
            inputType: "file",
          },
        ]}
      />
    </div>
  )
}