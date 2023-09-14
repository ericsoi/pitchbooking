'use client'

import Image from 'next/image'
import Featured from '@/components/Featured'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <>
      <Featured />
      <ProductList />
    </>
  )
}
