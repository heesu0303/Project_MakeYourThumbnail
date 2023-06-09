import React, { useRef, useState } from 'react'
import * as S from './homeStyle'
import { BlockPicker } from 'react-color'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import TextAreaAutoResize from 'react-textarea-autosize'
import { InputType } from '../types/Type'

const Home = () => {
  const [inputs, setInputs] = useState<InputType>({
    width: 768,
    height: 402,
  })
  const { width, height } = inputs

  const [titleActive, setTitleActive] = useState<string>('')
  const [textActive, setTextActive] = useState<string>('')
  const [bgActive, setBgActive] = useState<string>('')

  const [isTextActive, setIsTextActive] = useState<boolean>(false)
  const [isBgActive, setIsBgActive] = useState<boolean>(false)
  const [shadowActive, setShadowActive] = useState<boolean>(false)
  const [fontActive, setFontActive] = useState<boolean>(false)

  const [fontSize, setFontSize] = useState<number>(40)
  const [textColor, setTextColor] = useState<string>('#000')
  const [bgColor, setBgColor] = useState<string>('#c0e9eb')
  const [randomTextColor, setRandomTextColor] = useState<string>('#050303')
  const [randomBgColor, setRandomBgColor] = useState<string>('#c0e9eb')
  const [gradationStart, setGradationStart] = useState<string>('#000')
  const [gradationStop, setGradationStop] = useState<string>('#000')

  const [imgFile, setImgFile] = useState<any>('')
  const imgRef = useRef<any>(null)
  const saveRef = useRef<any>(null)

  const scroll = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    scroll.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const titleTypes = ['제목', '제목/부제목', '제목/소제목', '제목/부제목/소제목']
  const textTypes = ['단색', '랜덤']
  const backgroundTypes = ['단색', '랜덤', '그라데이션']
  const fontTypes = [12, 16, 20, 24, 28, 32, 36, 40]

  // 랜덤 컬러 생성
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 900)
    const saturation = Math.floor(Math.random() * 30) + 70
    const lightness = Math.floor(Math.random() * 30) + 70
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  // input값 변경에 따라 타이틀 value값 변경
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  // 텍스트 사이즈
  function handleFontSizeChange(newSize: number) {
    setFontSize(newSize)
  }

  // 텍스트 스타일 클릭시 상태값 변경
  const handleTextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsTextActive(!isTextActive)
    if ((e.target as HTMLButtonElement).value === '랜덤') {
      setRandomTextColor(getRandomColor())
    }
    setTextActive(() => {
      return (e.target as HTMLButtonElement).value
    })
  }

  // 배경 스타일 클릭시 상태값 변경
  const handleBgClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsBgActive(!isBgActive)
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
  }

  // 배경 이미지 업로드
  const handleImgChange = () => {
    const file = imgRef.current.files[0]
    if (file.length === 0) {
      return
    } else {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImgFile(reader.result)
      }
    }
  }

  // 썸네일 다운로드
  const handleDownload = () => {
    const save = saveRef.current
    domtoimage.toBlob(save).then((blab) => {
      saveAs(blab, 'thumbnail.png')
    })
  }

  return (
    <S.Wrap>
      <S.Section>
        <S.Headline>
          Make Your
          <br /> Thumbnail
        </S.Headline>
        <S.Mark onClick={handleScroll}>👇</S.Mark>
      </S.Section>

      <S.Section ref={scroll}>
        <S.ThumbnailWrap>
          <S.Thumbnail
            width={width}
            height={height}
            textColor={textColor}
            bgColor={bgColor}
            randomText={randomTextColor}
            randomBg={randomBgColor}
            gradationStart={gradationStart}
            gradationStop={gradationStop}
            textActive={textActive}
            bgActive={bgActive}
            imgFile={imgFile}
            shadow={shadowActive}
            fontSize={fontSize}
            ref={saveRef}
          >
            <h2 className='ir'>타이틀 폼</h2>
            <TextAreaAutoResize
              className='title-active title'
              maxLength={28}
              placeholder='제목을 입력해주세요.'
            />
            <TextAreaAutoResize
              className='title-active subtitle'
              maxLength={30}
              placeholder='부제목을 입력해주세요.'
              style={
                titleActive === '제목' || titleActive === '제목/소제목'
                  ? { display: 'none' }
                  : { display: 'block' }
              }
            />
            <TextAreaAutoResize
              className='title-active subheading'
              maxLength={30}
              placeholder='소제목을 입력해주세요.'
              style={
                titleActive === '제목' || titleActive === '제목/부제목'
                  ? { display: 'none' }
                  : { display: 'block' }
              }
            />
          </S.Thumbnail>
        </S.ThumbnailWrap>

        <div>
          <S.SizeInput name='width' placeholder='width' onChange={handleInputChange} />
          <S.SizeInput name='height' placeholder='height' onChange={handleInputChange} />
          <S.TooltipWrap>
            ❔
            <S.Tooltip>
              벨로그 : 768 x 402 (기본)
              <br />
              티스토리 : 230 x 300
              <br />
              유튜브 : 1280 x 720
              <br />
              트위터 : 400 x 400
              <br />
              인스타그램 : 1080 x 1080
            </S.Tooltip>
          </S.TooltipWrap>
        </div>

        <S.ButtonSettings>
          <S.StyleType>⚡️ 구성</S.StyleType>
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
          <S.StyleType>⚡️ 텍스트</S.StyleType>
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
            className={fontActive ? 'active' : ''}
            onClick={() => setFontActive(!fontActive)}
          >
            크기
            {fontActive && (
              <S.DropList>
                {fontTypes.map((item) => (
                  <S.DropSize key={item} onClick={() => handleFontSizeChange(item)}>
                    {item}px
                  </S.DropSize>
                ))}
              </S.DropList>
            )}
          </S.Button>
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
          <S.StyleType>⚡️ 배경</S.StyleType>
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
          <S.Label htmlFor='imageInput'>이미지</S.Label>
          <S.ImageInput
            type='file'
            accept='image/*'
            id='imageInput'
            onChange={handleImgChange}
            onClick={() => {
              setBgActive('이미지')
            }}
            ref={imgRef}
          />
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
        <S.SaveButton onClick={handleDownload}>Download</S.SaveButton>

        <S.LinkWrap>
          <S.Link href='https://github.com/heesu0303' target='_black'>
            GitHub
          </S.Link>
          <S.Link href='https://velog.io/@heesu0303' target='_black'>
            velog
          </S.Link>
        </S.LinkWrap>
      </S.Section>
    </S.Wrap>
  )
}

export default Home
