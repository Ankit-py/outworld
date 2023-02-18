import React, { useContext } from 'react';
import Link from 'next/link';

const categories = [{name: 'Coding', slug: 'coding'},{name: 'Space', slug: 'space'}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-black py-8'>
            <div className='md: float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-black'>
                        OutWorld
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header;