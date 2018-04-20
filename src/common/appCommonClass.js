export default class Common {

    constructor() {
        this.startupMethod();
        console.log("App Common Class created");
    }

    startupMethod() {
        this.started = true;
    }

}
