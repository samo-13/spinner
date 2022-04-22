// refactored spinner1.js

let spinnerChars = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| '];

for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerChars[i]);
  }, (100 + (i * 200)));
}

