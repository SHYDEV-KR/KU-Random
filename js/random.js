const board = document.querySelector("#board");
const find_path_btn = document.querySelector("#find-path-btn");
const run_btn = document.querySelector("#run-btn");
const tags = document.querySelectorAll(".tag");
for (let i = 0; i < tags.length; i++) {
    tags[i].id = `tag-${i}`;
    tags[i].addEventListener("click", (e) => {
        tagClicked(e, tags[i]);
    });
}

function init() {
    board.innerHTML = "아래 버튼을 눌럿";
}

function getRandom() {
    fetch('https://shydev-kr.github.io/KU-Random/data.json')
        .then(response => {
            return response.json();
        })
        .then(restaurants => {
            let column_index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            for (let i = 0; i < tags.length; i++) {
                if (tags[i].classList.contains("clicked")) {
                    for (let j = 0; j < column_index.length; j++) {
                        if (column_index[j] === i) {
                            column_index.splice(j, 1);
                        }
                    };
                }
            }

            if (column_index.length !== 0) {
        
            let rand_column_index = column_index[Math.floor(Math.random() * column_index.length)];
            const key = Object.keys(restaurants[rand_column_index])[2];
            const rand_index = Math.floor(Math.random() * (restaurants[rand_column_index][key].length));
            
            const result = restaurants[rand_column_index][key][rand_index];
            board.innerHTML = `${result}`;
            find_path_btn.href = `https://map.kakao.com/link/search/고려대학교+${result}`;
            } else {
                board.innerHTML = `뭐라도 골라야지...`;
            }
            
    });
};


function tagClicked(e, tag) {
    if (!(tag.classList.contains("clicked"))) {
        tag.classList.add("clicked");
    } else {
        tag.classList.remove("clicked");
    }
}


init();
run_btn.addEventListener("click", getRandom);