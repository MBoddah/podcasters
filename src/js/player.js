function player(){
    class Player{
        constructor(selector,
        coverLabel,
        titleLabel,
        durationLabel,
        currentLabel,
        playButton,
        nextButton,
        prevButton,
        volumeButton,
        volumeWrapper,
        volumeBar,
        volumeScale,
        progressBar,
        progressScale,
        dialog){
            this.selector = selector;
            this.coverLabel = coverLabel;
            this.durationLabel = durationLabel;
            this.titleLabel = titleLabel;
            this.currentLabel = currentLabel;
            this.playButton = playButton;
            this.nextButton = nextButton;
            this.prevButton = prevButton;
            this.volumeButton = volumeButton;
            this.volumeWrapper = volumeWrapper;
            this.volumeBar = volumeBar;
            this.volumeScale = volumeScale;
            this.progressBar = progressBar;
            this.progressScale = progressScale;
            this.dialog = dialog

            this.episodes = [];
            this.currentEpisode = '';
            this.currentVolume = 1;
        }     

        init(){
            this.playButton.addEventListener('click', () => {
                if(this.playButton.classList.contains('_playing')) {
                    this.currentEpisode.pause(this);
                } else {
                    this.currentEpisode.play(this);
                }
            })
        
            this.nextButton.addEventListener('click', () => {
                this.playNext();
            })
        
            this.prevButton.addEventListener('click', () => {
                this.playPrev();
            })
        
            this.volumeButton.addEventListener('click', () => {
                if(this.volumeButton.classList.contains('_active')){
                    this.volumeWrapper.classList.add('_hide');
                    this.volumeButton.classList.remove('_active');
                } else {
                    this.volumeWrapper.classList.remove('_hide');
                    this.volumeButton.classList.add('_active');           
                }
            })
        
            this.progressBar.addEventListener('click', (e) => {
                this.setProgress(e);
            });
        
            this.volumeBar.addEventListener('click', (e) => {
                this.setVolume(e);
            })

            this.currentEpisode = this.episodes[0];
        }

        showDialog(boolen){
            if(boolen){
                this.dialog.classList.add('dialog_show');
            } else {
                this.dialog.classList.remove('dialog_show');
            }
        }
        
        updateProgress(e, episode){
            const {duration, currentTime} = e.srcElement;
            const currentPercentage = (currentTime/duration) * 100;
        
            this.currentLabel.innerText = episode.getCurrentTimeString();
    
            this.progressScale.style.width = `${currentPercentage}%`;     
            this.currentLabel.style.transform = `translate(${this.progressBar.clientWidth*currentPercentage/100}px, -115%)`;
        }

        setTrack(episode) {
            this.coverLabel.src = episode.imgSrc;
            this.titleLabel.innerText = episode.title;
    
            this.durationLabel.innerText = episode.getDurationString();
        }

        setProgress(e) {
            const width = this.progressBar.clientWidth,
                clickX = e.offsetX;
            
            this.duration = this.currentEpisode.audio.duration;
            this.currentEpisode.audio.currentTime = (clickX/width) * this.duration;
        }

        setVolume(e) {
            const width = this.volumeBar.clientWidth,
                clickX = e.offsetX;
    
            this.currentVolume = clickX/width;
    
            if (this.currentVolume > 0.8){
                this.updateVolumeIcon('_icon-volume-high');
            } else {
                if (this.currentVolume > 0.3){
                    this.updateVolumeIcon('_icon-volume-medium');
                } else {
                    if (this.currentVolume > 0){
                        this.updateVolumeIcon('_icon-volume-low');
                    } else {
                        if (this.currentVolume == 0){
                            this.updateVolumeIcon('_icon-volume-mute2');
                        }
                    }
                }
            }
    
            this.volumeScale.style.width = `${(this.currentVolume)*100}%`
            this.currentEpisode.audio.volume = this.currentVolume;
        }

        updateVolumeIcon(iconClass){
            this.volumeButton.classList.remove('_icon-volume-medium');
            this.volumeButton.classList.remove('_icon-volume-low');
            this.volumeButton.classList.remove('_icon-volume-mute2');
            this.volumeButton.classList.remove('_icon-volume-high');
            this.volumeButton.classList.add(iconClass);
        }

        playPlayer() {
            this.playButton.classList.remove('_icon-play');
            this.playButton.classList.add('_icon-pause');
            this.playButton.classList.add('_playing');
        }
    
        pausePlayer() {
            this.playButton.classList.remove('_playing');
            this.playButton.classList.remove('_icon-pause');
            this.playButton.classList.add('_icon-play');
        }
    
        playNext() {
            let nextIndex = this.episodes.indexOf(this.currentEpisode) + 1;
            nextIndex >= this.episodes.length ? nextIndex = 0 : nextIndex = nextIndex; 
            this.currentEpisode.pause(this);
            this.currentEpisode = this.episodes[nextIndex];
            this.currentEpisode.play(this);
        }
    
        playPrev() {
            let nextIndex = this.episodes.indexOf(this.currentEpisode) - 1;
            nextIndex < 0 ? nextIndex = this.episodes.length - 1 : nextIndex = nextIndex; 
            this.currentEpisode.pause(this);
            this.currentEpisode = this.episodes[nextIndex];
            this.currentEpisode.play(this);
        }
    }
    class Episode{
        constructor(title, description, cover, imgSrc, audio, playButton, loader){
            this.title = title;
            this.description = description;
            this.cover = cover;
            this.imgSrc = imgSrc;
            this.audio = audio;
            this.playButton = playButton;
            this.loader = loader;

            this.duration = this.getDurationString();
            this.currentTime = 0;
        }

        init(player){
            this.playButton.addEventListener( 'click', () => {
                if(this.playButton.classList.contains('_playing')){
                    this.pause(player);
                } else {
                    player.episodes.forEach( podcast => {
                        if(podcast.playButton.classList.contains('_playing')){
                            podcast.stop();
                        }
                    })
                    this.play(player);
                }
            })
    
            this.audio.addEventListener('timeupdate', (e) => {
                player.updateProgress(e, this);
            });
    
            this.audio.addEventListener('ended', () => {
                player.playNext();
            })
        }

        getDurationString() {
            let durationMinutes = Math.floor(this.audio.duration/60),
                durationSeconds = Math.round(this.audio.duration%60);

            if(durationSeconds < 10) {
                durationSeconds = '0' + durationSeconds;
            }

            return `${durationMinutes}:${durationSeconds}`;
        }

        getCurrentTimeString() {
            let currentMinutes = Math.floor(this.audio.currentTime/60),
                currentSeconds = Math.round(this.audio.currentTime%60);

            if(currentSeconds < 10) {
                currentSeconds = '0' + currentSeconds;
            }

            return `${currentMinutes}:${currentSeconds}`;
        }

        play(player) {
            const playPromise = this.audio.play();
            this.loader.classList.add('_loading')
            playPromise.then( () => {
                this.loader.classList.remove('_loading')
                this.audio.volume = player.currentVolume;
                this.cover.classList.add('_play');
                player.playPlayer();
                player.setTrack(this);
                this.playButton.classList.remove('_icon-play');
                this.playButton.classList.add('_icon-pause');
                this.playButton.classList.add('_playing');
                player.currentEpisode = this;
            })
            .catch( (error) => {
                console.log('error')
                player.showDialog(true);
                this.loader.classList.remove('_loading')
                setTimeout( () => {
                    player.showDialog(false);
                }, 8000);
            });
        }

        pause(player) {
            this.audio.pause();
            this.cover.classList.remove('_play');
            player.pausePlayer();
            this.playButton.classList.remove('_playing');
            this.playButton.classList.remove('_icon-pause');
            this.playButton.classList.add('_icon-play');
        }

        stop() {
            this.audio.load();
            this.audio.pause();
            this.cover.classList.remove('_play');
            this.playButton.classList.remove('_playing');
            this.playButton.classList.remove('_icon-pause');
            this.playButton.classList.add('_icon-play');
        }
    }

    const player = new Player(
        document.querySelector('.player'),
        document.querySelector('.player__cover'),
        document.querySelector('.player__title'),
        document.querySelector('.player__duration'),
        document.querySelector('.player__current-time'),
        document.querySelector('.player__play'),
        document.querySelector('._icon-forward'),
        document.querySelector('._icon-backward'),
        document.querySelector('.player__volume'),
        document.querySelector('.player__volume-wrapper'),
        document.querySelector('.player__volume-bar'),
        document.querySelector('.player__volume-scale'),
        document.querySelector('.player__progress-bar'),
        document.querySelector('.player__progress'),
        document.querySelector('.podcasts__dialog')
    )

    // Get episodes
    document.querySelectorAll('.podcasts__episode').forEach( episode => {
        let title = episode.querySelector('.episode__title').innerText,
            description = episode.querySelector('.episode__description').innerText,
            cover = episode.querySelector('img'),
            imgSrc = cover.getAttribute('src'),
            audio = episode.querySelector('.episode__audio'),
            play = episode.querySelector('.episode__play'),
            loader = episode.querySelector('.episode__loader');

        player.episodes.push(new Episode(title, description, cover, imgSrc, audio, play, loader));
    })

    // Activate episodes play buttons
    player.episodes.forEach( episode => {
        episode.init(player);
    })
    // Player controls
    player.init();
}

export default player;