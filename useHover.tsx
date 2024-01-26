import { useState } from "react"

interface Options {
  onEnter?: () => void
  onLeave?: () => void
  onChanges?: (isHovering: boolean) => void
}
function useHover(target: Element, options: Options) {
  const { onEnter, onLeave, onChanges } = options

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
    onEnter?.()
    onChanges?.(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    onLeave?.()
    onChanges?.(false)
  }

  target.addEventListener("mouseenter", handleMouseEnter)
  target.addEventListener("mouseleave", handleMouseLeave)

  return isHovering
}
