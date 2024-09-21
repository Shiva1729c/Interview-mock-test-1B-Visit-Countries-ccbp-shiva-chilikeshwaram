import {
  CountryListItem,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, updateToVisited} = props
  const {name, isVisited, id} = countryDetails

  const onClickVisitButton = () => {
    updateToVisited(id)
  }

  return (
    <CountryListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitButton type="button" onClick={onClickVisitButton}>
          Visit
        </VisitButton>
      )}
    </CountryListItem>
  )
}

export default CountryItem
