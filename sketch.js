const app = document.querySelector("#app");
const form = app.querySelector("#tweet-form");
const input = app.querySelector("#tweet-input");
const tweetList = app.querySelector("#tweet-list");

let tweets = [];

form.addEventListener("submit", event => {
  event.preventDefault();
  const tweet = input.value;
  tweets.unshift(tweet);
  input.value = "";
  render();
});

function render() {
  tweetList.innerHTML = "";
  tweets.forEach(tweet => {
    const tweetElement = document.createElement("li");
    tweetElement.innerHTML = tweet;
    tweetList.appendChild(tweetElement);
  });
}
