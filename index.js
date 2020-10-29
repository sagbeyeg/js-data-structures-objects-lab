const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const updatedDriver = { ...driver };
  // console.log(key)
  // console.log(value)
  updatedDriver[key] = value;
  // console.log(updatedDriver)
  return updatedDriver 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {
  // const updatedDriver = { ...driver };
  const updatedDriver = Object.assign({}, driver);
  delete updatedDriver[key];
  return updatedDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
// destructivelyUpdateDriverWithKeyAndValue(driver, "name", "Sisan")