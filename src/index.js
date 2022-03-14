/**
 * 
 * 
 * 
 */

/**
 * Sleep
 * 
 * Sleep sets a delay in your logic
 * 
 * @param {number} ms 
 * @returns 
 */
exports.sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Log
 * 
 * Log is a short for console.log() to keep things quick and code clean
 * 
 * @param {*} arg 
 * @returns 
 */
exports.log = (arg) => {
  return console.log(arg);
}

