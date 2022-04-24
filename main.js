document.getElementById('submit').onclick = mohsen;
function mohsen() {
    var name = document.getElementById('name')
    var date = document.getElementById('date')
    var prod = document.getElementById('produit')
    var quant = document.getElementById('quanity')
    var name2 = name.value[0] + name.value[1]
    var date2 = date.value[0] + date.value[1] + date.value[2] + date.value[3]
    var code = name2 + date2
    document.getElementById('code').value = code
    if (document.getElementById('code') == "NaN") {
        document.getElementById('code').value = ""
    }
    document.getElementById('nameval').value = name.value
    document.getElementById('prodval').value = prod.value
    if (prod.value == "scanner") {
        var prix = 80.000
    }
    if (prod.value == "imprimante laser") {
        var prix = 150.000
    }
    if (prod.value == "webcam") {
        var prix = 44.600
    }
    if (prod.value == "souris") {
        var prix = 8.000
    }
    document.getElementById('priceuni').value = prix
    document.getElementById('quanityval').value = quant.value
    document.getElementById('totalpay').value = prix * quant.value
    document.getElementById('facture').style.display = "block"
}