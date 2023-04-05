const wrapper = document.querySelector('.search-container');
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.onkeyup = function (e) {
	let str = e.target.value;
	let results = [];
	if (str) {
		results = fruit.filter((keyword) => {
			return keyword.toLowerCase().startsWith(str.toLowerCase());
		});
		results = results.map((keyword) => {
			return keyword = '<li>' + keyword + '</li>';
		})
		console.log(results);
		wrapper.classList.add("active");

		showSuggestions(results);
		let allList = suggestions.querySelectorAll("li");
		for (let i = 0; i < allList.length; i++) {
			allList[i].setAttribute("onclick", "useSuggestion(this)");
		}
	} else {
		wrapper.classList.remove("active");
		
	}
}

function searchHandler(e) {
}
function useSuggestion(e) {
	let selectData = e.textContent;
	input.value = selectData;
	wrapper.classList.remove("active");
}

function showSuggestions(inputVal) {
	let listData;
	if (!inputVal.length) {
		str = input.value;
		listData = '<li>' + str + '</li>'
	} else {
		listData = inputVal.join('');
	}
	suggestions.innerHTML = listData;

}


input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);