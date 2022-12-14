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

export const dateFormat = date => {
  if(!date) date = new Date()

  const dateObj = new Date(date)
  const month = dateObj.getMonth()
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  const hour = dateObj.getHours()
  const minutes = dateObj.getMinutes()

  const fechaUTC = new Date( Date.UTC(year, month, day, hour, minutes) )
  const options = { weekDay: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  const obj = {
    year: fechaUTC.toLocaleDateString('es-MX', {year: 'numeric'}),
    month: fechaUTC.toLocaleDateString('es-MX', {month: 'long'}),
    monthDigit: fechaUTC.toLocaleDateString('es-MX', {month: '2-digit'}),
    monthShort: fechaUTC.toLocaleDateString('es-MX', {month: 'short'}),
    day: fechaUTC.toLocaleDateString('es-MX', {day: '2-digit'}),
    fullDate: fechaUTC.toLocaleDateString('es-MX', options),
    time: dateObj.getTime(),
  }

  obj.date = `${obj.year}-${obj.monthDigit}-${obj.day}`

  return obj
}