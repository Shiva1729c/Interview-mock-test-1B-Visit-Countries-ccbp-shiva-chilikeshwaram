import {Component} from 'react'
import CountryItem from '../CountryItem'
import {
  VisitCountriesContainer,
  ResponsiveContainer,
  MainHeading,
  CountryItemContainer,
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

  render() {
    const {countriesList} = this.state
    console.log(countriesList)
    return (
      <VisitCountriesContainer>
        <ResponsiveContainer>
          <MainHeading>Countries</MainHeading>
          {this.renderCountryItem()}
        </ResponsiveContainer>
      </VisitCountriesContainer>
    )
  }
}

export default VisitCountries
