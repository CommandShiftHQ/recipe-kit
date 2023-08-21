import styled from 'styled-components'

import Hero from './components/Hero'
import Card from "./components/Card";

import { recipes } from './data/recipes'

const StyledPageWrapper = styled.div`
  font-family: 'Bitter';
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

function App() {
  return (
    <StyledPageWrapper>
      <Hero />
      <StyledCardWrapper>
        {recipes.map((recipe) => {
          return <Card key={recipe.key} recipe={recipe} />;
        })}
      </StyledCardWrapper>
    </StyledPageWrapper>
  );
}

export default App;
