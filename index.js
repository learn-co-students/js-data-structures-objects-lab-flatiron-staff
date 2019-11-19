// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driverObj, key, value) {
  return {
    ...driverObj,
    [key]: value
  };
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const copy = {...driver}
  delete copy[key];

  return copy;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}