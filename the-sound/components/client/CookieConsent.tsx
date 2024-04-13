"use client"

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useEffect, useState } from "react";

export default function CookieConsent() {

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
        <>
            <h2>Your Cookie Preferences</h2>
            <p>Your current have set cookie tracking to: {cookieConsent.toUpperCase()}</p>
            <div className='flex gap-2'>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent('denied')}>Disable Tracking Cookie</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent('granted')}>Enable Tracking Cookie</button>
            </div>
        </>
    )
}