export default function card(elem) {
  const card = document.createElement('div');

  card.innerHTML = `
    <div class="bg-[#F9F9F9] rounded shadow overflow-hidden p-3">
      <img src="${elem.image}" class="w-full h-44 object-contain">

      <div class="p-4">
        <div class="flex justify-between">
          <h3 class="font-semibold text-#373737">${elem.name}</h3>
          <span>$ ${elem.price}</span>
        </div>

        <p class="text-sm text-[##696161] mt-2">
          ${elem.description}
        </p>

        <button class="mt-4 px-4 py-2  bg-[#373737] text-white rounded hover:bg-[#151DE01C]">
          Order Now
        </button>
      </div>
    </div>
  `;

  return card;
}