import { useTranslation } from '@pancakeswap/localization'
import { Card, CardBody, Flex, Link, Text } from '@pancakeswap/uikit'
import FoldableText from 'components/FoldableSection/FoldableText'
import { styled } from 'styled-components'

const Container = styled(Flex)`
  padding: 48px 16px;
  background: ${({ theme }) => theme.colors.gradientInverseBubblegum};
`

const Wrapper = styled(Flex)`
  width: 100%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  max-width: calc(100%) - 38px;

  ${({ theme }) => theme.mediaQueries.xl} {
    max-width: 1140px;
  }
`

const StyledCardBody = styled(CardBody)`
  div:first-child {
    margin-top: 0px;
  }
`

const StyledListText = styled(Text)`
  position: relative;
  padding-left: 12px;

  &:before {
    content: '-';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Questions = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Wrapper>
        <Text color="secondary" fontSize={['32px', '32px', '40px']} mb={['64px']} bold textAlign="center">
          {t('Still Got Questions?')}
        </Text>
        <Card style={{ width: '100%' }}>
          <StyledCardBody>
            <FoldableText title={t('Why my traded volume was not tracked?')} mt="24px">
              <StyledListText color="textSubtle">
                {t('Volume numbers take time to update and are subject to SubGraph delays. Please check back later')}
              </StyledListText>
              <StyledListText color="textSubtle">
                {t(
                  'Please ensure your trade is routed through the trading pairs eligible for trading rewards.Check out',
                )}
                <Link
                  style={{ display: 'inline-block' }}
                  external
                  href="https://docs.pancakeswap.finance/products/pancakeswap-exchange/fees-and-routes#check-the-fee-rate-and-fee-amount-that-is-currently-applied"
                >
                  <Text color="primary" ml="4px" as="span">
                    {t('this tutorial')}
                  </Text>
                </Link>
                <Text color="textSubtle" ml="4px" as="span">
                  {t('for how to view your trading routes')}
                </Text>
              </StyledListText>
              <StyledListText color="textSubtle">
                {t(
                  'If you are trading on Ethereum, please use the same wallet address eligible for the trading reward program',
                )}
              </StyledListText>
              <StyledListText color="textSubtle">
                {t('If your trading volume within a pair is too small, you may not be eligible to claim any rewards')}
              </StyledListText>
              <StyledListText color="textSubtle">
                {/* {t(
                  'Using third-party trading aggregators may result in trades being routed through other liquidity providers and not being tracked',
                )} */}
                使用第三方交易聚合器可能会导致交易路径被导向其他流动性来源，从而无法被跟踪。
              </StyledListText>
            </FoldableText>
            <FoldableText title={t('Why I traded a lot but only received a very small amount of rewards')} mt="24px">
              <StyledListText color="textSubtle">
                {/* {t(
                  'The amount of the trading reward is based on the trading fee paid in those trades.If your trades are routed through pairs with a low fee tier, for example, 0.01%, you are paying a very small fee for your trade. Therefore the number of rewards will become lower accordingly.',
                )} */}
                交易返利的金额来自于交易中支付的手续费。如果您的兑换路径途经手续费较低（例如 0.01%）的币对，那么由于支付的手续费较少，返利金额也会相应减少。
                此外，以下几个因素也可能导致返利金额较少
              </StyledListText>
              <StyledListText color="textSubtle">
              兑换路径不符合条件：如果您的兑换路径没有包含符合交易返利资格的代币对，您将无法获得返利。
              </StyledListText>
              <StyledListText color="textSubtle">
              低交易量：如果您的交易路径经过的币对交易量较低，您可能无法获得预期的返利。
              </StyledListText>
              <StyledListText color="textSubtle">
              延迟更新：交易量数字更新需要一定时间，可能会受到 SubGraph 延迟的影响，请稍后再回来查看。
              </StyledListText>
              <StyledListText color="textSubtle">
              使用第三方聚合器：使用第三方交易聚合器可能会导致交易路径被导向其他流动性来源，从而无法被跟踪，影响返利。
              </StyledListText>
              <StyledListText color="textSubtle">
              不符合资格的钱包地址：如果您在以太坊上进行交易，请确保使用符合交易返利计划资格的钱包地址，否则可能无法获得返利。
              </StyledListText>
              <br></br>
              确保您遵循上述条件，才能最大化您的交易返利收益。
            </FoldableText>
            

            <FoldableText
              title={t('My address was previously eligible. Why is it showing not eligible now?')}
              mt="24px"
            >
              <StyledListText color="textSubtle">
                {/* {t(
                  'Each campaign has its own eligibility requirements, like the unlock time of the CAKE staking position.',
                )} */}
                每场活动都有其特定的资格要求，例如 PGC 质押持仓的解锁时间。
              </StyledListText>
              <StyledListText color="textSubtle">
                {/* {t(
                  'You may need to extend your locked CAKE staking position. Please follow the instructions on the page.',
                )} */}
                您可能需要延长锁仓的 PGC 质押持仓时间。请按照页面上的说明进行操作，以确保您符合所有资格要求并能参与活动。
              </StyledListText>
            </FoldableText>
          </StyledCardBody>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Questions
