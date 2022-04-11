var arrSV=[];
var flagSV=0;

$(document).ready(function(){
    $(".btnthemsv").click(function(){
        $(".btnthemsv").prop("disabled",true);
        $(".btnsuasv").prop("disabled",true);
        $(".btnluusv").prop("disabled",false);
        $(".txtmasv").val("");
        $(".txtmasv").focus();
        flagSV=1;
    })
    $(".btnsuasv").click(function(){
        $(".btnthemsv").prop("disabled",true);
        $(".btnsuasv").prop("disabled",true);
        $(".btnluusv").prop("disabled",false);
        $(".btnluusv").html("Cập nhật");
        flagSV=2;
    })
    $(".btnluusv").click(function(){
        /*console.log($(".cblopsv").val());
        console.log($(".txtmasv").val());
        console.log($(".txttensv").val());
        console.log($(".txtgtsv").val());
        console.log($(".txtnamsinhsv").val());
        console.log($(".cbkhoasv").val());
        console.log($(".cbchucvusv").val());*/
        var gioitinh = $(".txtgtsv").val();
        if(gioitinh=="Nam"){
            gioitinh="1";
        }
        else{
            gioitinh="0";
        }
        if(flagSV==1){
            var datasend={
                masv:$(".txtmasv").val(),
                tensv:$(".txttensv").val(),
                gt:gioitinh,
                namsinh:$(".txtnamsinhsv").val(),
                malop:$(".cblopsv").val(),
                makhoa:$(".cbkhoasv").val(),
                macv:$(".cbchucvusv").val()
            }
            console.log(datasend);
            queryData("php/apiinsert.php",datasend,function(res){
                console.log(res);
                if(res.success==1){
                    bootbox.alert("Thêm thành công");
                    showDataTableSVPage(pagecurrent_sv,record);
                }else{
                    bootbox.alert("Thêm không thành công");
                }
            })
        }else if(flagSV==2){
            var datasend={
                masv:$(".txtmasv").val(),
                tensv:$(".txttensv").val(),
                gt:gioitinh,
                namsinh:$(".txtnamsinhsv").val(),
                tenlop:$(".cblopsv").val(),
                makhoa:$(".cbkhoasv").val(),
                macv:$(".cbchucvusv").val()
            }
            console.log(datasend);
            queryData("php/apiupdate.php",datasend,function(res){
                console.log(res);
                if(res.success==1){
                    bootbox.alert("Cập nhật thành công");
                    showDataTableSVPage(pagecurrent_sv,record);
                }else{
                    bootbox.alert("Cập nhật không thành công");
                }
            })
        }
    })
    $(".cbbomonsv").on('change',function(){
        console.log($(this).val());
        showCBBoMon($(this).val());
    });
    $(".cbbomonsv").on('focus',function(){
        console.log($(this).val());
        showCBBoMon($(this).val());
    });
    $(".cbnganhsv").on('change',function(){
        console.log($(this).val());
        showCBLopByMaNganh($(this).val());
    });
    $(".cbnganhsv").on('focus',function(){
        console.log($(this).val());
        showCBLopByMaNganh($(this).val());
    });
    var pagecurrent_sv=0;
    $(".pagenumbersv").on('click','button',function () {

        pagecurrent_sv=$(this).val();
        showDataTableSVPage($(this).val(),record);
    });
      //xử lý nút tìm 
      $(".btntimsv").click(function () {
        // showDataTableBoMon();
        showDataTableSVPage(pagecurrent_sv,record);
    });
     //bắt sự kiện người dùng nhấn phím Enter
     $(".txttimsv").keyup(function (e) {
         if (e.which == 13) { //13: Enter
           //  showDataTableBoMon();
           showDataTableSVPage(pagecurrent_sv,record);
       }
   })
 });
