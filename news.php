<?php $page = 'news'; include('header.php'); ?>
<body>
    <div class="wrapper">
        <?php include('menu.php'); ?>
        <div class="content _hide">
            <section class="news">
                <div class="news__wrapper">

                    <div class="news__coloumn">
                        <div class="news__note note">
                            <div class="note__cover">
                                <img src="./img/news/news_4.jpg" alt="">
                            </div>
                            <div class="note__text">
                                <h3 class="note__date">26 июня 2021</h3>
                                <h3 class="note__title">Когда новый подкаст?</h3>
                                <div class="note__more-wrapper">
                                    <div class="note__more">
                                        <button class="note__button">Читать</button>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="news__note note">
                            <div class="note__cover">
                                <img src="./img/news/news_3.jpg" alt="">
                            </div>
                            <div class="note__text">
                                <h3 class="note__date">21 июня 2021</h3>
                                <h3 class="note__title">Когда новый подкаст?</h3>
                                <div class="note__more-wrapper">
                                    <div class="note__more">
                                        <button class="note__button">Читать</button>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="news__coloumn">
                        <div class="news__note note">
                            <div class="note__cover">
                                <img src="./img/news/news_2.jpg" alt="">
                            </div>
                            <div class="note__text">
                                <h3 class="note__date">16 июня 2021</h3>
                                <h3 class="note__title">Когда новый подкаст?</h3>
                                <div class="note__more-wrapper">
                                    <div class="note__more">
                                        <button class="note__button">Читать</button>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="news__note note">
                            <div class="note__cover">
                                <img src="./img/news/news_1.jpg" alt="">
                            </div>
                            <div class="note__text">
                                <h3 class="note__date">11 июня 2021</h3>
                                <h3 class="note__title">Когда новый подкаст?</h3>
                                <div class="note__more-wrapper">
                                    <div class="note__more">
                                        <button class="note__button">Читать</button>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <div class="news__modal modal">
                <div class="modal__wrapper">
                    <div class="modal__button">
                        <a href="#close" title="Close" class="modal__close">×</a>
                    </div>
                    <div class="modal__content">
                        <div class="modal__cover">
                            <img src="./img/news/news_1.jpg" alt="">
                        </div>
                        <h3 class="modal__date">26 июня 2021</h3>
                        <h3 class="modal__title">Когда новый подкаст?</h3>
                        <p class="modal__description">
                            ХУЙ ЗНАЕТ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    <script src="dist/bundle.js" defer></script>
</body>
</html>