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
  logo: <span>MakiFBT</span>,
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
}

export default config
