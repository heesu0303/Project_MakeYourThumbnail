import styled, { css, keyframes } from 'styled-components'
import type { ThumbnailType } from '../types/Type'

export const Wrap = styled.article`
  margin: 0 auto;
  height: 100vh;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .picker {
    position: fixed;
    z-index: 1;
  }
`

// 컬러 팔레트 위치 조정
export const PickerWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 122px;
`

const HeadAnimation = keyframes`
	from {
    opacity: 0;
  }
	to {
    opacity: 1;
  }
`
// 메인 타이틀, 썸네일 폼 섹션
export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${HeadAnimation} 3s;
`

const TextStyle = css`
  text-align: center;
  line-height: normal;
`

// 메인 타이틀
export const Headline = styled.h1`
  ${TextStyle}
  position: relative;
  top: 50%;
  transform: translate(0, -80%);
  margin: 20px 0;
  font-family: 'PyeongChangPeace-Bold';
  font-size: 50px;
  color: var(--deep-yellow);
  text-shadow: 3px 3px 0px var(--red);
  ::before {
    content: '✨';
    display: block;
    font-size: 40px;
  }
  ::after {
    content: '';
    position: absolute;
    top: 24px;
    left: -20%;
    width: 400px;
    height: 200px;
    background-color: var(--blue);
    border-radius: 100%;
    /* transform: rotate(170deg); */
    z-index: -1;
  }
`

// 손가락 애니메이션
const Motion = keyframes`
	0% { 
    margin-top: 0px; 
  }
	100% { 
    margin-top: 10px; 
  }
`

export const Mark = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -300%);
  font-size: 50px;
  cursor: pointer;
  animation: ${Motion} 0.3s linear 0s infinite alternate;
`

// 썸네일 스타일
export const ThumbnailWrap = styled.div`
  margin: 30px auto;
`

export const Thumbnail = styled.section<ThumbnailType>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 402px;
  border: 1px solid blue;
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
    text-shadow: 1.5px 0.5px 2px #818181;
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

// input 스타일
export const InputSettings = styled.section`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 770px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 240px;
  height: 40px;
  border-radius: 100px;
  background-color: white;
  padding: 14px;
  margin: 10px 10px 20px;
`

// 타입 제목
export const StyleType = styled.h2`
  position: relative;
  font-size: 14px;
  font-weight: bold;
  color: var(--deep-yellow);
  ::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: #183ca7;
    border-radius: 100%;
    z-index: -1;
  }
  @media all and (max-width: 770px) {
    display: none;
  }
`

// button 스타일
export const ButtonSettings = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 0.8fr repeat(4, 1fr);
  align-items: center;
  justify-items: start;
  width: 768px;
  margin: 20px auto;
  padding-left: 20px;
  gap: 10px;
  @media all and (max-width: 770px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
`

const ButtonActive = css`
  background-color: var(--deep-yellow);
  border: 2px solid var(--deep-yellow);
  color: white;
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
  width: 160px;
  margin: 30px auto;
  padding: 20px 0;
  border-radius: 30px;
  font-family: 'PyeongChangPeace-Bold';
  color: var(--deep-yellow);
  background-color: var(--blue);
  transition-duration: 0.3s;
  :hover {
    /* text-shadow: 3px 3px 0px var(--red); */
    box-shadow: 3px 3px 0px #0f2f67;
  }
  :active {
    /* text-shadow: inset 3px 3px 0px var(--red); */
    color: #d69f40;
    box-shadow: inset 3px 3px 0px #0f2f67;
  }
`

// 하단 링크 스타일
export const LinkWrap = styled.div`
  padding: 5px 0 18px;
`

export const Link = styled.a`
  font-size: 14px;
  color: var(--super-gray);
  &:first-child {
    ::before {
      content: '✨ ';
    }
    ::after {
      content: ' | ';
    }
  }
  &:last-child {
    ::after {
      content: ' ✨';
    }
  }
`
