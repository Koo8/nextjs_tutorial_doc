// import global style
import '@/app/ui/global.css';
// import fonts
import  { inter } from '@/app/ui/fonts'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      {/* antialiased from tailwind smooth out the font */}
      <body className={`${inter.className} antialiased`}>
        {/* <div>This is from layout but not in page</div> */}
        {children}</body>
    </html>
  );
}
