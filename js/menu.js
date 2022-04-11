$(document).ready(function () {
    function swapForm(f) {
        $(".frmkhachhang").addClass("is-hidden");
        $(".frmbophan").addClass("is-hidden");
        $(".frmnhanvien").addClass("is-hidden");
        $(".frmsanpham").addClass("is-hidden");
        $(".frmnhacungcap").addClass("is-hidden");
        $(".frmvoucher").addClass("is-hidden");
        $(".frmhoadon").addClass("is-hidden");
        $(".frmbaohanh").addClass("is-hidden");
        $(".frmthanhtoan").addClass("is-hidden");
        $(".frmphieunhaphang").addClass("is-hidden");

        $("." + f).removeClass("is-hidden");
    }
    
    swapForm("frmsanpham");
   
    $(".menukhachhang").click(function () {
        console.log("menu khachhang");
        swapForm("frmkhachhang");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí Khách Hàng</a></li>' +
            ' <li class="breadcrumb-item active">Khách Hàng</li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menubophan").click(function () {
        console.log("menu bophan");
        swapForm("frmbophan");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí chức vụ</a></li>' +
            ' <li class="breadcrumb-item active">Bộ phận</li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    
    $(".menunhanvien").click(function () {
        console.log("menu nhanvien ");
        swapForm("frmnhanvien");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí chức vụ</a></li>' +
            ' <li class="breadcrumb-item active">Nhân viên</li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menusanpham").click(function () {
        console.log("menu sanpham ");
        swapForm("frmsanpham");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Sản phẩm</li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menunhacungcap").click(function () {
        console.log("menu nhacungcap ");
        swapForm("frmnhacungcap");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Nhà Cung Cấp </li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menuvoucher").click(function () {
        console.log("menu voucher ");
        swapForm("frmvoucher");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Voucher </li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menuhoadon").click(function () {
        console.log("menu hoadon ");
        swapForm("frmhoadon");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Hóa đơn </li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menubaohanh").click(function () {
        console.log("menu baohanh ");
        swapForm("frmbaohanh");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Bảo hành </li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menuthanhtoan").click(function () {
        console.log("menu thanhtoan ");
        swapForm("frmthanhtoan");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Thanh toán </li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    $(".menuphieunhaphang").click(function () {
        console.log("menu phieunhaphang ");
        swapForm("frmphieunhaphang");
        var st = ' <li class="breadcrumb-item"><a href="#" >Quản lí các dòng sản phẩm</a></li>' +
            ' <li class="breadcrumb-item active">Phiếu nhập hàng </li>';
        console.log(st);
        $(".breadcrumbcurrent").html(st);
    })
    // $(".menukhachhang").click(function () {
    //     swapForm("frmkhachhang");
    //     var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
    //         ' <li class="breadcrumb-item active">Ngành</li>';
    //     $(".breadcrumbcurrent").html(st);
    //     // showNamBD();
    //     // showCBBoMon();
    //     // showDataTableNganhPage(0, record);
    // })
    // $(".menusinhvien").click(function () {
    //     swapForm("frmsinhvien");
    //     var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
    //         ' <li class="breadcrumb-item active">Sinh Viên</li>';
    //     console.log(st);
    //     $(".breadcrumbcurrent").html(st);
    //     showCBBoMon();
    //     showCBNganhByMaBM("");
    //     showCBKhoa();
    //     showCBChucVu();
    //     showCBLopByMaNganh("");
    //     showDataTableSVPage(0, record);
    //     $(".btnthemsv").prop("disabled", false);//sáng
    //     $(".btnsuasv").prop("disabled", true);//Mờ
    //     $(".btnluusv").prop("disabled", true);//mờ
    // })
 
    // $(".btnhome").click(function () {
    //     swapForm("frmsinhvien");
    //     var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
    //         ' <li class="breadcrumb-item active">Sinh Viên</li>';
    //     console.log(st);
    //     $(".breadcrumbcurrent").html(st);
    // });
    // $(".menubomon").click(function () {
    //     swapForm("frmbomon");
    //     var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
    //         ' <li class="breadcrumb-item active">Bộ môn</li>';
    //     console.log(st);
    //     $(".breadcrumbcurrent").html(st);
    //     $(".btnthembm").prop("disabled", false);//sáng
    //     $(".btnsuabm").prop("disabled", true);//Mờ
    //     $(".btnluubm").prop("disabled", true);//mờ
    //     // showDataTableBoMon();
    //     showDataTableBoMonPage(0, record);
    // });
});