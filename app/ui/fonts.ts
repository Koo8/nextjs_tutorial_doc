//  use next/font module to preload fonts and keep them with other static files

import { Inter, Lusitana } from 'next/font/google'


export const inter = Inter({ subsets: ['latin'] });

// font weight must be specified
export const lusitana = Lusitana
    ({
        subsets: ['latin'],
        weight: '400'
        // variable: '--font-lusitana' 
    })  