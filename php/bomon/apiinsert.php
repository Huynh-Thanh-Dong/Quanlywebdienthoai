<?php     
		require_once("server.php");//copy code server.php vào file apiinsert -$conn
		//nhận thông tin từ client gửi lên
		//bộ môn
		$mabm=$_GET['mabm'];
		$tenbm=$_GET['tenbm'];   
        $sql="INSERT INTO `bomon`(`mabm`, `tenbm`) VALUES ('".$mabm."','".$tenbm."')";
		//kết thúc bộ môn
       
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