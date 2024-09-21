import styled from 'styled-components'

export const VisitCountriesContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #161624;
  justify-content: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  background-color: #1f1f2f;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
`

export const MainHeading = styled.h1`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
`
export const CountryItemContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  border: 1px solid #334155;
  border-radius: 5px;
  height: 228px;
  overflow-y: scroll;
`
export const VisitedCountryItemContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const EmptyVisitInstruction = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
  margin-top: 100px;
`
