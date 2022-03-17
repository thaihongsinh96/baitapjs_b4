document.getElementById("tinh-thue").addEventListener("click",function(){
    var tongThuNhap=document.getElementById("thu-nhap").value*1;
    var soNguoi=document.getElementById("so-nguoi").value*1;
    var thuNhap=tongThuNhap-4-soNguoi*1.6;
    var  thueCaNhan=0;

    if(thuNhap<=60){
        thueCaNhan=0.05*thuNhap;
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";
        
    }else if(thuNhap<=120){
        thueCaNhan=0.05*60+0.1*(thuNhap-60);
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";

    }else if(thuNhap<=210){
        thueCaNhan=0.05*60+0.1*60+0.15*(thuNhap-120);
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";

    }else if(thuNhap<=384){
        thueCaNhan=0.05*60+0.1*60+0.15*90+0.2*(thuNhap-210);
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";

    }else if(thuNhap<=624){
        thueCaNhan=0.05*60+0.1*60+0.15*90+0.2*174+0.25*(thuNhap-384);
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";

    }else if(thuNhap<=960){
        thueCaNhan=0.05*60+0.1*60+0.15*90+0.2*174+0.25*240+0.3*(thuNhap-624);
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";
        
    }else{
        thueCaNhan=0.05*60+0.1*60+0.15*90+0.2*174+0.25*240+0.3*336+0.35*(thuNhap-960);
        console.log(thueCaNhan);
        document.getElementById("xuat-thue").innerText=thueCaNhan + " trieu";

    }
})