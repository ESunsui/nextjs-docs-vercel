import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
const config: DocsThemeConfig = {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:title" content={frontMatter.title || 'MakiFBT'} />
    </>
  },
  logo: <span>
  <svg
    height="28"
    viewBox="0 0 300 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m61.40366,33.44924c0,0 0,13.01708 -0.1578,13.01356c0.1578,0.00352 -6.68078,5.97669 -6.46983,6.05282c0.21095,0.07613 14.75626,14.15029 14.67546,14.0728c0.0808,0.07748 -0.1578,-54.6269 0,-54.77801c0,0.15132 -28.56235,27.54075 -28.71971,27.38901c0.07879,0.07576 -6.70699,-6.43157 -6.78543,-6.50678c0.07844,0.07522 -2.41389,2.46608 -2.52481,2.26981c0.04729,0.10597 -0.3156,41.76445 0,41.76445c0,0.0011 -29.35134,0 -29.50872,0c0.15738,0 0.1578,-74.601 0,-74.75232c0,0.15117 49.7082,0.15132 49.7072,0c0.00225,0 -9.46147,9.43831 -9.46034,9.21948c0.00113,-0.21883 -30.42804,-0.03535 -30.5883,0c-0.16026,0.03535 -0.07837,55.99439 0,56.16942c0.07837,0.17503 9.56373,0.14948 9.74707,-0.14948c0.18334,-0.29895 -0.46955,-36.04889 -0.31175,-36.18589c0,0.14038 12.18543,-11.6616 12.15065,-11.803c-0.03478,-0.1414 7.04595,6.7566 6.94323,6.6581c0.10059,0.09646 25.17515,-23.99 25.0903,-24.21128c0.00794,0.14371 14.04797,-0.03863 14.04426,0c-0.00371,0.03863 0,74.90502 0,74.90364c0,0.00138 -13.25888,0 -13.41305,0c0.15404,0 -24.9325,-23.75732 -24.9325,-23.90864c0.07878,0.07554 20.51408,-19.2177 20.51408,-19.2177z" 
      fill="currentColor"/>
    <g transform="translate(0 186) scale(0.1 -0.1)" fill="currentColor">
      <path d="m1153.71225,1741.80422c-7.97921,-7.92743 -9.1191,-40.2034 -9.1191,-274.06259c0,-301.24235 -3.98961,-277.46006 48.4452,-277.46006c51.86487,0 48.4452,-14.72237 48.4452,207.81192l0,195.92078l41.60588,-39.63715c54.14464,-52.66079 71.24295,-60.58822 120.82804,-60.58822c49.58509,0 66.11345,7.92743 118.54826,57.75699l38.18622,36.80593l0,-183.46339c0,-135.89881 2.27977,-186.86086 7.40927,-197.61951c6.26938,-12.45739 11.39887,-14.15613 42.17582,-15.85486c56.99436,-2.83123 53.00475,-23.78229 53.00475,278.59255c0,301.8086 3.98961,280.85753 -54.14464,280.85753l-32.48678,0l-78.08227,-79.2743c-65.54351,-66.81691 -80.36204,-79.2743 -94.61063,-79.2743c-13.67865,0 -30.20701,13.58988 -96.32046,79.2743l-79.7921,79.2743l-32.48678,0c-22.2278,0 -35.90645,-2.83123 -41.60588,-9.05992z"/>
      <path d="m2236.60505,1741.80422c-5.12949,-4.52996 -10.25898,-14.15613 -11.96882,-20.95107c-1.70983,-6.79494 -2.27977,-125.14015 -1.70983,-263.30394c1.70983,-287.08623 -1.70983,-267.26765 53.5747,-267.26765c47.30532,0 47.87526,1.13249 47.87526,119.4777c0,61.72071 2.27977,106.45406 6.26938,113.249c8.54915,16.42111 27.92724,22.08356 45.02554,13.02364c7.97921,-3.96372 67.82329,-60.58822 133.93674,-126.27264c134.50668,-134.20007 136.21651,-135.33256 171.55302,-100.22537c35.90645,35.67344 40.46599,30.01099 -168.7033,238.38916l-188.08138,187.4271l0,48.13083c0,40.2034 -1.70983,50.39581 -10.25898,57.75699c-14.24859,12.45739 -65.54351,13.02364 -77.51233,0.56625z"/>
      <path d="m2553.49368,1675.55355c-45.02554,-45.2996 -75.23255,-79.84055 -75.23255,-86.63549c0.56994,-12.45739 25.64746,-43.03462 43.88566,-52.66079c19.94803,-10.19241 34.19661,-0.56625 108.85922,74.1781c79.22216,80.40679 82.64182,88.90047 50.15503,121.17644c-33.62667,33.40846 -41.60588,30.01099 -127.66736,-56.05826z"/>
      <path d="m2792.30003,1641.0126c-18.80814,-19.81858 -17.66825,-52.66079 2.27977,-69.64814c47.30532,-40.76964 111.139,22.6498 68.39323,68.51565c-18.80814,19.81858 -52.43481,20.38482 -70.673,1.13249z"/>
      <path d="m1760.13222,1613.83284c-15.95842,-16.98735 -15.95842,-62.28695 0,-78.14181c10.82893,-10.75866 18.80814,-11.3249 127.09742,-11.3249c105.43956,0 116.83843,-1.13249 125.38759,-10.19241c13.67865,-14.72237 11.96882,-38.50466 -2.84972,-48.69707c-10.25898,-7.36119 -29.63707,-9.05992 -92.33086,-9.05992c-95.75052,0 -117.40838,-5.66245 -152.74488,-39.63715c-68.39323,-65.68442 -49.58509,-176.66845 36.47639,-215.17311c22.2278,-10.19241 38.75616,-11.3249 163.00386,-11.3249c84.92159,0 143.05584,2.26498 149.89516,5.66245c10.25898,5.66245 10.82893,13.58988 10.82893,167.60853c0,160.24734 0,161.37983 -14.24859,189.12584c-7.97921,15.28862 -22.79774,34.54095 -33.62667,42.46838c-35.3365,26.61352 -62.69379,31.14348 -189.22127,31.14348c-111.70894,0 -116.26849,-0.56625 -127.66736,-12.45739l0,-0.00002zm267.87348,-293.31492l0,-33.9747l-82.07188,0c-90.05109,0 -108.28928,3.96372 -118.54826,24.91478c-5.12949,11.3249 -4.55955,16.98735 3.41966,28.8785l9.1191,14.15613l94.04069,0l94.04069,0l0,-33.9747l0,-0.00001z"/>
      <path d="m2789.45032,1492.65641c-14.24859,-14.15613 -15.38848,-27.17976 -13.67865,-160.24734c1.70983,-144.95873 1.13989,-142.1275 53.00475,-142.1275c49.01515,0 48.4452,-1.13249 48.4452,154.58489c0,126.83889 -0.56994,134.76632 -11.39887,145.52497c-14.24859,14.15613 -63.26374,15.85486 -76.37244,2.26498l0.00001,0z"/>
    </g>
  </svg>
  <style jsx>{`
    span {
      padding: 0.5rem 0.5rem 0.5rem 0;
      mask-image: linear-gradient(
        60deg,
        black 25%,
        rgba(0, 0, 0, 0.2) 50%,
        black 75%
      );
      mask-size: 400%;
      mask-position: 0%;
    }
    span:hover {
      mask-position: 100%;
      transition: mask-position 1s ease, -webkit-mask-position 1s ease;
    }
  `}</style>
</span>,

  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: 'https://discord.gg/GbRGDm5R',
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Deeppuma.co.ltd        Since 2021',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – MakiFBT'
    }
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: '',
    labels: 'feedback'
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ]
}

export default config
