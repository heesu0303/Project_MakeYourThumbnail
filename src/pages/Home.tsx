import React, { useState } from 'react'
import * as S from './homeStyle'
import { BlockPicker } from 'react-color'
import type { InputType } from '../types/Type'

const Home = () => {
  const [inputs, setInputs] = useState<InputType>({
    title: '',
    subtitle: '',
    subheading: '',
  })
  const { title, subtitle, subheading } = inputs

  const [titleActive, setTitleActive] = useState<string>('')
  const [textActive, setTextActive] = useState<string>('')
  const [bgActive, setBgActive] = useState<string>('')

  const [shadowActive, setShadowActive] = useState<boolean>(false)
  const [isTextActive, setIsTextActive] = useState<boolean>(false)
  const [isBgActive, setIsBgActive] = useState<boolean>(false)

  const [textColor, setTextColor] = useState<string>('#000')
  const [bgColor, setBgColor] = useState<string>('#c0e9eb')
  const [randomTextColor, setRandomTextColor] = useState<string>('#000')
  const [randomBgColor, setRandomBgColor] = useState<string>('#c0e9eb')
  const [gradationStart, setGradationStart] = useState<string>('#000')
  const [gradationStop, setGradationStop] = useState<string>('#000')

  const titleTypes = ['제목', '제목/부제목', '제목/소제목', '제목/부제목/소제목']
  const textTypes = ['단색', '랜덤']
  const backgroundTypes = ['단색', '랜덤', '그라데이션', '이미지']

  // input값 변경에 따라 타이틀 value값 변경
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  // 랜덤 컬러 생성
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    const saturation = Math.floor(Math.random() * 30) + 70
    const lightness = Math.floor(Math.random() * 30) + 70
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  // 텍스트 스타일 클릭시 상태값 변경
  const handleTextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLButtonElement).value === '랜덤') {
      setRandomTextColor(getRandomColor())
    }
    setTextActive(() => {
      return (e.target as HTMLButtonElement).value
    })
    setIsTextActive(!isTextActive)
  }

  // 배경 스타일 클릭시 상태값 변경
  const handleBgClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLButtonElement).value === '랜덤') {
      setRandomBgColor(getRandomColor())
    }
    if ((e.target as HTMLButtonElement).value === '그라데이션') {
      setGradationStart(getRandomColor())
      setGradationStop(getRandomColor())
    }
    setBgActive(() => {
      return (e.target as HTMLButtonElement).value
    })
    setIsBgActive(!isBgActive)
  }

  return (
    <S.Wrap>
      <S.Headline>Make Your Thumbnail</S.Headline>

      <S.Thumbnail
        textColor={textColor}
        bgColor={bgColor}
        randomText={randomTextColor}
        randomBg={randomBgColor}
        gradationStart={gradationStart}
        gradationStop={gradationStop}
        textActive={textActive}
        bgActive={bgActive}
        className={shadowActive ? 'active' : ''}
      >
        <S.Title>{title ? title : '제목을 입력해주세요.'}</S.Title>
        <S.SubTitle
          style={
            titleActive === '제목' || titleActive === '제목/소제목'
              ? { display: 'none' }
              : { display: 'block' }
          }
        >
          {subtitle ? subtitle : '부제목을 입력해주세요.'}
        </S.SubTitle>
        <S.SubHeading
          style={
            titleActive === '제목' || titleActive === '제목/부제목'
              ? { display: 'none' }
              : { display: 'block' }
          }
        >
          {subheading ? subheading : '소제목을 입력해주세요.'}
        </S.SubHeading>
      </S.Thumbnail>

      <S.InputSettings>
        <h2 className='ir'>제목 입력폼</h2>
        <S.Input
          name='title'
          placeholder='제목을 입력해주세요.'
          maxLength={40}
          onChange={handleInputChange}
        />
        <S.Input
          name='subtitle'
          placeholder='부제목을 입력해주세요.'
          maxLength={60}
          onChange={handleInputChange}
        />
        <S.Input
          name='subheading'
          placeholder='소제목을 입력해주세요.'
          maxLength={34}
          onChange={handleInputChange}
        />
      </S.InputSettings>

      <S.ButtonSettings>
        <S.StyleType>타이틀 구성</S.StyleType>
        {titleTypes.map((item) => (
          <S.Button
            key={item}
            value={item}
            className={item === titleActive ? 'active' : ''}
            onClick={(e) => {
              setTitleActive(() => {
                return (e.target as HTMLInputElement).value
              })
            }}
          >
            {item}
          </S.Button>
        ))}
      </S.ButtonSettings>

      <S.ButtonSettings>
        <S.StyleType>텍스트 스타일</S.StyleType>
        {textTypes.map((item) => (
          <S.Button
            key={item}
            value={item}
            className={item === textActive && isTextActive ? 'active' : ''}
            onClick={(e) => {
              handleTextClick(e)
            }}
          >
            {item}
          </S.Button>
        ))}
        <S.Button
          className={shadowActive ? 'active' : ''}
          onClick={() => setShadowActive(!shadowActive)}
        >
          그림자
        </S.Button>
        {textActive === '단색' && isTextActive && (
          <S.PickerWrap>
            <BlockPicker
              color={textColor}
              onChangeComplete={(color) => setTextColor(color.hex)}
              className='picker'
            />
          </S.PickerWrap>
        )}
      </S.ButtonSettings>

      <S.ButtonSettings>
        <S.StyleType>배경 스타일</S.StyleType>
        {backgroundTypes.map((item) => (
          <S.Button
            key={item}
            value={item}
            className={item === bgActive && isBgActive ? 'active' : ''}
            onClick={(e) => {
              handleBgClick(e)
            }}
          >
            {item}
          </S.Button>
        ))}
        {bgActive === '단색' && isBgActive && (
          <S.PickerWrap>
            <BlockPicker
              color={bgColor}
              onChangeComplete={(color) => setBgColor(color.hex)}
              className='picker'
            />
          </S.PickerWrap>
        )}
      </S.ButtonSettings>
    </S.Wrap>
  )
}

export default Home
