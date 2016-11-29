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

Rho.Kitchensink.inlineDoWithCaution = function (aFunction) {
    var result;
    try {
        result = aFunction();
    }
    catch (e) {
        result = e;
    }
    return JSON.stringify(result, null, 4);
};

Rho.Kitchensink.successOutput = function (aString) {
    $("#result").removeClass("hidden").text(aString);
};

Rho.Kitchensink.successOutputAsJson = function (anObject) {
    var item = $("<pre>");
    item.text(JSON.stringify(anObject, null, 4));
    $("#result").removeClass("hidden").empty().append(item);
};


Rho.Kitchensink.appendSuccessOutput = function (aString) {
    $("#result").removeClass("hidden")
        .append(aString)
        .append("<br/>");
};

Rho.Kitchensink.appendSuccessOutputAsJson = function (anObject) {
    var item = $("<pre>");
    item.text(JSON.stringify(anObject, null, 4));
    $("#result").removeClass("hidden").append(item);
};


Rho.Kitchensink.errorOutput = function (aString) {
    $("#error").removeClass("hidden")
        .append(aString)
        .append("<br/>");
};