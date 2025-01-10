"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(_, methodName, descriptor) {
    const originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            Object.defineProperty(this, methodName, {
                value: boundFn,
                configurable: true,
                enumerable: false,
                writable: true,
            });
            return boundFn;
        },
    };
}
class Printer {
    constructor() {
        this.message = "This Works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", p.showMessage);
//# sourceMappingURL=app.js.map