function showCBBoMon(){
    var datasend={
    }
    console.log("Aaaaaaaaaaâ")
    queryData("php/apigetdatabomon.php",datasend,function(res){
        var data=res.items;
        var ht='<option value="NULL">Chọn bộ môn</option>';
        for(var i in data){
            var d=data[i];
            ht=ht+'<option value="'+d.mabm+'">'+d.tenbm+'</option>';
        }
        $(".cbbomonsv").html(ht);
    });
}
function showCBNganhByMaBM(){
    var datasend={

    }
    queryData("php/apigetdatanganhbybomon.php", datasend, function (res) {
        var data=res.items;
        var ht='<option value="NULL">Chọn ngành</option>';
        for(var i in data){
            var d=data[i];
            ht=ht+'<option value="'+d.manganh+'">'+d.tennganh+'</option>';
        }
        $(".cbnganhsv").html(ht);
    });
}
function showCBKhoa(){
    var datasend={

    }
    queryData("php/apigetdatakhoa.php",datasend,function(res){
        var data=res.items;
        var ht='<option value="NULL">Chọn khóa</option>';
        for(var i in data){
            var d=data[i];
            ht=ht+'<option value="'+d.makhoa+'">'+d.tenkhoa+'</option>';
        }
        $(".cbkhoasv").html(ht);
    });
}
function showCBChucVu(){
    var datasend={

    }
    queryData("php/apigetdatachucvu.php", datasend, function (res) {
        var data=res.items;
        var ht='<option value="NULL">Chọn Chức Vụ</option>';
        for(var i in data){
            var d=data[i];
            ht=ht+'<option value="'+d.macv+'">'+d.tencv+'</option>';
        }
        $(".cbchucvusv").html(ht);
    });
}
function showCBLopByMaNganh(){
    var datasend={
    }
    console.log(datasend);
    queryData("php/apigetdataloptheonganh.php", datasend, function (res) {
        var data=res.items;
        var ht='<option value="NULL">Chọn ngành</option>';
        for(var i in data){
            var d=data[i];
            ht=ht+'<option value="'+d.MALOP+'">'+d.TENLOP+'</option>';
        }
        $(".cblopsv").html(ht);
    });
}
function showDataTableSVPage(page,record) {
    var search = $(".txttimsv").val();
    console.log("search=" + search);
    var datasend = {
        page:page,
        record:record,
        search: search
    }
    $(".addListSV").html('<tr><td colspan="4"><img src="images/loading.gif" width="20px" height="20px">Đang tải dữ liệu</td></tr>');
    queryData("php/apigetdataphantrangsinhvien.php", datasend, function (res) {
        console.log(res)
        var data = res.items;
        if(data.length==0){
            $(".addListSV").html('<tr><td colspan="4"><span class="badge bg-danger">Không tìm thấy</span></td></tr>');
            $(".numberpagesv").html("");
        }else{
            var stt=1;
            stt = printSTT(record,res.page);
            arrBM=data;
            var s = '';
            for (var i in data) {
                var d = data[i];
                var gt='Nam';
                if(d.gt==0){
                    gt='Nữ';
                }
                var cv="BT";
                if(d.tencv!=null){
                    cv=d.tencv
                }
                s = s + ' <tr>' +
                '<td>' + stt + '</td>' +
                '<td>' + d.masv + '</td>' +
                ' <td>' + d.tensv + '</td>' +
                ' <td>' + gt + '</td>' +
                ' <td>' + d.namsinh + '</td>' +
                ' <td>' + d.tenlop + '</td>' +
                ' <td>' + d.tenkhoa + '</td>' +
                ' <td>' + cv + '</td>' +
                '<td data-vt='+i+' data-masv='+d.masv+' data-tensv="'+d.tensv+'"><span class="badge bg-danger clickxemsv">'+
                '<i class="fa fa-eye"></i>Xem</span>&nbsp;<span class="badge bg-danger clickxoasv"><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;Xóa</span></td>' +
                '</tr>';
                stt++;
            }
    //    console.log(s);
    $(".addListSV").html(s);
    buildSlidePage($(".numberpagesv"),5,res.page,res.totalpage);
}
});
}
