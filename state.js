const inputSt = document.querySelector('#states');
const states = ['California', 'Texas', 'New York', 'Florida'];
const suggt = document.querySelector('.suggestions ul');

inputSt.onkeyup = function (e) {
    let results = [];
    let list = e.target.value;
    if (list)
        results = states.filter((keyword) => {
            return keyword.toLowerCase().startsWith(list.toLowerCase());
        });
    for (let i = 0; i < results.length; i++) {
        let li = document.createElement('li');
        li.innerText = results[i];
        console.log(suggt);
        suggt.append(li);
    }

}