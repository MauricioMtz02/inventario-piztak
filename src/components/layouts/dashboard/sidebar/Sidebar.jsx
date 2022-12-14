import { Profile, Enlaces, enlacesList, catalogoList } from './'

const Sidebar = ({open}) => {
  return (
    <div
      className={`
        max-lg:fixed 
        max-lg:w-full 
        max-lg:h-full 
        max-lg:bg-light 
        max-lg:dark:bg-dark 
        max-lg:top-0 
        max-lg:left-0 
        max-lg:p-5 
        max-lg:pt-20 
        z-10
        transition-all
        ${!open && 'max-lg:-translate-x-full'}
      `}
    >
      <Profile/>

      <div className='mt-10'>
        <p className='font-medium opacity-50 text-lg mb-3 text-dark dark:text-light'>Navegación</p>
        <Enlaces
          enlaces={enlacesList}
        />
      </div>

      <div className='mt-8'>
        <p className='font-medium opacity-50 text-lg mb-3 text-dark dark:text-light'>Catálogos</p>
        <Enlaces
          enlaces={catalogoList}
        />
      </div>
    </div>
  )
}

export default Sidebar
