import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Frontend Assessment',
  description: 'A responsive web app with charts and filters.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
