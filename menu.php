<div class="menu">
    <div class="menu__wrapper wrapper">
        <div class="menu__title">
            <h1 class="menu__title-long">ЛИГА ПОДКАСТЕРОВ</h1>
            <h1 class="menu__title-short">ЛП</h1>
        </div>
        <ul class="menu__refs">
            <li class="menu__item <?php if($page == 'home'){echo " menu__item_active";}?>"><a href="index.php">Главная</a></li>
            <li class="menu__item <?php if($page == 'about'){echo " menu__item_active";}?>"><a href="about.php">О нас</a></li>
            <li class="menu__item <?php if($page == 'podcasts'){echo " menu__item_active";}?>"><a href="podcasts.php">Выпуски</a></li>
            <li class="menu__item <?php if($page == 'news'){echo " menu__item_active";}?>"><a href="news.php">Новости</a></li>
<!--            <li class="menu__item"><a href="">Контакты</a></li> !-->
        </ul>
    </div>
</div>