import {Component} from 'react'
import CountryItem from '../CountryItem'
import VisitedCountryCard from '../VisitedCountryCard'
import {
  VisitCountriesContainer,
  ResponsiveContainer,
  MainHeading,
  CountryItemContainer,
  VisitedCountryItemContainer,
  EmptyVisitInstruction,
} from './styledComponents'

class VisitCountries extends Component {
  state = {
    countriesList: [],
  }

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({countriesList: initialCountriesList})
  }

  updateToVisited = id => {
    const {countriesList} = this.state
    const updatedCountryList = countriesList.map(eachCountry => {
      if (eachCountry.id === id) {
        return {...eachCountry, isVisited: true}
      }
      return eachCountry
    })
    this.setState({countriesList: updatedCountryList})
  }

  unVisitCountry = id => {
    const {countriesList} = this.state
    const updatedCountryList = countriesList.map(eachCountry => {
      if (eachCountry.id === id) {
        return {...eachCountry, isVisited: false}
      }
      return eachCountry
    })
    this.setState({countriesList: updatedCountryList})
  }

  renderCountryItem = () => {
    const {countriesList} = this.state
    return (
      <CountryItemContainer>
        {countriesList.map(eachCountry => (
          <CountryItem
            countryDetails={eachCountry}
            key={eachCountry.id}
            updateToVisited={this.updateToVisited}
          />
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
            unVisitCountry={this.unVisitCountry}
          />
        ))}
      </VisitedCountryItemContainer>
    )
  }

  render() {
    const {countriesList} = this.state
    const noCountriesVisited = countriesList.every(
      eachCountry => eachCountry.isVisited === false,
    )
    console.log(noCountriesVisited)
    return (
      <VisitCountriesContainer>
        <ResponsiveContainer>
          <MainHeading>Countries</MainHeading>
          {this.renderCountryItem()}
          <MainHeading>Visited Countries</MainHeading>
          {!noCountriesVisited ? (
            this.renderVisitedCountryCard()
          ) : (
            <EmptyVisitInstruction>
              No Countries Visited Yet!
            </EmptyVisitInstruction>
          )}
        </ResponsiveContainer>
      </VisitCountriesContainer>
    )
  }
}

export default VisitCountries
