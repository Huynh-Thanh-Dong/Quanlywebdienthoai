var flagBP = 0; // giả sử người dùng chưa nhấn phím nào
var arrBP = [];
$(document).ready(function () {
    $(".btnthembp").click(function () {
        $(".btnthembp").prop("disabled", true);//mờ
        $(".btnsuabp").prop("disabled", true);//mờ
        $(".btnluubp").prop("disabled", false);//sáng
        $(".txtmabp").val("");
        $(".txttenbp").val("");
        $(".txtmabp").focus();
        flagBP = 1;
        /*
        */
    })
    $(".btnsuabp").click(function () {
        $(".btnthembp").prop("disabled", true);//sáng
        $(".btnsuabp").prop("disabled", true);//sáng
        $(".btnluubp").prop("disabled", false);//mờ
        $(".btnluubp").html("Cập nhật")
        flagBP = 2;
    })
    $(".btnluubp").click(function () {
        if (flagBP == 1) {//lưu insert dữ liệu mới
            var datasend = {
                mabp: $(".txtmabp").val(),
                tenbp: $(".txttenbp").val()
            }
            console.log(datasend);
            queryData("php/bophan/apiinsert.php", datasend, function (res) {
                console.log(res)
                if (res.success == 1) {
                    bootbox.alert("Thêm thành công");
                    //     showDataTableBoMon(pagecurrent_bp,record);
                } else {
                    bootbox.alert("Thêm không thành công");
                }
            });
        } else if (flagBP == 2) {
            console.log("update");
            var datasend = {
                mabp: $(".txtmabp").val(),
                tenbp: $(".txttenbp").val()
            }
            console.log(datasend);
            queryData("php/bophan/apiupdate.php", datasend, function (res) {
                console.log(res)
                if (res.success == 1) {
                    bootbox.alert("Cập nhật thành công");
                    //showDataTableBoMon();
                    // showDataTableBoMonPage(pagecurrent_bm,record);
                } else {
                    bootbox.alert("Câp nhật không thành công");
                }
            });
        }
    })
    $(".btnlamlaibm").click(function () {
        $(".txtmabp").val("");
        $(".txttenbp").val("");
        flagBP = 0;
        $(".btnthembp").prop("disabled", false);//sáng
        $(".btnsuabp").prop("disabled", false);//sáng
        $(".btnluubp").prop("disabled", true);//mờ
    });
    $(".btnxoabm").click(function () {
        var ma = $(".txtmabp").val();
        bootbox.confirm("Bạn có muốn xóa bộ môn:" + ma + " này không?", function (result) {
            console.log('This was logged in the callback: ' + result);
            if (result == true) {
                var datasend = {
                    mabp: ma
                }
                console.log(datasend);
                queryData("php/bomon/apidelete.php", datasend, function (res) {
                    console.log(res)
                    if (res.success == 1) {
                        bootbox.alert("Xoá thành công");
                        //showDataTableBoMon();
                        // showDataTableBoMonPage(pagecurrent_bm,record);
                    } else {
                        bootbox.alert("Xóa không thành công");
                    }
                });
            }
        });
    });
    $(".btntimbm").click(function () {
        //showDataTableBoMon();
        // showDataTableBoMonPage(pagecurrent_bm,record);
    });
    //bắt sự kịp người dùng nhấn phím enter
    $(".txttimbm").keyup(function (e) {
        if (e.which == 13) {
            //showDataTableBoMon();
            // showDataTableBoMonPage(pagecurrent_bm,record);
        }
    })
    
    //API...

    // click vào nút xem của bảng table addListBM
    // $(".addListBM").on('click', '.clickxembm', function () {
    //     // cách 1:
    //     // console.log("da nhan");
    //     // console.log($(this).html());
    //     // console.log($(this).parent().attr("data-mabp"));
    //     // var mabp=$(this).parent().attr("data-mabp");
    //     // var tenbp=$(this).parent().attr("data-tenbp");
    //     // $(".txtmabp").val(mabp);
    //     // $(".txttenbp").val(tenbp);
    //     // $(".btnsuabp").prop("disabled",false);//sáng
    //     // cách 2:
    //     var vt = $(this).parent().attr("data-vt");
    //     $(".txtmabp").val(arrBP[vt].mabp);
    //     $(".txttenbp").val(arrBP[vt].tenbp);
    //     $(".btnsuabp").prop("disabled", false);//sáng
    // })
    //nhấn nút xóa
    // $(".addListBM").on('click', '.clickxoabm', function () {
    //     var vt = $(this).parent().attr("data-vt");
    //     var ma = arrBP[vt].mabp;
    //     bootbox.confirm("Bạn có muốn xóa bộ môn:" + ma + " này không?", function (result) {
    //         console.log('This was logged in the callback: ' + result);
    //         if (result == true) {
    //             var datasend = {
    //                 mabp: ma
    //             }
    //             console.log(datasend);
    //             queryData("php/bomon/apidelete.php", datasend, function (res) {
    //                 console.log(res)
    //                 if (res.success == 1) {
    //                     bootbox.alert("Xoá thành công");
    //                     //showDataTableBoMon();
    //                     showDataTableBoMonPage(pagecurrent_bm, record);
    //                 } else {
    //                     bootbox.alert("Xóa không thành công");
    //                 }
    //             });
    //         }
    //     })
    // });
    // var pagecurrent_bm = 0;
    // $(".numberpagebm").on('click', 'button', function () {
    //     pagecurrent_bm = $(this).val();
    //     showDataTableBoMonPage($(this).val(), record);
    // })
});
// function showDataTableBoMon() {
//     var search = $(".txttimbm").val();
//     console.log("search=" + search);
//     var datasend = {
//         search: search
//     }
//     $(".addListBM").html('<tr><td colspan="4"><img src="images/loading.jpg" width="50px" height="50px">Đang loading dữ liệu</td></tr>');
//     queryData("php/apigetdata.php", datasend, function (res) {
//         console.log(res)
//         var data = res.items;
//         if (data.length == 0) {
//             $(".addListBM").html('<tr><td colspan="4"><span class="btn btn-info bg-gradient-danger"><i>Không Tìm Thấy Dữ Liệu Bạn Cần</i></span></td></tr>');
//         } else {
//             arrBP = data;
//             var s = '';
//             var stt = 1;
//             for (var i in data) {
//                 var d = data[i];
//                 s = s + '<tr>' +
//                     '<td>' + stt + '</td>' +
//                     '<td>' + d.mabp + '</td>' +
//                     '<td>' + d.tenbp + '</td>' +
//                     '<td data-vt=' + i + ' data-mabp=' + d.mabp + ' data-tenbp="' + d.tenbp + '"><span class="badge bg-danger clickxembm">' +
//                     '<i class="fa fa-eye" aria-hidden="true">&nbsp; Xem</i></span>&nbsp;<span class="badge bg-danger clickxoabm"><i class="fa fa-trash" aria-hidden="true">&nbsp; Xóa</i></span></td>' +
//                     '</tr>';
//                 stt++;
//             }
//         }
//         $(".addListBM").html(s);
//     });
// };
//có sử dụng phân trang
// function showDataTableBoMonPage(page, record) {
//     var search = $(".txttimbm").val();
//     console.log("search=" + search);
//     var datasend = {
//         page: page,
//         record: record,
//         search: search
//     }
//     $(".addListBM").html('<tr><td colspan="4"><img src="images/loading.jpg" width="50px" height="50px">Đang loading dữ liệu</td></tr>');
//     queryData("php/bomon/apigetdataphantrang.php", datasend, function (res) {
//         console.log(res)
//         var data = res.items;
//         if (data.length == 0) {
//             $(".addListBM").html('<tr><td colspan="4"><span class="btn btn-info bg-gradient-danger"><i>Không Tìm Thấy Dữ Liệu Bạn Cần</i></span></td></tr>');
//             $(".numberpagebm").html("");
//         }
//         else {
//             var stt = 1;
//             stt = printSTT(record, res.page);
//             arrBP = data;
//             var s = '';
//             for (var i in data) {
//                 var d = data[i];
//                 s = s + '<tr>' +
//                     '<td>' + stt + '</td>' +
//                     '<td>' + d.mabp + '</td>' +
//                     '<td>' + d.tenbp + '</td>' +
//                     '<td data-vt=' + i + ' data-mabp=' + d.mabp + ' data-tenbp="' + d.tenbp + '"><span class="badge bg-danger clickxembm">' +
//                     '<i class="fa fa-eye" aria-hidden="true">&nbsp; Xem</i></span>&nbsp;<span class="badge bg-danger clickxoabm"><i class="fa fa-trash" aria-hidden="true">&nbsp; Xóa</i></span></td>' +
//                     '</tr>';
//                 stt++;
//             }
//         }
//         $(".addListBM").html(s);
//         buildSlidePage($(".numberpagebm"), 5, res.page, res.totalpage);
//     });
// };