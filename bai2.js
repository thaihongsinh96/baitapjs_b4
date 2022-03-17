
document.getElementById("tinh-tien-dien").addEventListener("click", function(){
    var soKw = document.getElementById("Kw").value*1;
    var gia50Dau = 500;
    var gia50Ke = 650;
    var gia100Ke = 850;
    var gia150Ke = 1100;
    var giaConLai = 1300;

    var tienDien = 0;
    if (soKw<=50){
        tienDien = soKw*gia50Dau;
    }else if (soKw<=100){
        tienDien = gia50Dau*50 + (soKw-50)*gia50Ke;
    }else if (soKw<=200){
        tienDien = (gia50Dau+gia50Ke)*50 +(soKw-100)*gia100Ke;
    }else if (soKw<=350){
        tienDien = (gia50Dau+gia50Ke)*50 + gia100Ke*100 + (soKw-200)*gia150Ke;
    }else{
        tienDien = (gia50Dau+gia50Ke)*50 + gia100Ke*100 + gia150Ke*150 + (soKw-350)*giaConLai;
    }
    console.log(tienDien);
    document.getElementById("tien-dien").innerText= "Tien dien la: " + tienDien.toLocaleString() + " VND";
})