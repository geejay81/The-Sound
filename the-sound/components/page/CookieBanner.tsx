'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState('notSet');

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", 'notSet')

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent === 'granted' ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent);

    }, [cookieConsent]);
    
    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-slate-800 rounded-lg shadow
                         ${cookieConsent !== "notSet" ? "hidden" : "flex"}`}>

            <div className='text-center text-white'>
                <p>This site uses cookies.</p>
            </div>
            
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md' onClick={() => setCookieConsent('denied')}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent('granted')}>Allow Cookies</button>
            </div>   
        </div>
    )}