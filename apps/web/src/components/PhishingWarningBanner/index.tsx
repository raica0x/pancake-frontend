import { useMemo } from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, CloseIcon, IconButton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { usePhishingBanner } from '@pancakeswap/utils/user'

const Container = styled(Flex)`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffb237 100%),
  linear-gradient(180deg, #ffffff 0%, #ffb237 100%);
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px;
    background: linear-gradient(180deg, #ffffff 0%, #ffb237 100%);
  }
`

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SpeechBubble = styled.div`
  background: rgba(39, 38, 44, 0.4);
  border-radius: 16px;
  padding: 8px;
  width: 60%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & ${Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`

const domain = 'https://marswap.vercel.app/'

const PhishingWarningBanner: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const [, hideBanner] = usePhishingBanner()
  const { isMobile, isMd } = useMatchBreakpoints()
  const warningTextAsParts = useMemo(() => {
    const warningText = t("always make sure you are visiting %domain% - check URL always!", { domain })
    return warningText.split(/(https:\/\/marswap.vercel.app)/g)
  }, [t])
  const warningTextComponent = (
    <>
      <Text as="span" color="warning" small bold textTransform="uppercase">
        {t('!!domain check!!: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          bold={text === domain}
          color={text === domain ? '#FFFFFF' : '#BDC2C4'}
        >
          {text}
        </Text>
      ))}
    </>
  )
  return (
    <Container className="warning-banner">
      {isMobile || isMd ? (
        <>
          <Box>{warningTextComponent}</Box>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color="#FFFFFF" />
          </IconButton>
        </>
      ) : (
        <>
          <InnerContainer>
            <img
              src="https://i.ibb.co/jyK3BH1/logo.png"
              alt="phishing-warning"
              width="92px"
              onError={(e) => {
                const fallbackSrc = 'https://i.ibb.co/jyK3BH1/logo.png'
                if (!e.currentTarget.src.endsWith(fallbackSrc)) {
                  // eslint-disable-next-line no-param-reassign
                  e.currentTarget.src = fallbackSrc
                }
              }}
            />
            <SpeechBubble>{warningTextComponent}</SpeechBubble>
          </InnerContainer>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color="#FFFFFF" />
          </IconButton>
        </>
      )}
    </Container>
  )
}

export default PhishingWarningBanner
