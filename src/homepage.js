function homePage() {
  const content = document.querySelector('#content');
  content.innerHTML = '<h1> Jolly Good Burgers </h1>';
  content.classList.add('heading');
  const p = document.createElement('p');
  p.innerHTML = 'Easily the best burgers in Delhi';
  content.appendChild(p);

  return content;
}

export default homePage;
