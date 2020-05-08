export default () => {
  const ele = document.createElement('h2');
  ele.textContent = "Hello Webpack";
  ele.addEventListener('click', () => alert('Hello Webpack'))
  return ele;
}