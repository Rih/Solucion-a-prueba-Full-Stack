import styled from 'styled-components'

const FormContainerComponent = styled.div`
  display: flex;
  ${(({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`)}
  ${(({ alignItems }) => alignItems && `align-items: ${alignItems};`)}
  ${(({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`)}
  height: ${(({ height }) => height ? height : 'fit-content')};
  width: ${(({ width }) => width ? width : '100%')};
  margin: ${(({ margin }) => margin ? margin : '0')};
  padding: ${(({ padding }) => padding ? padding : '0.5rem 1rem')};
  background: #fff;
`

export default FormContainerComponent