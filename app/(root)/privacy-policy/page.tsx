"use client";
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';

const privacyPolicy = () => {

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5 text-white-1'>
        <div>
            <h1 className='text-6xl mb-7'>Privacy Policy for YouPoder</h1>
            <p className='mb-2'><strong className='font-bold'>Effective Date:</strong> 07/05/24</p>

            <p className='mb-4'>Welcome to YouPoder! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website, YouPoder.com, and use our services.</p>

            <h2 className='text-3xl mb-4 mt-4'>1. Information We Collect</h2>

            <h3 className='text-xl mb-2'>Personal Information</h3>
            <p>When you create an account or use our services, we may collect the following personal information:</p>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Payment information (processed via Stripe)</li>
                <li>Login credentials (via Google or email)</li>
            </ul>

            <h3 className='text-xl mb-2'>Non-Personal Information</h3>
            <p>We may collect non-personal information about your visit to our website, including:</p>
            <ul>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
            </ul>

            <h2 className='text-3xl mb-4 mt-4'>2. How We Use Your Information</h2>

            <h3 className='text-2xl mb-2 mt-4'>Personal Information</h3>
            <p>We use your personal information to:</p>
            <ul>
                <li>Provide and improve our services</li>
                <li>Process payments</li>
                <li>Authenticate users</li>
                <li>Communicate with you</li>
                <li>Send you updates and promotional materials (if you opt-in)</li>
            </ul>

            <h3 className='text-2xl mb-2 mt-4'>Non-Personal Information</h3>
            <p>We use non-personal information to:</p>
            <ul>
                <li>Analyze website usage and improve our services</li>
                <li>Monitor and prevent fraudulent activities</li>
                <li>Ensure the security of our website</li>
            </ul>

            <h2 className='text-3xl mb-4 mt-4'>3. How We Share Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul>
                <li><strong>Service Providers:</strong> Third-party companies that provide services on our behalf, such as payment processing (Stripe) and authentication (Google).</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets.</li>
            </ul>

            <h2 className='text-3xl mb-4 mt-4'>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className='text-3xl mb-4 mt-4'>5. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
                <li><strong>Access:</strong> You can request access to your personal information.</li>
                <li><strong>Correction:</strong> You can request corrections to your personal information.</li>
                <li><strong>Deletion:</strong> You can request the deletion of your personal information.</li>
                <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional emails from us.</li>
            </ul>
            <p>To exercise these rights, please contact us at [insert contact email].</p>

            <h2 className='text-3xl mb-4 mt-4'>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.</p>

            <h2 className='text-3xl mb-4 mt-4'>7. Children&#39;s Privacy</h2>
            <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>

            <h2 className='text-3xl mb-4 mt-4'>8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the effective date. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.</p>

            <h2 className='text-3xl mb-4 mt-4'>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p>YouPoder<br />
                Email: george@outoftheboxdev.com<br />
            </p>

            <p>By using our website and services, you consent to the terms of this Privacy Policy.</p>

            <p>Thank you for choosing YouPoder!</p>
        </div>
      </section>
    </div>
  )
}

export default privacyPolicy