import Title from../title"
import Text from../subtitle"
import ActionButton from ..tionButton"

export default function Card(props) {
  return (
    <div className={props.className}>
      <div>
        <Title
          className={props.titleClassName}
          text={props.title}
        />
     ..v>

      <div>
        <Text
          className={props.descriptionClassName}
          text={props.description}
        />

        {props.hasBadge && (
          <Text
            className={props.badgeClassName}
            text={props.badgeText}
          />
        )}
     ..v>

      <div>
        <ActionButton
          type={props.buttonType || "button"}
          className={props.buttonClassName}
          onClick={props.onClick}
          text={props.buttonText}
        />
     ..v>
   ..v>
  )
}