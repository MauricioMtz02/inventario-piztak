import { ButtonIcon } from "../../../styles/buttons"
import { RiSunLine, RiMoonFill } from "react-icons/ri"
import { useDarkMode } from "../../../../hooks"

const DarkMode = () => {
  const { darkMode, handleDarkMode } = useDarkMode()

  return (
    <ButtonIcon
      Icon={!darkMode ? RiSunLine : RiMoonFill}
      title='Dark Mode'
      className="mr-3"
      onClick={handleDarkMode}
    />
  )
}

export default DarkMode
