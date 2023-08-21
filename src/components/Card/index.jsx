import styled from 'styled-components'
import Pill from '../Pill';

const StyledCard = styled.div`
  flex: 1;
  max-width: 250px;

  img {
    width: 400px;
  }
`;

const StyledImageWrapper = styled.div`
 height: 250px;
 width: 250px;
 border-radius: 4px;
 overflow: hidden;

 img {
  height: 100%;
  width: 100%;
  object-fit: cover;
 }
`

const Card = ({ recipe }) => {
  return (
    <StyledCard>
      <StyledImageWrapper>
        <img src={recipe.image.src} alt={recipe.image.alt} />
      </StyledImageWrapper>
      <Pill value={recipe.category} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>Cooking time: {recipe.cooking_time}</p>
    </StyledCard>
  );
}

export default Card