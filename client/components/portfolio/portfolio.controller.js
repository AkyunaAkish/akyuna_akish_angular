class PortfolioController {
    constructor() {
        this.projects = [{
            title: 'React/Redux/NodeJS blog application',
            github: 'https://github.com/AkyunaAkish/react-redux-blog-application',
            live: 'https://writings-on-the-wall.herokuapp.com/',
            img: '/images/writings_on_the_wall.png'
        }, {
            title: 'React/Redux image search',
            github: 'https://github.com/AkyunaAkish/react-redux-image-search',
            live: 'https://react-redux-image-search.firebaseapp.com/',
            img: '/images/react_image_search.png'
        }, {
            title: 'React youtube search',
            github: 'https://github.com/AkyunaAkish/reactJS_youtube_search',
            live: 'https://react-youtube-search.firebaseapp.com/',
            img: '/images/react_youtube.png'
        }, {
            title: 'AngularJS social media application',
            github: 'https://github.com/AkyunaAkish/keenly_done',
            live: 'https://keenlydone.firebaseapp.com/',
            img: '/images/keenly_done.png'
        }, {
            title: 'AngularJS barber shop site',
            github: 'https://github.com/AkyunaAkish/barberAndStyle',
            live: 'http://legacybarberandstyle.herokuapp.com/',
            img: '/images/barber_and_style.png'
        }, {
            title: 'Ruby on Rails CRUD application',
            github: 'https://github.com/AkyunaAkish/creaturesRailsApp',
            live: 'http://mythical-creatures.herokuapp.com/',
            img: '/images/rails_mythical_creatures.png'
        }];
    }
};

PortfolioController.$inject = [];

export default PortfolioController;
