<?php
    require_once("config.php");

    $sql = "SELECT * FROM user WHERE id = '1'";
    $res = mysqli_query($conn, $sql);
    $row = mysqli_fetch_row($res);

    echo $row["ID"];
?>