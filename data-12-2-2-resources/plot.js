console.log(cityGrowths);
var populationSort = cityGrowths.sort((a,b) => b.Increase_from_2016 - a.Increase_from_2016).reverse();
console.log(populationSort);
var topFiveCities = populationSort.slice(0,5);
console.log(topFiveCities);
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);