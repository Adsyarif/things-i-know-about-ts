var combine = function (i1, i2) {
    if (typeof i1 === "number" && typeof i2 === "number") {
        console.log("Total: ", i1 + i2);
    }
    if (typeof i1 === "string" && typeof i2 === "string") {
        console.log("Text: ", i1, i2);
    }
};
combine(2, 4);
combine("Trex", 4);
