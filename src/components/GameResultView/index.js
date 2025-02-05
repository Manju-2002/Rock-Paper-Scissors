import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  // eslint-disable-next-line
  const {id, image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImagesContainer>
        <ResultTextImgContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={image} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultImagesContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
