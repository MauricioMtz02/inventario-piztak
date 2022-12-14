const CardTitle = ({children}) => {
  return (
    <div className="p-10 py-12 bg-gradient-to-r from-sky-400 to-sky-300 rounded-xl ralative">
      <div className="relative z-[1]">
        {children}
      </div>

      <div className="absolute">
        <div></div>
      </div>
    </div>
  )
}

export default CardTitle
