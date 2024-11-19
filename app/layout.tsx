import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Five Star Services</title>
      </head>
      <body>
        {children} {/* This will render the content of your page */}
      </body>
    </html>
  );
}