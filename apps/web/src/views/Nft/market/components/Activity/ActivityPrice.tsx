import { Flex, Skeleton, Text } from '@pancakeswap/uikit';
import BigNumber from 'bignumber.js';

const ActivityPrice = ({ bnbBusdPrice, price }: { bnbBusdPrice: BigNumber; price: number }) => {
  const priceInUsd = bnbBusdPrice.multipliedBy(price).toNumber()

  return (
    <Flex flexDirection="column" alignItems="flex-end">
      {price ? (
        <>
          <Flex justifySelf="flex-start" alignItems="center">
            {/* <BinanceIcon width="12px" height="12px" mr="4px" /> */}
            <img src='https://www.pgchain.org/img/pglogo@60.png' style={{width: '12px', marginRight:'4px'}} alt=''></img>
            <Text maxWidth="80px" bold>
              {price.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 5,
              })}
            </Text>
          </Flex>
          {priceInUsd ? (
            <Text fontSize="12px" color="textSubtle">
              {`(~$${priceInUsd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})`}
            </Text>
          ) : (
            <Skeleton height="18px" width="42px" />
          )}
        </>
      ) : (
        '-'
      )}
    </Flex>
  )
}

export default ActivityPrice
