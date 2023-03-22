import styled, { css } from 'styled-components'
import type { ThumbnailType } from '../types/Type'

const TextStyle = css`
  text-align: center;
  line-height: normal;
`

export const Wrap = styled.article`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  .picker {
    position: fixed;
    z-index: 1;
  }
`

export const PickerWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 122px;
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
export const Thumbnail = styled.section<ThumbnailType>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 402px;
  /* margin: 30px auto; */
  background: ${(props) =>
    (props.bgActive === '단색' && props.bgColor) ||
    (props.bgActive === '랜덤' && props.randomBg) ||
    (props.bgActive === '그라데이션' &&
      `linear-gradient(${props.gradationStart}, ${props.gradationStop})`) ||
    (props.bgActive === '이미지' && `url(${props.imgFile}) no-repeat center`) ||
    props.randomBg};
  background-size: cover;
  color: ${(props) => (props.textActive === '단색' ? props.textColor : props.randomText)};
  &.active {
    text-shadow: 2px 2px 6px var(--black);
  }
`

export const Title = styled.h2`
  ${TextStyle}
  max-width: 80%;
  font-size: 40px;
  font-weight: bold;
`

export const SubTitle = styled.h3`
  ${TextStyle}
  max-width: 70%;
  font-size: 24px;
  border-top: 1px solid ${(props) => props.color};
  margin-top: 20px;
  padding-top: 14px;
`

export const SubHeading = styled.p`
  ${TextStyle}
  position: absolute;
  max-width: 50%;
  bottom: 30px;
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
  margin: 10px 10px 20px;
`

export const ButtonSettings = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 0.8fr repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  width: 768px;
  margin: 20px auto;
`

export const StyleType = styled.h2`
  font-size: 14px;
  color: white;
`

const ButtonActive = css`
  background-color: var(--yellow);
  border: 2px solid var(--yellow);
  color: var(--greenblue);
`

const ButtonStyle = css`
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

export const Button = styled.button`
  ${ButtonStyle}
`

export const Label = styled.label`
  ${ButtonStyle}
  text-align: center;
`

export const ImageInput = styled.input`
  display: none;
`
export const SaveButton = styled.button`
  width: 120px;
  margin: 30px auto;
  padding: 18px 0;
  border-radius: 30px;
  background-color: var(--greenblue);
  color: white;
  font-weight: bold;
  :hover {
    background-color: #fd6abb;
  }
`
