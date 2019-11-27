function about() {
  const content = document.querySelector('#content');

  content.innerHTML = '<h1> Contact Details <h1>';
  const p = document.createElement('p');
  p.innerHTML = 'D 67 Defence Colony, New Delhi 110024';
  const p1 = document.createElement('p');
  p1.innerHTML = 'Mobile: +919810003175';
  content.appendChild(p);
  content.appendChild(p1);

  return content;
}

export default about;
