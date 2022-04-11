var flagLop=0;
var arrLop=[];
$(document).ready(function(){
    $(".btnthemlop").click(function(){
        $(".btnthemlop").prop("disabled",true);
        $(".btnsualop").prop("disabled",true);
        $(".btnluulop").prop("disabled",false);
        $(".txtmalop").val("");
        $(".txttenlop").val("");
        $(".txtmalop").focus();
        flagLop=1;
    })
    $(".btnsualop").click(function(){
        $(".btnthemlop").prop("disabled",true);
        $(".btnsualop").prop("disabled",true);
        $(".btnluulop").prop("disabled",false);
        $(".btnluulop").html("Cập nhật");
        flagLop=2;
    })
    $(".btnluulop").click(function(){
        if(flagLop==1){
            var datasend={
                MALOP:$(".txtmalop").val(),
                TENLOP:$(".txttenlop").val()
            }
            queryData("php/lop/apiinsert.php",datasend,function(res){
                console.log(res);
                if(res.success==1){
                    bootbox.alert("Thêm thành công");
                    showDataTableLopPage(pagecurrent_lop,record);
                }else{
                    bootbox.alert("Thêm không thành công");
                }
            });
        }else if(flagLop==2){
            console.log("update");
            var datasend={
                MALOP:$(".txtmalop").val(),
                TENLOP:$(".txttenlop").val()
            }
            console.log(datasend);
            queryData("php/lop/apiupdate.php",datasend,function(res){
                console.log(res)
                if(res.success==1){
                    bootbox.alert("Cập nhật thành công");
                    //showDataTableBoMon();
                    showDataTableLopPage(pagecurrent_lop,record);
                }else{
                    bootbox.alert("Câp nhật không thành công");
                }
            });
        }
    })
    $(".btnlamlailop").click(function(){
        $(".txtmalop").val("");
        $(".txttenlop").val("");
        flagLop=0;
        $(".btnthemlop").prop("disabled",false);
        $(".btnsualop").prop("disabled",false);
        $(".btnluulop").prop("disabled",true);
    })
    $(".btnxoalop").click(function(){
        var ma=$(".txtmalop").val();
        bootbox.confirm("Bạn có muốn xóa bộ môn:"+ma+" này không?", function(result){ 
        console.log('This was logged in the callback: ' + result); 
        if(result==true){
            var datasend={
                MALOP:ma
            }
            console.log(datasend);
            queryData("php/lop/apidelete.php",datasend,function(res){
                console.log(res)
                if(res.success==1){
                    bootbox.alert("Xoá thành công");
                    //showDataTableBoMon();
                    showDataTableLopPage(pagecurrent_lop,record);
                }else{
                    bootbox.alert("Xóa không thành công");
                }
            });
        }
        })
    })
    $(".btntimlop").click(function(){
        //showDataTableBoMon();
        showDataTableLopPage(pagecurrent_lop,record);
    });
    $(".txttimlop").keyup(function(e){
        if(e.which==13){
            //showDataTableBoMon();
            showDataTableLopPage(pagecurrent_lop,record);
        }
    })
    $(".addListLop").on('click','.clickxemlop',function(){
       var vt=$(this).parent().attr("data-vt");
       $(".txtmalop").val(arrLop[vt].MALOP);
       $(".txttenlop").val(arrLop[vt].TENLOP);
       $(".btnsualop").prop("disabled",false);//sáng
    })
    $(".addListLop").on('click','.clickxoalop',function(){
        var vt=$(this).parent().attr("data-vt");
        var ma=arrLop[vt].MALOP;
        bootbox.confirm("Bạn có muốn xóa bộ môn:"+ma+" này không?", function(result){ 
            console.log('This was logged in the callback: ' + result); 
            if(result==true){
                var datasend={
                    MALOP:ma
                }
                console.log(datasend);
                queryData("php/lop/apidelete.php",datasend,function(res){
                    console.log(res)
                    if(res.success==1){
                        bootbox.alert("Xoá thành công");
                        //showDataTableBoMon();
                        showDataTableLopPage(pagecurrent_lop,record);
                    }else{
                        bootbox.alert("Xóa không thành công");
                    }
                });
            }
     })
    });
    var pagecurrent_lop=0;
    $(".numberpagelop").on('click','button',function(){
        pagecurrent_lop=$(this).val();
        showDataTableLopPage($(this).val(),record);
    })
})
function showDataTableLopPage(page,record){
    var search=$(".txttimlop").val();
    console.log("search="+search);
    var datasend={
        page:page,
        record:record,
        search:search
    }
     $(".addListLop").html('<tr><td colspan="4"><img src="images/loading.jpg" width="50px" height="50px">Đang loading dữ liệu</td></tr>');
    queryData("php/lop/apigetdataphantrang.php",datasend,function(res){
        console.log(res)
        var data=res.items;
        if(data.length==0){
            $(".addListLop").html('<tr><td colspan="4"><span class="btn btn-info bg-gradient-danger"><i>Không Tìm Thấy Dữ Liệu Bạn Cần</i></span></td></tr>');
            $(".numberpagelop").html("");
        }
        else{
            var stt=1;
            stt= printSTT(record,res.page);
            arrLop=data;
            var s='';
            for(var i in data)
            {
                var d=data[i];
                s=s+'<tr>'+
                '<td>'+stt+'</td>'+
                '<td>'+d.MALOP+'</td>'+
                '<td>'+d.TENLOP+'</td>'+
                '<td data-vt='+i+'><span class="badge bg-danger clickxemlop"><i class="fa fa-eye" aria-hidden="true">&nbsp; Xem</i></span>&nbsp;<span class="badge bg-danger clickxoalop"><i class="fa fa-trash" aria-hidden="true">&nbsp; Xóa</i></span></td>'+
                '</tr>'
                stt++;
            }
        }
        $(".addListLop").html(s);
        buildSlidePage($(".numberpagelop"),5,res.page,res.totalpage);
    });
}