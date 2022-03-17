document.getElementById("nhadan").addEventListener("click",function(){
    document.getElementById("ket-noi").disabled =true;
})
document.getElementById("doanhnghiep").addEventListener("click",function(){
    document.getElementById("ket-noi").disabled =false;
})

document.getElementById("tinh-tien").addEventListener("click",function(){
    let khachHangValue = document.querySelector('input[name="selector"]:checked').value;
    var ketNoi=document.getElementById("ket-noi").value*1;
    var kenhCaoCap=document.getElementById("kenh").value*1;

    if(khachHangValue=="nhadan"){
        var giaNhaDan=4.5+20.5+kenhCaoCap*7.5;
        console.log(giaNhaDan);
        document.getElementById("tien-cap").innerText="Tien cap cua nha dan la: "+giaNhaDan +"$";
    }else{
        var giaDoanhNghiep=15+(75+(5*(ketNoi-10)))+kenhCaoCap*50;
        console.log(giaDoanhNghiep);
        document.getElementById("tien-cap").innerText="Tien cap cua doanh nghiep la: "+giaDoanhNghiep +"$";
    }
})