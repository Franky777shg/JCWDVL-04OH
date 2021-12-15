let sortLastChar = (text) => {
  // "laughing out loud" => ["laughing", "out", "loud"]

  let result = text
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  // 103 - 116 = negative => maka ascending

  return result;
};

console.log(sortLastChar("laughing out loud"));
