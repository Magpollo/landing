import React from 'react';
import Footer from './Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const LetsBuildLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Magpollo</title>
        <meta
          name="description"
          content="E-Strategy, Design & Engineering"
        />
        <meta
          name="keywords"
          content="Web Design, Web Development, Blockchain, SEO, API Integration, Social Media Marketing, Branding, E-commerce, CMS, Software Development"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <nav className="w-full bg-white text-lg flex flex-row justify-center items-center py-10">
        <Link href="/">
          <Image
            src="/logo-light.svg"
            alt="logo"
            width={150}
            height={50}
            className="cursor-pointer scale-125"
          />
        </Link>
      </nav>
      <main>{children}</main>
      <div className="bg-red py-20 w-full h-fit flex lg:flex-row items-center lg:justify-around">
        <div className="font-sans text-white">
          <h1 className="text-2xl font-bold mb-3">
            Don&apos;t want to fill a form?
          </h1>
          <p className="text-2xl mb-3">Get in touch</p>
          <a
            href="mailto:salesteam@magpollo.com"
            className="hover:underline transition-all duration-300 ease-in-out"
          >
            salesteam@magpollo.com
          </a>
          <p className="mt-1">
            Call{' '}
            <a
              href="tel:+14705492477"
              className="hover:underline transition-all duration-300 ease-in-out"
            >
              +1 (470) 549-2477
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LetsBuildLayout;