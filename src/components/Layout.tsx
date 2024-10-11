import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import { ConditionalRoute } from '@/shared/ConditionalRoute';


type LayoutProps = {
  children: ReactNode;
};


const Layout = ({ children } : LayoutProps) => {
  return (
    <div>
        <Head>
            <title>Risun</title>
        </Head>
        <ConditionalRoute>
            <Navbar/>
        </ConditionalRoute>
        <main>{children}</main>
        <ConditionalRoute>
            <Footer/>
        </ConditionalRoute>
    </div>
  );
};

export default Layout;
