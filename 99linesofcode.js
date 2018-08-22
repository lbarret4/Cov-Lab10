let friends = ['Charles', 'Jemma', 'Kim', 'Amanda', 'Kenji'];

for (friend of friends) {
    createSong(friend);
}
function createSong(name) {
    for (i = 99; i > 0; i--) {
        switch (i) {
            case 1:
                console.log(`${i} lines of code in the file, ${i} lines of code; ${name} strikes one out, clears it all out, no more lines of code in the file`);
                break;
            case 99:
                console.log(`${name}:`);
            default:
                console.log(i + ' lines of code in the file,' + i + ` lines of code; ${name} strikes one out, clears it all out, ${i - 1} lines of code in the file`);
        }


    }

}