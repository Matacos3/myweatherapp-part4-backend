function checkBody(body, arrayToTest){
  // let result = true;

  for (let i = 0; i < arrayToTest.length; i++){
    if (!body[arrayToTest[i]]){
      return false
    }
  }
  return true
}

module.exports = {checkBody}



