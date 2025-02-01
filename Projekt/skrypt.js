document.getElementById('filtry-samochodowe').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedBrand = document.getElementById('marka').value; 
    if (selectedBrand === "ford") {
        window.location.href = "ford_sort.html";
    }
    else if ( selectedBrand === "bmw"){
        window.location.href = "bmw_sort.html";
    }
    else if ( selectedBrand === "audi"){
        window.location.href = "audi_sort.html";
    }
    else if ( selectedBrand === "volkswagen"){
        window.location.href = "volkswagen_sort.html";
    }
});