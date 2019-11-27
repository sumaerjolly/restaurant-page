function menu() {
  const content = document.querySelector('#content');

  content.innerHTML = '<h1> Menu <h1>';
  const ul = document.createElement('ul');
  const firstItem = document.createElement('li');
  firstItem.innerHTML = 'The meister beef burger';
  const secondItem = document.createElement('li');
  secondItem.innerHTML = 'Veggie Burger';
  const thirdItem = document.createElement('li');
  thirdItem.innerHTML = 'Lamb Burger';
  ul.appendChild(firstItem);
  ul.appendChild(secondItem);
  ul.appendChild(thirdItem);
  content.appendChild(ul);

  return content;
}

export default menu;
