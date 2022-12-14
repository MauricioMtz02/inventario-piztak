import { useDarkMode } from "../../../hooks"

const Avatar = ({name, color = 'primary'}) => {
  const { darkMode } = useDarkMode()
  
  const colors = {
    primary: {
      bg: '38bdf8',
      text: !darkMode ? 'f9fafb' : '1f2937'
    },
    secondary: {
      bg: '46575e',
      text: 'f7f9fa'
    },
    light: {
      bg: 'f7f9fa',
      text: '2c2f30'
    },
    dark: {
      bg: '2c2f30',
      text: 'f7f9fa'
    }
  }

  return (
    <img
      src={`https://ui-avatars.com/api/?background=${colors[color].bg}&color=${colors[color].text}&name=${name}`}
      alt={`avatar ${name}`}
      width={48}
      height={48}
      className={'rounded-full'}
    />
  )
}
// https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Mauricio

export default Avatar
