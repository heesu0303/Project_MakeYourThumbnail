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
  top: 52px;
  left: 133px;
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
  ::-webkit-scrollbar {
    display: none;
  }
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
  ::after {
    content: 'click!';
    font-size: 10px;
    color: var(--deep-gray);
  }
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
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background: ${(props) =>
    (props.bgActive === '단색' && props.bgColor) ||
    (props.bgActive === '랜덤' && props.randomBg) ||
    (props.bgActive === '그라데이션' &&
      `linear-gradient(${props.gradationStart}, ${props.gradationStop})`) ||
    (props.bgActive === '이미지' && `url(${props.imgFile}) no-repeat center`) ||
    props.randomBg};
  background-size: cover;

  .title-active {
    color: ${(props) => (props.textActive === '단색' ? props.textColor : props.randomText)};
    text-shadow: ${(props) => props.shadow && '2px 2px 2px #787878'};
    ::placeholder {
      color: ${(props) => (props.textActive === '단색' ? props.textColor : props.randomText)};
    }
  }
  .title {
    ${TextStyle}
    max-width: 80%;
    font-size: ${(props) => props.fontSize + 'px'};
    &.active {
      text-shadow: 2px 2px 2px #787878;
    }
  }
  .subtitle {
    ${TextStyle}
    max-width: 70%;
    font-size: 24px;
    margin-top: 20px;
    padding-top: 14px;
    border-top: 1px solid ${(props) => props.color};
  }
  .subheading {
    ${TextStyle}
    position: absolute;
    max-width: 50%;
    bottom: 30px;
    font-size: 16px;
  }
`

// 사이즈 입력 폼
export const SizeInput = styled.input`
  width: 70px;
  height: 40px;
  border-bottom: 1px solid white;
  padding: 10px;
  margin: 20px 10px;
  color: white;
  text-align: center;
  :hover,
  :focus {
    border-bottom: 1px solid var(--deep-yellow);
  }
`

// 툴팁 기능
export const Tooltip = styled.span`
  visibility: hidden;
  position: absolute;
  left: 30px;
  top: -34px;
  width: 200px;
  border-radius: 6px;
  background-color: var(--super-yellow);
  color: #fff;
  line-height: normal;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
  ::after {
    content: '';
    position: absolute;
    top: 34px;
    right: 200px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent var(--super-yellow) transparent transparent;
  }
`

export const TooltipWrap = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 0.9;
  }
`

// 타입 제목
export const StyleType = styled.h2`
  position: relative;
  font-size: 14px;
  font-weight: bold;
  color: var(--deep-yellow);
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
  &.active,
  :hover {
    ${ButtonActive};
  }
`

export const Button = styled.button`
  ${ButtonStyle};
  position: relative;
`

// 드롭박스
export const DropList = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;
  width: 140px;
  height: 140px;
  background-color: var(--black);
  border: 2px solid white;
  border-radius: 20px;
  z-index: 1;
  overflow: auto;
`

export const DropSize = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--deep-yellow);
  }
`

// 배경 이미지
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
  :hover,
  :active {
    color: var(--super-yellow);
    box-shadow: inset 4px 4px 0px var(--deep-blue);
  }
`

// 하단 링크 스타일
export const LinkWrap = styled.div`
  padding: 5px 0 20px;
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
