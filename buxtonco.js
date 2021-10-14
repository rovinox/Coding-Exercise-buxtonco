/*  Instructions:
 *    There are 3 functions below with requirements above them.
 *    Write your code within the function bodies.  You can click
 *    run in the bottom left of your screen as many times as you
 *    want to check your progress.
 */

/* Validate Form:
 *
 *  An object literal will be provided which has two constrained properties:
 *    - username: a string which must be at least 5 characters long
 *    - password: a string which must be at least 7 characters long
 *
 *  return true if the conditions are met, false otherwise
 *
 *  Example Input:
 *    {
 *      username: 'squirrel'
 *      password: 'qazqaz123!`
 *    }
 *
 *  Example Response:
 *    true
 *
 *  Example Explanation:
 *    The object has a username and password property where
 *    the username is at least 5 characters and the password is at least 7 characters
 */
const validateLoginForm = (form) => {
  if (
    !form ||
    !form.password ||
    !form.username ||
    form.password === null ||
    form.username === null ||
    form.username.length <= 5 ||
    form.password.length <= 7
  ) {
    return false;
  } else {
    return true;
  }

  throw new Error("Not Implemented");
};

/* Calculate Sum:
 *
 *  An array of numbers will be provided, return the sum of the numbers
 *
 *  Example Input:
 *    [13, 10, 37]
 *
 *  Example Response:
 *    60
 *
 *  Example Explanation:
 *    The sum of 13, 10, and 37 is 60
 */
const calculateSum = (numbers) => {
  if (!numbers || numbers === null) {
    return 0;
  }

  return numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);
  throw new Error("Not Implemented");
};

/* BONUS QUESTION!
 * Valid Parentheses:
 *
 *  A string of only '(' and ')' characters will be provided,
 *  return true if the parentheses are balanced, false otherwise.
 *
 *  Example Input:
 *    '(())('
 *
 *  Example Response:
 *    false
 *
 *  Example Explanation:
 *    There is an extra open parentheses at the end of the input,
 *    so the string is not balanced.
 *
 *  Note:
 *    For this problem, the input is guaranteed to be a string of at least 1 character
 */
const validParentheses = (input) => {
  throw new Error("Not Implemented");
};

/* !-- Do Not Edit Below This Line --! */

/* Below is the code to that tests the functions above */
const runTest = (input, expected, fn) => {
  try {
    const actual = fn(input);
    console.log(
      `${
        expected === actual ? "🗸" : "✖"
      }  Expected: ${expected}\tActual: ${actual}`
    );
    if (expected !== actual) {
      console.log("\tFailed Test Case:");
      JSON.stringify(input, null, 2)
        .split("\n")
        .forEach((line) => console.log(`\t\t${line}`));
      console.log();
    }
  } catch (err) {
    console.log(`✖  Expected: ${expected}\tActual: Error`);
    console.log("\tFailed Test Case:");
    JSON.stringify(input, null, 2)
      .split("\n")
      .forEach((line) => console.log(`\t\t${line}`));
    console.log("\tError Thrown:");
    console.log(`\t\t${err.toString()}`);
    console.log();
  }
};

const runTests = (name, fn, testCases) => {
  console.log();
  console.log();
  console.log(` ${name} `.padStart(25, "-").padEnd(50 - name.length - 2, "-"));

  try {
    fn(null);
  } catch (err) {
    if (err.message === "Not Implemented") {
      console.log("\tNot Implemented, skipping tests...");
      console.log();
      return;
    }
  }

  console.log();
  testCases.forEach(([input, expected]) => runTest(input, expected, fn));
};

runTests("Validate Login", validateLoginForm, [
  [{ username: "squirrel", password: "qazqaz123!" }, true],
  [{ username: "squi", password: "qazqaz123!" }, false],
  [{ username: "squirrel", password: "qazqaz" }, false],
  [{ username: "squirrel", password: null }, false],
  [null, false],
]);

runTests("Calculate Sum", calculateSum, [
  [[1, 2, 3], 6],
  [[10, 10000, 100000], 110010],
  [[], 0],
  [null, 0],
]);

runTests("Valid Parentheses", validParentheses, [
  ["()", true],
  ["(()", false],
  ["()(", false],
  ["((()))", true],
  ["()()", true],
  ["()))", false],
  [")()", false],
  ["))((", false],
  ["(()))(", false],
  ["())(()", false],
]);
