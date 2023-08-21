import styled from 'styled-components'

const pillVariant = {
  italian: "#baeddf",
  greek: "#93d7fc",
  portuguese: "#ffdfe4",
};

const StyledPill = styled.span`
  display: inline-block;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 14px;
  background: ${(props) => pillVariant[props.$variant]};
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 0.6px;
  margin: 8px 0;
`;

const Pill = ({ value }) => {
  return <StyledPill $variant={value}>{value}</StyledPill>;
}

export default Pill