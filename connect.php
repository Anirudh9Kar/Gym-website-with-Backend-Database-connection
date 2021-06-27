<?php
    $name=$_POST['name'];
    $age=$_POST['age'];
    $gender=$_POST['gender'];
    $locality=$_POST['locality'];
    $number=$_POST['number'];
    $mail=$_POST['mail'];    

        $conn=new mysqli('localhost','root','','finalgym');
        if($conn->connect_error)
        {
            die('Connection Failed : '.$conn->connect_error);
        }
        else
        {
            $stmt=$conn->prepare("Insert into registration(name,age,gender,locality,number,mail)
            values(?,?,?,?,?,?)");
            $stmt->bind_param("sissis",$name,$age,$gender,$locality,$number,$mail);
            $stmt->execute();
            echo"You have successfully filled in your data.....";
            $stmt->close();
            $conn->close();
        }
?>