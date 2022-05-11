
var blifrima = {
    Frimanavn: "mardin aga",
    antallanstatte: 30,
    bilListe: ["McLaren 720S,Mercedes-Benz GLA,Datsun redi-GO,Honda Jazz,Rolls-Royce Phantom VIII "],
    betaltSkatt: 0,
    nettside: "https://imgflip.com/memegenerator",
     ommeg () {
        return("hello,vi er "+ this.firmaNavn + "vi er en private frima "+  this.antallanstatte + ".her er våre biller vi selger ut "+ this.bilListe + " dette er så mye vi betaller skatt pågrunn av staten" + this.betaltSkatt,")
    }

};

function skrivut () {
    document.getElementById("svar").innerHTML = blifrima.ommeg();
};

function navnEndre() {
    blifrima.firmaNavn = "mardin aga"
    document.getElementById("svar").innerHTML = blifrima.ommeg();
};

function bil() {
    let verd;
    verd = document.getElementById(nybil).value,
    blifma.bilListe.push(verd);
    document.getElementById("svar").innerHTML = blifrima.ommeg();
};
function bilvekk() {
    blifrima.bilListe.shift();
    document.getElementById(svar).innerHTML = blifma.ommeg();
};
function netvekk () {
    blifma.nettside ="";
    document.getElementById("svar").innerHTML = blifrima.ommeg();
};

function stat() {
    blifrima.status = true;
    console.log(blifrima = status);
};

function prbiller() {
    let lis = [];
    for (let i = 0; i <blifrima.bilListe.length; i++) {
        lis[1] = blifrima.bilListe[1];
        console.log(lis);
    }
    document.getElementById("listen").innerHTML = lis;
};

function prKey() {
    for (let lib of Object.keys(blifrima){
        console.log(lib);
        document.getElementById("svar2").innerHTML = "<p>" + lib + "</p>"
    }
};


