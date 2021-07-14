function news(){

    class Note{
        constructor(element, coverSource, title, date, description){
            this.element = element;
            this.coverSource = coverSource;
            this.title = title;
            this.date = date;
            this.description = description;
        }

        bind(modal){
            this.element.addEventListener('click', ()=>{
                modal.set(this);
                modal.show();
            })
        }
    }

    class Modal{
        constructor(modalElement, coverLabel, titleLabel, dateLabel, descriptionLabel, closeButton){
            this.modalElement = modalElement;
            this.coverLabel = coverLabel;
            this.titleLabel = titleLabel;
            this.dateLabel = dateLabel;
            this.descriptionLabel = descriptionLabel;
            this.closeButton = closeButton;
            this.news = [];
        }

        init(){
            this.modalElement.addEventListener('click', (e) => {
                this.close(e);
            })
        }

        set(note){
            this.coverLabel.src = note.coverSource;
            this.titleLabel.innerText = note.title;
            this.dateLabel.innerText = note.date;
            this.descriptionLabel.innerText = note.description;
        }

        show(){
            this.modalElement.classList.add('_show');
            document.body.style.overflowY = 'hidden';
        }

        close(e){
            if(((e.target == this.modalElement)||(e.target == this.closeButton))&&(this.modalElement.classList.contains('_show'))) {
                this.modalElement.classList.remove('_show');
                document.body.style.overflowY = 'scroll';
            }
        }
    }

    // Get descriptions

    const descriptions = [
        "ИДИ НАХУЙ",
        "ХУЙ ЗНАЕТ",
        "А Я ЕБУ?",
        "ХЗ"
    ];

    // Init modal

    const modal = new Modal(
        document.querySelector('.modal'),
        document.querySelector('.modal__cover').querySelector('img'),
        document.querySelector('.modal__title'),
        document.querySelector('.modal__date'),
        document.querySelector('.modal__description'),
        document.querySelector('.modal__close'));

    modal.init();

    // Get news notes

    document.querySelectorAll('.note').forEach( note => {
        let title = note.querySelector('.note__title').innerText,
            date = note.querySelector('.note__date').innerText,
            cover = note.querySelector('img').getAttribute('src');


        let block = new Note(note, cover, title, date, descriptions[modal.news.length]);

        modal.news.push(block);
        block.bind(modal)
    })
}

export default news;
