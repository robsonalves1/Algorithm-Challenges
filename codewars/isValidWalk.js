function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    let aux = 0;

    if (walk.length == 10) {
        while (walk.length > 0) {
            aux = walk.shift();
            
            switch (aux) {
                case "n":
                    y++;
                    break;
                case "s":
                    y--;
                    break;
                case "e":
                    x++;
                    break;
                case "w":
                    x--;
                    break;
            }
        }

        if (x == 0 && y == 0) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }
}