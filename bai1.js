function diemKhuVucUuTien(khuVuc){
    if (khuVuc=="A"){
        return 2;
    }else if (khuVuc=="B"){
        return 1;
    }else if (khuVuc=="C"){
        return 0.5;
    }else if(khuVuc=="X"){
        return 0;
    }else{
        undefined;
    }
    
}

function diemDoiTuongUuTien(doiTuong){
    if (doiTuong=="1"){
        return 2.5;
    }else if (doiTuong=="2"){
        return  1.5;
    }else if (doiTuong=="3"){
        return 1;
    }else if(doiTuong=="0"){
        return 0;
    }else{
        undefined;
    }
}

document.getElementById("tinh-diem").addEventListener("click", function(){
    var mon1 = document.getElementById("mon-thu-nhat").value*1;
    var mon2 = document.getElementById("mon-thu-hai").value*1;
    var mon3 = document.getElementById("mon-thu-ba").value*1;
    var diemChuan = document.getElementById("diem-chuan").value*1;
    var diemKhuVucValue = document.getElementById("khu-vuc").value;
    var diemDoiTuongValue = document.getElementById("doi-tuong").value;
    
    var diemKhuVuc = diemKhuVucUuTien(diemKhuVucValue);
    var diemDoiTuong = diemDoiTuongUuTien(diemDoiTuongValue); 
    
    var diemTongKet = (mon1 + mon2 + mon3);
    console.log(diemTongKet);
    var tongDiem = diemTongKet + diemKhuVuc + diemDoiTuong;
    console.log(tongDiem);
    if(tongDiem>=diemChuan){
        console.log("Thi sinh dau");
        document.getElementById("ket-qua").innerText = "Thi sinh dau";
    }else{
        console.log("Thi sinh rot");
        document.getElementById("ket-qua").innerText = "Thi sinh rot";

    }
})