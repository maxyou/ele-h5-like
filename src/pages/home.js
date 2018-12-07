import React from 'react'
import Footer from 'components/footer/footer'
import Shops from 'businesses/shops/shops.js'
import Category from 'businesses/category/category.js'

export default function Home() {
    return (
        <div>
            <Category />
            <Shops />
            <Footer />
        </div>
    );
  }