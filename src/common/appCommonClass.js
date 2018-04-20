export default class Common {

    constructor() {
        this.startupMethod();
    }

    // Just some visual output for the visitor
    startupMethod() {
        let el = document.getElementById('app');
        el.innerHTML = '\
            <h2 class="main-title">\
                Automated development environment for JavaScript apps\
            </h2>\
            <p style="text-align:center;">It works :)</p>';
    }

}
