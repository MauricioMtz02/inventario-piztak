const colors = {
  primary: 'text-light bg-primary',
  light: 'text-dark bg-light dark:bg-dark dark:text-light'
}

const sizes = {
  sm: 'p-1 text-sm rounded-md',
  md: 'p-2 text-base rounded-xl',
  lg: 'p-2 text-lg rounded-xl',
  xl: 'p-2 text-xl rounded-xl'
}

const ButtonIcon = ({Icon, title, onClick, className = '', color = 'light', size = 'xl'}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`shadow ${sizes[size]} ${colors[color]} ${className}`}
    >
      <Icon/>
    </button>
  )
}

export default ButtonIcon
