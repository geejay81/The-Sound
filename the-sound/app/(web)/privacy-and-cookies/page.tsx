import CookieConsent from "@/components/client/CookieConsent";
import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy and Cookies',
    description: 'Adjust your cookie settings.'
}

export default function PrivacyAndCookiesPage() {
    return (
        <>
            <Hero 
                heading={metadata.title!.toString()}
                description={metadata.description!.toString()} />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3
                flex flex-col md:flex-row space-x-3">
                <div className="prose md:prose-lg">

                <p>At The Sound, we value your privacy and are committed to providing transparency about the use of cookies and tracking technologies on our website. This Privacy and Cookies policy outlines how we collect, use, and protect your personal information when you visit our site.</p>
                <h2>What are Cookies?</h2>
                <p>Cookies are small text files that are stored on your device when you visit a website. They serve various purposes, including improving your browsing experience, remembering your preferences, and analyzing website traffic.</p>
                <h2>How We Use Cookies</h2>
                <p>We use cookies for several purposes, including but not limited to:</p>
                <ul>
                    <li>Analytical Purposes: We use cookies to gather information about how visitors interact with our website. This helps us analyze traffic patterns, identify popular content, and improve our website&apos;s performance.</li>
                    <li>Personalization: Cookies allow us to remember your preferences and provide you with a personalized experience tailored to your interests.</li>
                    <li>Security: We may use cookies to enhance the security of our website and protect against unauthorized access.</li>
                </ul>
                <h2>Google Analytics and Tracking Cookies</h2>
                <p>We utilize Google Analytics, a web analytics service provided by Google LLC, to gather information about website traffic and usage patterns. Google Analytics uses cookies to collect data such as your IP address, browser type, and operating system. However, we respect your right to privacy and offer you the option to opt out of tracking cookies used by Google Analytics.</p>
                <h2>Opting Out of Tracking Cookies</h2>
                <p>You have the choice to opt out of tracking cookies used in Google Analytics while still accessing our website. By disabling tracking cookies through our cookie consent settings, Google Analytics will continue to run in a limited mode, ensuring your browsing data is not used for tracking purposes.</p>
                <CookieConsent />
                    
                </div>   
            </main>
            <Footer />
        </>
    )
}