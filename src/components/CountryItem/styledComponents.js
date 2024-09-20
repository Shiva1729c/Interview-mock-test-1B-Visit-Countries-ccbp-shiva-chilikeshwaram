import styled from 'styled-components'

export const CountryListItem = styled.li`
  display: flex;
  border-bottom: 1px solid #334155;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`
export const CountryName = styled.p`
  color: #f8fafc;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto';
`

export const VisitButton = styled.button`
  height: 24px;
  width: 60px;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  color: #f1f5f9;
  font-weight: 600;
  font-size: 10px;
  font-family: 'Roboto';
`
export const VisitedText = styled.p`
  color: #94a3b8;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 12px;
`
