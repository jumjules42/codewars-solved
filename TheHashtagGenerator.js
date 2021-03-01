/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag (str) {
    if(str.trim().length === 0) return false;
    let stringTrim = str.trim()
        .split(" ")
        .filter(el => el !== "")
    stringTrim.unshift("#");
    stringTrim = stringTrim.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join("");
    return stringTrim.length <= 140 ? stringTrim : false;
}

console.log(generateHashtag("a".repeat(140)));
