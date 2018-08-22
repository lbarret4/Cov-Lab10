window.addEventListener('DOMContentLoaded', function () {

    let button = document.querySelector('button');

    button.addEventListener('click', function (e) {

        e.preventDefault();
        let frSong = printSongs(friends);
        let numFriends = friends.length;
        let divContainer = document.querySelector('div');

        for (let i = 0; i < numFriends; i++) {

            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(`${friends[i]}:`);
            let lines = frSong[friends[i]];

            divContainer.appendChild(div);
            div.setAttribute('class', 'friends border border-secondary rounded');
            h3.appendChild(h3Text);
            div.appendChild(h3);



            for (let j = 1; j < frSong[friends[0]].length; j++) {

                let p = document.createElement('p');
                let pText = document.createTextNode(`${lines[j]}`);

                p.appendChild(pText);
                div.appendChild(p);

            }
        }

    });



});