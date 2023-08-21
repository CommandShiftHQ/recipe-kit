import styled from 'styled-components'

const StyledButton = styled.a`
  padding: 12px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  background: ${(props) => (props.$primary ? "#ff7487" : "#fefefe")};
  color: ${(props) => (props.$primary ? "#fefefe" : "#ff7487")};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  border: 2px solid #ff7487;
  margin-right: 12px;
`;

const Button = ({ link, text, primary }) => {
  return <StyledButton href={link} $primary={primary}>{text}</StyledButton>;
}

export default Button