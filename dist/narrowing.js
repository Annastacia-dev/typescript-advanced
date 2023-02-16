"use strict";
// Narrowing is the process of removing types from a union type
function detectType(val) {
    if (typeof val === 'number') {
        return val + 3;
    }
    return val.toUpperCase();
}
function detectTypeTwo(id) {
    if (!id) {
        return 'No ID';
    }
    return id.toLowerCase();
}
// The in operator
