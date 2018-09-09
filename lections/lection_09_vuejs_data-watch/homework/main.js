var counrryList = {
  ukr: 'Украина', 
  hun: 'Венгрия',
  pl: 'Польша' 
};

var cities = {
  ukr: ['Kiev', 'Kharkiv'], 
  hun: ['Будапешт'],
  pl: 'Польша'
}


var app = new Vue({
  el: '#app',
  data: {
    selectedCountry: undefined,
    selectedCity: undefined,
    counrryList: counrryList,
    cityList: cities
  },
  methods: {
    equal(val){
      console.log(val);

      return val == 'ukr' ? 'selected' : '' 
    }
  }
})