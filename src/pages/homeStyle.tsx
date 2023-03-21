import styled, { css } from 'styled-components'

const TextStyle = css`
  text-align: center;
  line-height: normal;
`

const ButtonActive = css`
  background-color: var(--yellow);
  border: 2px solid var(--yellow);
  color: #59adb9;
`

export const Wrap = styled.article`
  margin: 50px auto;
`

export const Headline = styled.h1`
  ${TextStyle}
  font-family: 'PyeongChangPeace-Bold';
  font-size: 50px;
  color: white;
  @media all and (min-width: 720px) {
    ::before {
      content: '✨ ';
    }
    ::after {
      content: ' ✨';
    }
  }
`
export const Thumbnail = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 402px;
  margin: 30px auto;
  background-color: white;
  color: ${(props) => props.color};
  &.active {
    text-shadow: 2px 2px 2px var(--deep-gray);
  }
`

export const Title = styled.h2`
  ${TextStyle}
  max-width: 80%;
  font-size: 40px;
  color: ${(props) => props.color};
`

export const SubTitle = styled.h3`
  ${TextStyle}
  max-width: 70%;
  font-size: 24px;
  border-top: 1px solid var(--black);
  margin-top: 20px;
  padding-top: 14px;
`

export const SubHeading = styled.p`
  ${TextStyle}
  position: absolute;
  max-width: 50%;
  bottom: 50px;
`

export const InputSettings = styled.section`
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  width: 240px;
  height: 40px;
  border-radius: 100px;
  background-color: white;
  padding: 14px;
  margin: 0 10px;
`

export const ButtonSettings = styled.section`
  display: grid;
  grid-template-columns: 0.8fr repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  width: 768px;
  margin: 30px auto;
`

export const StyleType = styled.h2`
  font-size: 14px;
  color: white;
`

export const Button = styled.button`
  width: 140px;
  padding: 10px 0;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  :hover {
    ${ButtonActive}
  }
  &.active {
    ${ButtonActive};
  }
`
