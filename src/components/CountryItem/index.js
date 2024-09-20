import {
  CountryListItem,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails} = props
  const {name, isVisited} = countryDetails

  return (
    <CountryListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitButton type="button">Visit</VisitButton>
      )}
    </CountryListItem>
  )
}

export default CountryItem
