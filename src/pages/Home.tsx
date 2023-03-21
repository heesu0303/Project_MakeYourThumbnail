import React, { useEffect, useState } from 'react'
import * as S from './homeStyle'
import ColorPick from '../components/ColorPick'
import { SketchPicker } from 'react-color'

interface InputType {
  title: string
  subtitle: string
  subheading: string
}

const Home = () => {
  const [inputs, setInputs] = useState<InputType>({
    title: '',
    subtitle: '',
    subheading: '',
  })
  const [titleActive, setTitleActive] = useState<string>('')
  const [textActive, setTextActive] = useState<string>('')
  const [backgroundActive, setBackgroundActive] = useState<string>('')
  const [isActive, setIsActive] = useState<boolean>(false)

  const [textColor, setTextColor] = useState<string>('#000')

  const titleTypes = ['제목', '제목/부제목', '제목/소제목', '제목/부제목/소제목']
  const textTypes = ['텍스트 단색', '텍스트 랜덤']
  const backgroundTypes = ['배경 단색', '배경 랜덤', '배경 그라데이션', '이미지']

  const { title, subtitle, subheading } = inputs
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleChangeComplete = (color: { hex: React.SetStateAction<string> }) => {
    setTextColor(color.hex)
  }

  return (
    <S.Wrap>
      <S.Headline>Make Your Thumbnail</S.Headline>

      <S.Thumbnail color={textColor} className={isActive ? 'active' : ''}>
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
          onChange={onChange}
        />
        <S.Input
          name='subtitle'
          placeholder='부제목을 입력해주세요.'
          maxLength={60}
          onChange={onChange}
        />
        <S.Input
          name='subheading'
          placeholder='소제목을 입력해주세요.'
          maxLength={34}
          onChange={onChange}
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
        <S.Button
          className={textActive ? 'active' : ''}
          onClick={(e) => {
            setTextActive(() => {
              return (e.target as HTMLInputElement).value
            })
          }}
        >
          단색
        </S.Button>

        <S.Button
          className={isActive ? 'active' : ''}
          onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
        >
          그림자
        </S.Button>
      </S.ButtonSettings>

      <S.ButtonSettings>
        <S.StyleType>배경 스타일</S.StyleType>
        {backgroundTypes.map((item) => (
          <S.Button
            key={item}
            value={item}
            className={item === backgroundActive ? 'active' : ''}
            onClick={(e) => {
              setBackgroundActive(() => {
                return (e.target as HTMLInputElement).value
              })
            }}
          >
            {item}
          </S.Button>
        ))}
      </S.ButtonSettings>
      <SketchPicker color={textColor} onChangeComplete={handleChangeComplete} />
    </S.Wrap>
  )
}

export default Home
