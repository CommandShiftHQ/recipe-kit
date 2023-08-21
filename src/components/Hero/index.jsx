import styled from 'styled-components'
import Button from '../Button'

const StyledHero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 70vh;
  overflow: hidden;
  margin-bottom: 80px;

  h1 {
    font-size: 48px;
    line-height: 60px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  div {
    z-index: 10;
    position: relative;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h1>Recipe Kit</h1>
        <p>
          Discover culinary delights and explore a world of irresistible
          flavours
        </p>
        <Button
          text="Browse Recipes"
          link="https://example.com/recipes"
          primary={true}
        />
        <Button
          text="Join our Cooking Community"
          link="https://example.com/join"
          primary={false}
        />
      </div>
      <img src="/images/hero.jpg" alt="herbs and bread on wooden board" />
    </StyledHero>
  );
}

export default Hero