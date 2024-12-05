const { animales, autos } = require('./datos');
const _ = require('lodash');


const autosL = _.uniq(autos)
const animalesL = _.find(animales, {tipo:'salvaje'})

console.log('Nuevos autos', autosL)
console.log('Nuevos animales salvajes', animalesL)
