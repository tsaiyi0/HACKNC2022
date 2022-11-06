var linkdict = {};
var reasondict = {};

function randomnumgen() {
    var randomnum = Math.floor(1000000 + Math.random() * 9000000);
    if (linkdict[randomnum] == undefined) {
        return randomnum;
    }
    else {
        randomnumgen();
    }
}

function randomKeyFunc(linkdict) {
    var keys = Object.keys(linkdict);
    return obj[keys[keys.length * Math.random() << 0]];
}

function give() {
  
    var linktext = document.getElementById("linktextbox").value;
    var reasontext = document.getElementById("reasontextbox").value;
    var randomnum = randomnumgen();

    linkdict[randomnum] = linktext;
    reasondict[randomnum] = reasontext;

    console.log(randomnum);
    console.log(linkdict[randomnum]);
    console.log(reasondict[randomnum]);
    
};

function get() {

    var randomkey = randomKeyFunc();

    var linktext = linkdict[randomkey];
    var reasontext = reasondict[randomkey];

    return linktext, reasontext;
};