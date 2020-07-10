//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, earthSeconds) => {
let result = 0;

const earthYears = earthSeconds / 31557600;

if(planet === "earth") {
  result = earthYears;
}
else if(planet === "mercury") {
  result = earthYears / 0.2408467;
}
else if(planet === "venus") {
  result = earthYears / 0.61519726 ;
}
else if(planet === "mars") {
  result = earthYears / 1.8808158;
}
else if (planet === "jupiter") {
  result = earthYears / 11.862615;
}
else if (planet === "saturn"){
  result = earthYears / 29.447498;
}
else if (planet === "uranus") {
  result = earthYears / 84.016846;
}
else if (planet === "neptune") {
  result = earthYears / 164.79132;
}
result = Number(result.toFixed(2));

return result;
}

