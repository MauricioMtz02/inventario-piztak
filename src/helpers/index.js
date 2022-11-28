export const toFirstUppercase = str => {
  const first = str.charAt(0).toUpperCase()
  const last = str.slice(1)

  return `${first}${last}`
}

export const setLocalStorage = (item, name) => {
  localStorage.setItem(name, JSON.stringify(item))
}

export const getLocalStorage = (name, config) => {
   let item = JSON.parse(localStorage.getItem(name))

   if(!item){
       if(config){
          if(config.set && config.data){
              setLocalStorage(config.data, name)
              item = config.data
          }
       }
   }

   return item
}

export const getUrlParam = (url, position) => {
  const array = url.split('/')
  array.shift()

  return array[position]
}

export const getFirstWord = str => {
  const array = str.split(' ')
  return array[0]
}

export const generateUrlConfig = (url, config) => {
  let str = url

  const { where } = config

  if(config.limit){
      str+= `?limit=${config.limit}`
  }

  if(config.page){
      str+= `&page=${config.page}`
  }

  // Generar where
  Object.keys(where).forEach((column, i) => {
      str+= `&${column}=${Object.values(where)[i]}` 
  })

  return str
}

export const coinFormat = cantidad => {
  return Number(cantidad).toLocaleString('es-MX', {style: 'currency',currency: 'MXN', minimumFractionDigits: 2});
}

export const telFormat = tel => {
  if(tel.length !== 10){
    return tel
  }

  return `${tel.substring(0, 3)} ${tel.substring(3, 6)} ${tel.substring(6, 8)} ${tel.substring(8, 10)}`
}

export const generateNamePizza = (ingredientes) => {
  const dictionary = {
    1: {
      0: ''
    },
    2: {
      0: 'Mitad',
      1: 'Mitad'
    },
    3: {
      0: 'Un Cuarto',
      1: 'Un Cuarto',
      2: 'Mitad'
    },
    4: {
      0: 'Un Cuarto',
      1: 'Un Cuarto',
      2: 'Un Cuarto',
      3: 'Un Cuarto',
    }
  }

  let str = ''

  ingredientes.map(({name}, i) => {
    str+= `${dictionary[ingredientes.length][i]} ${name} `
  })

  return str
}