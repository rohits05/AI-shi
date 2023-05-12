// import React from 'react'
import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// Our own meta data!
export const metadata = {
    title: 'AI-shi',
    description: 'Unleash the power of GPT-3 to generate prompts for you!',
}
// Lets you generate text using the powerful OpenAI GPT-3 engine right in your browser without writing any code.


const RootLayout = ({children}) => {
    return (
        <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
              <div className='gradient' />
            </div>
  
            <main className='app'>
              <Nav />
              {children}
            </main>
          </Provider>
        </body>
      </html>
    )
}

export default RootLayout