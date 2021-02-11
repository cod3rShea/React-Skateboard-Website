import CardsItems from "./CardsItems";
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItems 
                            src='images/skate_1.jpeg'
                            text='Explore the world of skating'
                            label='About Us'
                            path='/about'
                        />
                        <CardsItems 
                            src='images/skategroup.jpg'
                            text='Explore the world of skating'
                            label='Contact Us'
                            path='/about'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardsItems 
                            src='images/skategroup.jpg'
                            text='Explore the world of skating'
                            label='Contact Us'
                            path='/about'
                        />
                        <CardsItems 
                            src='images/skategroup.jpg'
                            text='Explore the world of skating'
                            label='Contact Us'
                            path='/about'
                        />
                        <CardsItems 
                            src='images/skategroup.jpg'
                            text='Explore the world of skating'
                            label='Contact Us'
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
