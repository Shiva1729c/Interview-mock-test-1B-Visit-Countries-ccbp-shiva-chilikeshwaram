import styled from 'styled-components'

export const CardItem = styled.li`
  margin: 5px;
  background-color: #1f1f2f;
  box-shadow: 0px 4px 8px rgba(0, 0, 0.2);
`
export const NameAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CountryName = styled.p`
  color: #f8fafc;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Roboto';
  margin-left: 10px;
`

export const RemoveButton = styled.button`
  height: 24px;
  width: 50px;
  background: none;
  border: 1px solid #f8fafc;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  color: #f1f5f9;
  font-weight: 600;
  font-size: 9px;
  font-family: 'Roboto';
  margin-right: 10px;
`
export const CountryFlagLogo = styled.img`
  width: 180px;
  height: 100px;
`
