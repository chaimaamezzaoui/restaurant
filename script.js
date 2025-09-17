let cart = [];

// إظهار / إخفاء لائحة الطعام (بانيني أو بيتزا)
function toggleMenu(id) {
    document.getElementById("paniniMenu").style.display = "none";
    document.getElementById("pizzaMenu").style.display = "none";

    let menu = document.getElementById(id);
    if(menu.style.display === "none"){
        menu.style.display = "block";
        window.scrollTo({top: menu.offsetTop - 50, behavior: 'smooth'});
    } else {
        menu.style.display = "none";
    }
}

// إضافة منتج للسلة
function addToCart(item) {
    cart.push(item);
    alert(item + " تمت إضافته إلى الطلب ✅");
}

// إرسال الطلب عبر واتساب
function checkout() {
    if(cart.length === 0){
        alert("لم تختر أي منتوج بعد!");
        return;
    }
    let message = "السلام عليكم، أريد أن أطلب:\n\n" + cart.join("\n");
    let url = "https://wa.me/212771313707?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}