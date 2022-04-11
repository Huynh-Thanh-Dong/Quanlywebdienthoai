 <?php     
		require_once("server.php");
    
        $mang=array();
        $record=$_GET['record']; //số dòng cần lấy
        $page=$_GET['page'];//số trang mà client gửi lên
	
		$vt=$page*$record; //tính toán lại vi trị cần lấy
        $limit='limit '.$vt.' , '.$record;
        $search=$_GET["search"];
        $sql=mysqli_query($conn,"select manganh,tennganh,nambatdau from nganh where (manganh like '%".$search."%' or tennganh like '%".$search."%') order by manganh asc ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
         
            $usertemp['manganh']=$rows['manganh'];
			$usertemp['tennganh']=$rows['tennganh'];
            $usertemp['nambatdau']=$rows['nambatdau'];
           
            array_push($mang,$usertemp);
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from nganh where (manganh like '%".$search."%' or  manganh like '%".$search."%') order by manganh asc ");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
		$jsonData['totalpage'] =ceil($row['total']/$record);
	    $jsonData['page'] =(int)$page;
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
		mysqli_close($conn);
		
?>