import React from 'react'
import Footer from 'components/footer/footer'
import Shops from 'businesses/shops/shops.js'

export default function Home() {
    return (
        <div>
            <div>Home</div>
            <Shops />
            <Footer />
        </div>
    );
  }