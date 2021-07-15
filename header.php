<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/style.css">
    <link rel="icon" href="img/favicon.ico">
    <title>Лига Подкастеров
    <?php 
        if($page == 'about'){echo " | О нас";}
        if($page == 'podcasts'){echo " | Выпуски";}
        if($page == 'news'){echo " | Новости";}
    ?>
    </title>
</head>