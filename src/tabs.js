function tabs() {
  const navbar = document.createElement('nav');
  navbar.setAttribute('id', 'navbar');
  for (let i = 0; i < 3; i += 1) {
    const link = document.createElement('a');
    link.setAttribute('id', `link-${i}`);
    navbar.appendChild(link);
  }
  const linksList = navbar.children;
  linksList[0].innerHTML = 'Home |';
  linksList[1].innerHTML = '  Menu  |';
  linksList[2].innerHTML = '  Contact';
  return navbar;
}

export default tabs;
