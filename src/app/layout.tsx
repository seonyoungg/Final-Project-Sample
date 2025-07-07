import BasicLayout from '@/app/components/basic_layout';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  );
}
