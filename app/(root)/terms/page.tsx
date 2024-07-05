"use client";
import PodcastCard from '@/components/PodcastCard';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';

const TermsOfService = () => {
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5 text-white-1'>
        <div>
          <h1 className='text-6xl mb-7'>Terms of Service for YouPoder</h1>
          <p className='mb-2'><strong className='font-bold'>Effective Date:</strong> 07/05/24</p>

          <p className='mb-4'>Welcome to YouPoder! By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.</p>

          <h2 className='text-3xl mb-4 mt-4'>1. Acceptance of Terms</h2>
          <p>By using YouPoder, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.</p>

          <h2 className='text-3xl mb-4 mt-4'>2. Description of Service</h2>
          <p>YouPoder allows users to create podcasts using AI technology by entering prompts. We use OpenAI for podcast generation, Google for user authentication, and Stripe for payment processing.</p>

          <h2 className='text-3xl mb-4 mt-4'>3. User Responsibilities</h2>
          <p>As a user of YouPoder, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when creating an account.</li>
            <li>Maintain the confidentiality of your account login information.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>Use our services in compliance with all applicable laws and regulations.</li>
          </ul>

          <h2 className='text-3xl mb-4 mt-4'>4. Payment and Subscription</h2>
          <p>To access certain features of YouPoder, you may be required to pay subscription fees. All payments are processed through Stripe. You agree to pay all applicable fees and charges.</p>

          <h2 className='text-3xl mb-4 mt-4'>5. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any unlawful or fraudulent purposes.</li>
            <li>Interfere with or disrupt the integrity or performance of our services.</li>
            <li>Attempt to gain unauthorized access to our systems or networks.</li>
            <li>Upload or transmit any harmful or malicious content.</li>
          </ul>

          <h2 className='text-3xl mb-4 mt-4'>6. Intellectual Property</h2>
          <p>All content and materials on YouPoder, including text, graphics, logos, and software, are the property of YouPoder or our licensors and are protected by intellectual property laws. You may not use, reproduce, or distribute any content without our permission.</p>

          <h2 className='text-3xl mb-4 mt-4'>7. Termination</h2>
          <p>We reserve the right to terminate or suspend your account at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of YouPoder.</p>

          <h2 className='text-3xl mb-4 mt-4'>8. Disclaimer of Warranties</h2>
          <p>YouPoder is provided &#34;as is&#34; and &#34;as available&#34; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted or error-free.</p>

          <h2 className='text-3xl mb-4 mt-4'>9. Limitation of Liability</h2>
          <p>In no event shall YouPoder be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>

          <h2 className='text-3xl mb-4 mt-4'>10. Governing Law</h2>
          <p>These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which YouPoder is based, without regard to its conflict of law principles.</p>

          <h2 className='text-3xl mb-4 mt-4'>11. Changes to Terms</h2>
          <p>We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on our website and updating the effective date. Your continued use of our services after any changes constitutes your acceptance of the updated Terms of Service.</p>

          <h2 className='text-3xl mb-4 mt-4'>12. Contact Us</h2>
          <p>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
          <p>YouPoder<br />
            Email: george@outoftheboxdev.com<br />
          </p>

          <p>By using our website and services, you consent to these Terms of Service.</p>

          <p>Thank you for choosing YouPoder!</p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
