import { useState } from "react"

import Input from ..put"
import ActionButton from ..tionButton"
import Text from../subtitle"
import Title from../title"

export default function Form(props) {
  const [formData, setFormData] = useState({})

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (props.onSubmit) {
      await props.onSubmit(formData)
    }
  }

  function renderElement(element) {
    switch (element.type) {
      case "input":
        return (
          <Input
            key={element.name}
            type={element.inputType}
            name={element.name}
            placeholder={element.placeholder}
            className={element.className}
            value={formData[element.name] || ""}
            onChange={handleChange}
          />
        )

      case "text":
        return (
          <Text
            key={element.text}
            text={element.text}
            className={element.className}
          />
        )

      default:
        return null
    }
  }

  return (
    <form
      className={props.className}
      onSubmit={handleSubmit}
    >
      <Title
        className={props.titleClassName}
        text={props.title}
      />

      <Text
        className={props.descriptionClassName}
        text={props.description}
      />

      <div className="flex flex-col gap-4">
        {props.elements.map(renderElement)}
     ..v>

      <ActionButton
        type="submit"
        text={props.submitText || "Enviar"}
        className={props.submitButtonClassName}
      />
   ..rm>
  )
}