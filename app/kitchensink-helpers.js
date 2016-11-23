Rho.Kitchensink = Rho.Kitchensink || {};

Rho.Kitchensink.doWithCaution = function (aFunction) {
    $(".result-area > .alert")
        .addClass("hidden")
        .empty();
    try {
        aFunction();
    }
    catch (e) {
        console.log(e);
        Rho.Kitchensink.errorOutput(e);
    }
};


Rho.Kitchensink.resultOutput = function (aString) {
    $("#result").removeClass("hidden")
        .append(aString)
        .append("<br/>");
};

Rho.Kitchensink.resultJsonOutput = function (anObject) {
    $("#result").removeClass("hidden")
        .append("<pre>" + JSON.stringify(anObject, null, 4) + "</pre>")
        .append("<br/>");
};



Rho.Kitchensink.errorOutput = function (aString) {
    $("#error").removeClass("hidden")
        .append(aString)
        .append("<br/>");
};