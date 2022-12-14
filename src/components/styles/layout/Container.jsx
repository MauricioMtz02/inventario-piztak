const classes = {
  sm: 'w-11/12',
  md: 'w-11/12 md:w-5/6 lg:w-11/12 xl:w-10/12',
  lg: 'w-11/12 lg:w-4/5 2xl:w-3/5',
  xl: 'w-11/12'
}

const Container = ({children, size = 'md', className}) => {
  return (
    <div className={`${classes[size]} mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
