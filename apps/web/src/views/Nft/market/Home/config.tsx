import { ContextApi } from '@pancakeswap/localization'
import { LinkExternal } from '@pancakeswap/uikit'

const config = (t: ContextApi['t']) => {
  return [
    {
      // title: t('I sold an NFT, where’s my BNB?'),
      title: '我出售了一枚NFT，我的PGC呢',
      description: [
        // t(
        //   'Trades are settled in WBNB, which is a wrapped version of BNB used on BNB Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB.',
        // ),
        '交易将直接以 PGC 结算，与其他交易所不同，我们不使用 WPGC。因此，当您出售商品时，钱包收到的金额将是 PGC。',
        // t('You can instantly swap your WBNB for BNB with no trading fees on PGSWAP FINANCE.'),
        '无需额外步骤，您可以直接在 PGSwap 上使用和管理您的 PGC，享受便捷交易体验。'
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        // t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        '我们现已开放申请，欢迎 NFT 收藏品所有者提交申请，寻求上架他们的收藏品。',
        <LinkExternal href="https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications">
          {t('Please apply here')}
        </LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        // t(
        //   '100% of all platform fees taken by PGSWAP FINANCE from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns.',
        // ),
        // t(
        //   'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.',
        // ),
        'PGSwap 从销售中收取的所有平台费用将 100% 用于回购，并在每周的 PGC 焚毁活动中焚毁 PGC 代币。',
        '平台手续费：市场中的 NFT 销售额中将扣除 2% 作为平台手续费。费率可能会在未来进行调整。',
        '收藏品税费：收藏品上架后，创建者可以为自己的系列设定额外的税费。此税费不影响 PGC 的销毁。'
      ],
    },
  ]
}

export default config
