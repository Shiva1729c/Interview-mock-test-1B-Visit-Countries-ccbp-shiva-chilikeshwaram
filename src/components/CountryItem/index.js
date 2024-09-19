import {CountryListItem, CountryName, VisitButton} from './styledComponents'

const CountryItem = props => {
  const countryDetails = props
  const {name} = countryDetails

  return (
    <CountryListItem>
      <CountryName>{name}</CountryName>
      <VisitButton>Visit</VisitButton>
    </CountryListItem>
  )
}

export default CountryItem
