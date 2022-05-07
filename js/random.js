const board = document.querySelector("#board");
const find_path_btn = document.querySelector("#find-path-btn");
const run_btn = document.querySelector("#run-btn");

function init() {
    board.innerHTML = "아래 버튼을 눌럿";
}

function getRandom() {
fetch('https://shydev-kr.github.io/KU-Random/data.json')
.then(response => {
    return response.json();
})
    .then(restaurants => {
        const rand_column_index = Math.floor(Math.random() * Object.keys(restaurants).length);
        const key = Object.keys(restaurants[rand_column_index])[0];
        const rand_index = Math.floor(Math.random() * (restaurants[rand_column_index][key].length));
        
        const result = restaurants[rand_column_index][key][rand_index];
        board.innerHTML = `${result}`;
        find_path_btn.href = `https://map.kakao.com/link/search/고려대학교+${result}`;
    });
};


init();
run_btn.addEventListener("click", getRandom);