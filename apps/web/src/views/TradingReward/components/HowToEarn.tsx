import { useTranslation } from '@pancakeswap/localization'
import { Box, Card, Flex, LinkExternal, Text } from '@pancakeswap/uikit'
import Trans from 'components/Trans'
import Image from 'next/image'
import { styled } from 'styled-components'

const stepList = [
  {
    title: <Trans>抓住最佳交易机会</Trans>,
    subTitle: (
      <Trans>使用兑换页面上的热门代币列表，立即查看哪些币对有资格获得交易返利，享受额外收益</Trans>
    ),
    imgUrl: '/images/trading-reward/step1-1.png',
  },
  {
    title: <Trans>Start trading</Trans>,
    subTitle: (
      <Trans>
       开始交易特定符合条件的比对，赚取丰厚的PGC奖励！您的交易量越大，从当前返利池仲获得的返利就越多
      </Trans>
    ),
    imgUrl: '/images/trading-reward/step2-1.png',
  },
  {
    title: <Trans>时刻掌握动态收益</Trans>,
    subTitle: <Trans>返回此页面，试试查看您的交易量和奖励情况，不错过任何收益增长的机会</Trans>,
    imgUrl: '/images/trading-reward/step3-1.png',
  },
  {
    title: <Trans>Claim your rewards</Trans>,
    subTitle: (
      <Trans>每期活动结束后，请返回此页面并领取之前活动的返利。</Trans>
    ),
    imgUrl: '/images/trading-reward/step4-1.png',
  },
]

const StyledCard = styled(Card)`
  width: 100%;
  background: transparent;
  > div {
    background: transparent;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background: ${({ theme }) => theme.colors.cardBorder};
    > div {
      background: ${({ theme }) => theme.colors.backgroundAlt};
    }
  }
`

const HowToEarn = () => {
  const { t } = useTranslation()

  return (
    <Box id="howToEarn" padding="0 16px" m={['72px 0', '72px 0', '72px 0', '143px 0 108px 0']}>
      <Box margin={['auto']} width={['100%', '100%', '100%', '100%', '100%', '100%', '1140px']}>
        <StyledCard>
          <Flex flexDirection="column" padding={['50px 0 0 0', '50px 0 0 0', '50px 0 0 0', '50px 0']}>
            <Text bold mb={['24px']} color="secondary" textAlign="center" fontSize={['40px']}>
              {t('How to Earn')}
            </Text>
            <Flex flexWrap="wrap" flexDirection={['column', 'column', 'column', 'row']}>
              {stepList.map((step, index) => (
                <Flex
                  key={step.imgUrl}
                  width={['100%', '100%', '100%', '50%', '25%']}
                  flexDirection="column"
                  padding={['42px 22px', '42px 22px', '42px 22px', '0 22px']}
                >
                  <Flex
                    flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'column-reverse', 'column']}
                  >
                    <Text
                      fontSize="12px"
                      bold
                      textAlign={['left', 'left', 'left', 'left', 'right']}
                      m={['0 0 8px 0', '0 0 8px 0', '0 0 8px 0', '0 0 8px 0', '0 0 32px 0']}
                    >
                      {`Step ${index + 1}`}
                    </Text>
                    <Box margin="0 auto">
                      <Image src={step.imgUrl} width={180} height={180} alt={`step${index + 1}`} />
                    </Box>
                  </Flex>
                  <Text lineHeight="110%" bold fontSize={['24px']} color="secondary" mb={['16px']}>
                    {step.title}
                  </Text>
                  <Text color="textSubtle">{step.subTitle}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </StyledCard>
      </Box>
      <LinkExternal
        external
        href="https://docs.pancakeswap.finance/products/trading-reward/how-to-participate"
        margin={['auto', 'auto', 'auto', '42px auto 0 auto']}
      >
        {t('Learn More')}
      </LinkExternal>
    </Box>
  )
}

export default HowToEarn
