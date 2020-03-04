const decoded = axios.get("http://54.39.188.42/").then(res => {
  const decodedString = window.atob(res.data);
  const jsonArr = JSON.parse(decodedString);
  const html = jsonArr.reduce((result, item) => {
    console.log(item);
    return (
      result +
      `<li class="item">
                <p class="item__id">#${item.id}</p>
                <p class="item__title">${item.title}</p>
                <p class="item__sku">${item.sku}</p>
                <img  class="item__image" src="${item.image}" alt="${item.title}">
                <ul class="item__options">
                    <h4>Produc Options:</h4>
                    <li>Metal type: <span>${item.options[0].metal_type}</span></li>
                    <li>Metal color: <span>${item.options[0].metal_color}</span></li>
                    <li>Stone shape: <span>${item.options[0].stone_shape}</span></li>
                    <li>Gemstone color: <span>${item.options[0].gemstone_color}</span></li>
                </ul>

            </li>`
    );
  }, "");
  document.querySelector(".list").insertAdjacentHTML("afterbegin", html);
});
