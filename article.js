var article = {
  title: document.getElementById("article-head"),
  paragraph: [],
  focus: document.getElementById("article-head") //TODO
}
var StartedTyping = false;
var paragraphIndex = -1;

document.addEventListener("keydown", function(event) {
  handleKeyDown(event);
})

var handleKeyDown = function(event) {
  console.log(article.paragraph);
  if (event.key == "Enter") {
    if (article.focus === article.title) {
      article.paragraph.push(createParagraph());
      article.focus = article.paragraph[paragraphIndex + 1];
    } else {
      article.focus = createParagraph();
    }
  } else {
    if (article.focus == article.title) {
      updateTitle(event);
    } else {
      updateParagraph(event);
    }
  }
}

var updateTitle = function (event) {
  if (!StartedTyping) {
    article.title.innerHTML = "";
    StartedTyping = true;
  }
  updateText(event, article.title);
}

var updateParagraph = function (event) {
  var paragraph = article.paragraph[paragraphIndex];
  updateText(event, paragraph);
}

var createParagraph = function() {
  var articleWrapper = document.getElementById("article-text");
  var newParagraph = document.createElement("p");
  newParagraph.className = "article-p";
  newParagraph.setAttribute("id", "article-p");
  newParagraph.innerHTML = "";
  articleWrapper.appendChild(newParagraph);
  return newParagraph;
}

var updateText = function (event, text) {
  console.log(article.paragraph);
  var key = event.key;
  if (key.length == 1) {
    text.innerHTML += key;
  } else if (key == "Backspace") {
    text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
  }
}
