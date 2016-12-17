class PortfolioController {
    constructor() {
        this.message = 'Portfolio!';
        this.bricks = [{
            src: '/images/barber_and_style.png'
        }, {
            src: '/images/keenly_done.png'
        }, {
            src: '/images/rails_mythical_creatures.png'
        }, {
            src: '/images/react_image_search.png'
        }, {
            src: '/images/react_youtube.png'
        }, {
            src: '/images/writings_on_the_wall.png'
        }];
    }
};

PortfolioController.$inject = [];

export default PortfolioController;
