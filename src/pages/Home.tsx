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
  const [titleActive, setTitleActive] = useState<string>('')
  const [textActive, setTextActive] = useState<boolean>(false)
  const [dropActive, setDropActive] = useState<boolean>(false)
  const [bgActive, setBgActive] = useState<boolean>(false)
  const [textColor, setTextColor] = useState<string>('#000')
  const [backgroundColor, setBackgroundColor] = useState<string>('#c0e9eb')

  const titleTypes = ['제목', '제목/부제목', '제목/소제목', '제목/부제목/소제목']
  // const backgroundTypes = ['배경 단색', '배경 랜덤', '배경 그라데이션', '이미지']

  const { title, subtitle, subheading } = inputs
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  // const handleChangeComplete = (color: { hex: React.SetStateAction<string> }) => {
  //   setTextColor(color.hex)
  // }

  return (
    <S.Wrap>
      <S.Headline>Make Your Thumbnail</S.Headline>

      <S.Thumbnail
        color={textColor}
        bgColor={backgroundColor}
        className={dropActive ? 'active' : ''}
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
          onClick={() => (textActive ? setTextActive(false) : setTextActive(true))}
        >
          단색
        </S.Button>
        <div style={{ position: 'absolute' }}>
          {textActive && (
            <BlockPicker
              color={textColor}
              onChangeComplete={(color) => setTextColor(color.hex)}
              className='picker'
            />
          )}
        </div>

        <S.Button
          className={dropActive ? 'active' : ''}
          onClick={() => (dropActive ? setDropActive(false) : setDropActive(true))}
        >
          그림자
        </S.Button>
      </S.ButtonSettings>

      <S.ButtonSettings>
        <S.StyleType>배경 스타일</S.StyleType>
        <S.Button
          className={bgActive ? 'active' : ''}
          onClick={() => (bgActive ? setBgActive(false) : setBgActive(true))}
        >
          단색
        </S.Button>
        <div style={{ position: 'absolute' }}>
          {bgActive && (
            <BlockPicker
              color={backgroundColor}
              onChangeComplete={(color) => setBackgroundColor(color.hex)}
              className='picker'
            />
          )}
        </div>
      </S.ButtonSettings>
    </S.Wrap>
  )
}

export default Home
