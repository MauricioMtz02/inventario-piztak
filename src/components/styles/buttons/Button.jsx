const colors = {
  primary: 'bg-primary text-light hover:bg-sky-500 dark:text-dark',
  secondary: 'bg-secondary text-light hover:bg-slate-600',
  light: 'bg-light text-dark hover:bg-gray-100 dark:bg-dark dark:text-light dark:hover:bg-gray-700',
  dark: 'bg-dark text-light hover:bg-gray-700 dark:bg-light dark:text-dark dark:hover:bg-gray-100',
}

const Button = ({children, onClick, className, color = 'primary'}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg py-1 px-4 shadow ${colors[color]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
