const titleElem = document.querySelector('.title');

setInterval(() => {
  const lastChar = titleElem.textContent[titleElem.textContent.length - 1];

  if (lastChar === '_') {
    titleElem.textContent = titleElem.textContent.slice(0, -1);
  } else titleElem.textContent += '_';
}, 400);