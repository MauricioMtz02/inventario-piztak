const colors = {
  primary: '',
  secondary: '',
  dark: 'text-dark dark:text-light',
  light: 'text-light dark:text-dark'    
}

const H1 = ({children, className, color = 'dark'}) => {
  return (
    <h1 className={`text-3xl font-bold ${colors[color]} ${className}`}>
      {children}
    </h1>
  )
}

export default H1