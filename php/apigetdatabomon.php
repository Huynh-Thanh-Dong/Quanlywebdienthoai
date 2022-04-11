 <?php     
    require_once("server.php");
    
        $mang=array();
        $sql=mysqli_query($conn,"select mabm,tenbm from bomon"); 
    while($rows=mysqli_fetch_array($sql))
        {
            $usertemp['mabm']=$rows['mabm'];
            $usertemp['tenbm']=$rows['tenbm'];
            array_push($mang,$usertemp);
        }
       
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
    mysqli_close($conn);
    
?>
