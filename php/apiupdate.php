<?php     
		require_once("server.php");//copy code server.php vào file apiinsert -$conn
		//nhận thông tin từ client gửi lên
		$masv=$_GET['masv'];
        $tensv=$_GET['tensv'];
        $gt=$_GET['gt'];
        $namsinh=$_GET['namsinh'];
        $malop=$_GET['malop'];
        $makhoa=$_GET['makhoa'];
        $macv=$_GET['macv']; 
        $sql="UPDATE `sinhvien` SET `masv`='".$masv."',`makhoa`='".$makhoa."',`malop`='".$malop."',`tensv`='".$tensv."',`gt`='".$gt."',`namsinh`='".$namsinh."',`macv`='".$macv."' WHERE masv ='".$masv."'";
      
       
            if (mysqli_query($conn, $sql)) {
				if(mysqli_affected_rows($conn)>0){
					
					$res["success"] = 1;// {"success":1}
				}
				else{
					$res["success"] = 0;//{"success":0}
				}
            } else {
                $res["success"] = 0;// {"success":0}
            }
        
        echo json_encode($res);
        mysqli_close($conn);
?>