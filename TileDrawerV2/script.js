function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev, el) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(data));
}

function drawNewTile() {
    while (hand.children.length > 0) {
        drawn.appendChild(hand.children[0]);
    }

    let randMax = bag.children.length;
    if (randMax <= 0) {
        alert('No tiles to be drawn!');
        resetBag();
        return;
    }
    console.log("Drawing tile from " + randMax + " tiles");
    let rand = getRandomInt(randMax);

    hand.appendChild(bag.children[rand]);
}
function getSecondTile() {

    let randMax = bag.children.length;
    if (randMax <= 0) {
        alert('No tiles to be drawn!');
        return;
    }
    let rand = getRandomInt(randMax);

    hand.appendChild(bag.children[rand]);

    bag.appendChild(hand.children[0]);
}
function returnTile() {
    let randMax = hand.children.length;
    if (randMax <= 0) {
        alert('No tiles to be returned!');
        return;
    }
    console.log("returning tiles");
    while (hand.children.length > 0) {
        bag.appendChild(hand.children[0]);
    }
}
function resetBag() {
    while (drawn.children.length > 0) {
        bag.appendChild(drawn.children[0]);
    }
    for (let i = 0; i < bag.children.length; i++) {
        if (bag.children[i].id.includes("blue")) {
            drawn.appendChild(bag.children[i]);
            i--;
        } else
        if (bag.children[i].id.includes("red")) {
            drawn.appendChild(bag.children[i]);
            i--;
        } else
        if (bag.children[i].id.includes("smeagol")) {
            drawn.appendChild(bag.children[i]);
            i--;
        }
    }
}
function discardTile() {
    let randMax = hand.children.length;
    if (randMax <= 0) {
        alert('No tiles to be discarded!');
        return;
    }
    console.log("discarding tile(s)");
    while (hand.children.length > 0) {
        discard.appendChild(hand.children[0]);
    }
}
function enterMordor() {
    for (let i = 0; i < drawn.children.length; i++) {
        if (drawn.children[i].id.includes("eye")) {
            bag.appendChild(drawn.children[i]);
            i--;
        } else
        if (drawn.children[i].id.includes("blue")) {
            bag.appendChild(drawn.children[i]);
            i--;
        } else
        if (drawn.children[i].id.includes("red")) {
            bag.appendChild(drawn.children[i]);
            i--;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
/*
<img src="src/0r.png" draggable="true" ondragstart="drag(event)" id="0r" width="40" height="40" alt="0r.png">
    <img src="src/1.png" draggable="true" ondragstart="drag(event)" id="1" width="40" height="40" alt="1.png">
        <img src="src/1r.png" draggable="true" ondragstart="drag(event)" id="1r" width="40" height="40" alt="1r.png">
            <img src="src/2.png" draggable="true" ondragstart="drag(event)" id="2" width="40" height="40" alt="2.png">
                <img src="src/2r.png" draggable="true" ondragstart="drag(event)" id="2r" width="40" height="40" alt="2r.png">
                    <img src="src/3.png" draggable="true" ondragstart="drag(event)" id="3" width="40" height="40" alt="3.png">
                        <img src="src/eyer.png" draggable="true" ondragstart="drag(event)" id="e" width="40" height="40" alt="eye.png">
*/