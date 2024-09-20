import {
  CardItem,
  CountryName,
  CountryFlagLogo,
  RemoveButton,
  NameAndButtonContainer,
} from './styledComponents'

const VisitedCountryCard = props => {
  const {countryCardDetails} = props
  const {imageUrl, name, isVisited} = countryCardDetails

  const renderCartItem = () => (
    <CardItem>
      <CountryFlagLogo src={imageUrl} alt="thumbnail" />
      <NameAndButtonContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button">Remove</RemoveButton>
      </NameAndButtonContainer>
    </CardItem>
  )

  return isVisited && renderCartItem()
}

export default VisitedCountryCard
