// Isolates the node by removing all siblings and parent siblings
function zapothers(node) {
    while (node && node.tagName != "BODY") {
        while (node.nextSibling) {
            node.parentNode.remove(node.nextSibling);
        }
        while (node.previousSibling) {
            node.parentNode.remove(node.previousSibling);
        }
        node = node.parentNode;
    }
}

// Triggers the onclick event for all elements in the array
function clickall(arr) {
    for (i = 0, l = arr.length; i < l; i++) {
        if (arr[i].onclick) {
            arr[i].onclick.apply(arr[i]);
        }
    }
}

function clickall_r(arr) {
    for (i = arr.length-1; i >= 0; i--) {
        if (arr[i].onclick) {
            arr[i].onclick.apply(arr[i]);
        }
    }
}

// Selects an element
function selectElement(node) {
    if (window.getSelection) {
        var r = document.createRange();
        r.selectNode(node);
        window.getSelection().addRange(r);
    }
}

// Examples of how to find stuff
function findingstuff() {
    n = document.getElementsByClassName("main")[0];
    n = document.getElementsByClassName("opt-show");
}

