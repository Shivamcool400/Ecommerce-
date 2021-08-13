export const formatPrice = (number) => {
const newNumber = Intl.NumberFormat('en-us',{style:'currency',currency: 'INR'}).format(number/100)
return newNumber

}

export const getUniqueValues = () => {}
