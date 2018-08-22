let friends = ['Charles', 'Jemma', 'Kim', 'Amanda', 'Kenji'];

function printSong(names){
    for (name of names) {
        createSong(name);
    }
}

function createSong(name) {
    let lyrics = [];
    for (i = 99; i > 0; i--) {
        switch (i) {
            case 1:
                lyrics.push(`${i} lines of code in the file, ${i} lines of code; ${name} strikes one out, clears it all out, no more lines of code in the file`);
                break;
            case 99:
                lyrics.push(`${name}:`);
            default:
                lyrics.push(i + ' lines of code in the file,' + i + ` lines of code; ${name} strikes one out, clears it all out, ${i - 1} lines of code in the file`);
        }


    }
    return lyrics;
}