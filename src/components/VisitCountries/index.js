import {Component} from 'react'
import CountryItem from '../CountryItem'
import VisitedCountryCard from '../VisitedCountryCard'
import {
  VisitCountriesContainer,
  ResponsiveContainer,
  MainHeading,
  CountryItemContainer,
  VisitedCountryItemContainer,
} from './styledComponents'

class VisitCountries extends Component {
  state = {
    countriesList: [],
  }

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({countriesList: initialCountriesList})
  }

  renderCountryItem = () => {
    const {countriesList} = this.state
    return (
      <CountryItemContainer>
        {countriesList.map(eachCountry => (
          <CountryItem countryDetails={eachCountry} key={eachCountry.id} />
        ))}
      </CountryItemContainer>
    )
  }

  renderVisitedCountryCard = () => {
    const {countriesList} = this.state
    return (
      <VisitedCountryItemContainer>
        {countriesList.map(eachCountry => (
          <VisitedCountryCard
            countryCardDetails={eachCountry}
            key={eachCountry.id}
          />
        ))}
      </VisitedCountryItemContainer>
    )
  }

  render() {
    return (
      <VisitCountriesContainer>
        <ResponsiveContainer>
          <MainHeading>Countries</MainHeading>
          {this.renderCountryItem()}
          <MainHeading>Visited Countries</MainHeading>
          {this.renderVisitedCountryCard()}
        </ResponsiveContainer>
      </VisitCountriesContainer>
    )
  }
}

export default VisitCountries
