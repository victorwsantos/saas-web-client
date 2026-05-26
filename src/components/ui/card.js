import Title from "./title"
import Text from "./subtitle"
import ActionButton from "./button"

import {
  cardStyles,
} from "../designSystem"

export default function Card(props) {
  return (
    <div
      className={
        props.className ||
        cardStyles.container
      }
    >
      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <Title
          className={
            props.titleClassName ||
            cardStyles.title
          }
          text={props.title}
        />

        {props.description && (
          <Text
            className={
              props.descriptionClassName ||
              cardStyles.description
            }
            text={props.description}
          />
        )}
      </div>

      {/* VALUE */}
      {props.value && (
        <div>
          <Text
            className={
              props.valueClassName ||
              cardStyles.value
            }
            text={props.value}
          />
        </div>
      )}

      {/* BADGE */}
      {props.hasBadge && (
        <div>
          <Text
            className={
              props.badgeClassName ||
              cardStyles.badge
            }
            text={props.badgeText}
          />
        </div>
      )}

      {/* BUTTON */}
      {props.buttonText && (
        <div className="mt-2">
          <ActionButton
            type={props.buttonType || "button"}
            className={
              props.buttonClassName ||
              cardStyles.button
            }
            onClick={props.onClick}
            text={props.buttonText}
          />
        </div>
      )}
    </div>
  )
}