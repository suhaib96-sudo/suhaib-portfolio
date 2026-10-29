import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
// 1. Import the premium fonts
import { Inter, Playfair_Display } from 'next/font/google';

// 2. Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    // 3. Wrap your app in the new fonts so Tailwind can use them everywhere
    <main className={`${inter.variable} ${playfair.variable} font-sans text-gray-900 antialiased selection:bg-gray-900 selection:text-white`}>
      <Component {...pageProps} />
    </main>
  );
});

export default MyApp;