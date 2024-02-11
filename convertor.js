const UNIT = {
  celcius: "°C",
  farhenite: "°F",
};

function convertTemperature(temperature, unit) {
  if (unit == UNIT.celcius) {
    return (9 / 5) * temperature + 32;
  } else if (unit == UNIT.farhenite) {
    return ((temperature - 32) * 5) / 9;
  } else {
    console.log("invalid");
  }
}

function inverseUnit(unit) {
  if (unit == UNIT.celcius) {
    return UNIT.farhenite;
  } else if (unit == UNIT.farhenite) {
    return UNIT.celcius;
  } else {
    console.log("invalid");
  }
}

function isCold(temperature, unit) {
  if (unit == UNIT.celcius && temperature < 0) {
    return true;
  } else if (unit == UNIT.farhenite && temperature < 32) {
    return true;
  } else {
    return false;
  }
}

export { UNIT, convertTemperature, inverseUnit, isCold };
