import type { Metadata } from 'next'
import localFont from 'next/font/local'
import styles from './layout.module.scss'
import './reset.scss'
import clsx from 'clsx'
import Header from '@/libs/common/components/Header'

const Pretendard = localFont({
  src: [{ path: './PretendardVariable.woff2' }],
})

export const metadata: Metadata = {
  title: 'BFF 구성',
  description: 'BFF 구성을 간단하게 해보자',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={clsx([Pretendard.className, styles.layout])}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
