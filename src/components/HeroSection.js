import Button from "./Button";
import './HeroSection.css';

export const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src='/videos/skateclip.mp4' autoPlay loop muted />
            <h1>Adventure away</h1>
            <p>What are you waiting for</p>
            <div className='hero-buttons'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn-large'
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;