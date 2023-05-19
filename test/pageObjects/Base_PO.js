var config = require('../config/main-config');

export default class Base_PO {
    open(path) {
        browser.maximizeWindow();
        browser.url(path);
    }
}