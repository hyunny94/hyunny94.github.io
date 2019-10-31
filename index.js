function changeActiveTabOnClick(aTag) {
    var active = document.getElementsByClassName("nav-link active")[0]
    active.className = "nav-link";
    if (aTag.className !== "navbar-brand") {
        aTag.className = "nav-link active"
    }
    else {
        document.getElementById("home_aTag").className = "nav-link active";
    }
}

function changeActiveTabOnScroll() {
    const home = document.getElementById("home").getBoundingClientRect().y
    const features = document.getElementById("features").getBoundingClientRect().y
    const feedback = document.getElementById("feedback").getBoundingClientRect().y
    const contact = document.getElementById("contact").getBoundingClientRect().y
    var curr;
    if (home === 0) {
        curr = "home"
    }
    else if (features <= 0 && feedback > 100) {
        curr = "features"
    }
    else if (feedback <= 100 && contact > 0) {
        curr = "feedback"
    }
    else if (contact === 0) {
        curr = "contact"
    }
    if (typeof curr !== "undefined") {
        console.log(curr)
        var active = document.getElementsByClassName("nav-link active")[0]
        console.log(active)
        active.className = "nav-link";
        console.log(document.getElementById(`${curr}_aTag`))
        document.getElementById(`${curr}_aTag`).className = "nav-link active"
    }
}