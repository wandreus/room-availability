import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    right: -100%;
    top: 0;
    bottom: 0;
    width: 30%;
    background: rgba(255, 255, 255, 0.9);
    border-left: 1px solid #ccc;
    transition: 0.3s linear all;

    &.active {
      right: 0%;
      transition: 0.3s linear all;
    }

    &:empty {
      right: -100%;
    }

    @media (max-width: 768px) {
      width: 85%;
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #786cd9;
    color: #fff;
  `}
`

export const Close = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 36px;
    background: #ff00b4;
    color: #fff;
    appearance: none;
    border: none;
    position: absolute;
    left: -41px;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  `}
`

export const DateAndTime = styled.ul`
  ${({ theme }) => css`
    padding: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    li {
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      align-items: flex-start;
    }

    label {
      display: block;
      width: 100%;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    span {
      font-weight: 200;
      width: 51%;
      display: block;
      margin-top: 5px;
      padding-top: 5px;
      border-top: 1px solid #ccc;

      &:nth-child(2) {
        border: none;
        margin: 0;
        padding: 0;
      }
    }
  `}
`
