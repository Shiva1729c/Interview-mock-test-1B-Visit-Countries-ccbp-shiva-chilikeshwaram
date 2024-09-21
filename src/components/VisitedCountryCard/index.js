import {
  CardItem,
  CountryName,
  CountryFlagLogo,
  RemoveButton,
  NameAndButtonContainer,
} from './styledComponents'

const VisitedCountryCard = props => {
  const {countryCardDetails, unVisitCountry} = props
  const {imageUrl, name, isVisited, id} = countryCardDetails

  const onClickRemoveButton = () => {
    unVisitCountry(id)
  }

  const renderCartItem = () => (
    <CardItem>
      <CountryFlagLogo src={imageUrl} alt="thumbnail" />
      <NameAndButtonContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemoveButton}>
          Remove
        </RemoveButton>
      </NameAndButtonContainer>
    </CardItem>
  )

  return isVisited && renderCartItem()
}

export default VisitedCountryCard
