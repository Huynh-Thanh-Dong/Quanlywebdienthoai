 <?php     
		require_once("server.php");
    
        $mang=array();
        $sql=mysqli_query($conn,"select MALOP,TENLOP,n.manganh,n.tennganh  from nganh n, lop l where n.manganh=l.manganh"); 
		while($rows=mysqli_fetch_array($sql))
        {
         
            $usertemp['manganh']=$rows['manganh'];
			$usertemp['tennganh']=$rows['tennganh'];
            $usertemp['TENLOP']=$rows['TENLOP'];
            $usertemp['MALOP']=$rows['MALOP'];
            array_push($mang,$usertemp);
        }
       
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
		mysqli_close($conn);
		
?>
