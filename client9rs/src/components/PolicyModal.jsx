import React, { useEffect } from 'react';
import { ShieldCheck, FileText, X, AlertTriangle, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

export const PolicyModal = ({ isOpen, policyType, onClose, onSwitchPolicy }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = policyType === 'privacy';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      {/* Blurred Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl z-10 border border-[#e2e8f0] flex flex-col text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Header with Navigation Tabs */}
        <div className="bg-white/95 backdrop-blur-md px-5 sm:px-7 py-4 border-b border-[#e2e8f0] flex flex-col gap-3 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isPrivacy ? 'bg-orange-50 text-[#f15a24]' : 'bg-blue-50 text-blue-600'
              }`}>
                {isPrivacy ? <ShieldCheck size={22} /> : <FileText size={22} />}
              </div>
              <div>
                <h3
                  id="policy-modal-title"
                  className="text-lg sm:text-xl font-bold text-[#0f172a] leading-tight"
                >
                  {isPrivacy ? 'Privacy Policy' : 'Refund & Cancellation Policy'}
                </h3>
                <span className="text-[12px] font-semibold text-[#64748b]">
                  Last Updated: October 2026 • Official Platform Document
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
            <button
              type="button"
              onClick={() => onSwitchPolicy && onSwitchPolicy('privacy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isPrivacy
                  ? 'bg-[#f15a24] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ShieldCheck size={14} />
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onSwitchPolicy && onSwitchPolicy('refund')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                !isPrivacy
                  ? 'bg-[#f15a24] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <FileText size={14} />
              Refund & Cancellation Policy
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto text-[#334155] text-sm leading-relaxed custom-scrollbar">
          {isPrivacy ? (
            /* ================= PRIVACY POLICY CONTENT ================= */
            <div className="space-y-6">
              {/* Introduction Callout */}
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-[#334155]">
                <p className="font-medium text-[14px]">
                  We respect your privacy and are committed to protecting the personal information you provide while using our website, landing pages, registration forms, and information services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">1</span>
                  Information We Collect
                </h4>
                <p>We may collect information such as:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {[
                    'Name',
                    'Mobile number',
                    'Email address',
                    'City or location',
                    'Information provided through registration forms',
                    'Payment-related information required to process a transaction'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13px] bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <ChevronRight size={15} className="text-[#f15a24] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-xs text-[#64748b]">
                  We collect only the information reasonably required to provide our information and awareness services.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">2</span>
                  How We Use Your Information
                </h4>
                <p>The information collected may be used to:</p>
                <ul className="space-y-1.5 mt-2">
                  {[
                    'Process registrations and payments',
                    'Provide information regarding our programs and sessions',
                    'Contact you regarding your registration',
                    'Send important updates related to the service',
                    'Improve our website and services',
                    'Respond to your questions and support requests'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[13px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f15a24] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">3</span>
                  Payment Information
                </h4>
                <p>
                  Payments may be processed through third-party payment service providers. We do not intentionally store your complete card, UPI, banking, or other sensitive payment credentials on our own servers.
                </p>
                <p className="text-xs text-[#64748b]">
                  Payment processing is subject to the terms and privacy policies of the respective payment service provider.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">4</span>
                  Sharing of Information
                </h4>
                <p className="font-semibold text-[#0f172a]">
                  We do not sell or rent your personal information.
                </p>
                <p>
                  Your information may be shared with trusted service providers where necessary to operate our website, process payments, communicate with you, or provide the requested service.
                </p>
                <p>
                  We may also disclose information where required by applicable law or legal authorities.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">5</span>
                  Cookies
                </h4>
                <p>
                  Our website may use cookies or similar technologies to improve website functionality, understand visitor activity, and improve the user experience.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">6</span>
                  Information Security
                </h4>
                <p>
                  We take reasonable technical and organizational measures to protect the information provided by users. However, no method of transmission or electronic storage can be guaranteed to be completely secure.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">7</span>
                  Third-Party Links
                </h4>
                <p>
                  Our website may contain links to third-party websites, government portals, payment providers, or other external services.
                </p>
                <p className="text-xs text-[#64748b]">
                  We are not responsible for the privacy practices, content, or security of third-party websites.
                </p>
              </div>

              {/* Section 8 - Prominent Disclaimer Box */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertTriangle size={18} className="text-amber-600 shrink-0" />
                  <span>8. Information and Awareness Disclaimer</span>
                </div>
                <p className="text-[13px] text-amber-950 leading-relaxed font-medium">
                  The information provided through our programs, sessions, landing pages, or other services is intended <strong className="text-black">for general information and awareness purposes only</strong>.
                </p>
                <p className="text-[13px] text-amber-900">
                  We do not guarantee that participation in our program will result in:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-amber-950 font-medium">
                  {[
                    'Government contracts',
                    'Tender awards',
                    'Employment',
                    'Business opportunities',
                    'Government approvals',
                    'Registration approval',
                    'Financial benefits',
                    'Profits or income',
                    'Successful bids'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-900 pt-1">
                  Users are responsible for independently verifying official information with the relevant government department or official portal before taking any action.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">9</span>
                  Changes to This Policy
                </h4>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated date.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">10</span>
                  Contact Us
                </h4>
                <p>
                  If you have any questions regarding this Privacy Policy, please contact us through the contact details provided on our website.
                </p>
              </div>
            </div>
          ) : (
            /* ================= REFUND & CANCELLATION POLICY CONTENT ================= */
            <div className="space-y-6">
              {/* Section 1 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">1</span>
                  Nature of Our Service
                </h4>
                <p>
                  Our programs, sessions, and information services are provided <strong className="text-[#0f172a]">for information and awareness purposes only</strong>.
                </p>
                <p>
                  We provide general information, guidance, educational content, and awareness regarding relevant processes, opportunities, portals, tenders, schemes, and related topics.
                </p>
                <div className="p-3 bg-slate-50 border-l-4 border-[#f15a24] rounded-r-lg text-[13px] font-semibold text-[#0f172a]">
                  We do not provide any assurance, guarantee, or promise of any specific result or outcome.
                </div>
              </div>

              {/* Section 2 - No Guarantee or Assurance */}
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">2</span>
                  No Guarantee or Assurance
                </h4>
                <p>Participation in our program does not guarantee:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {[
                    'Government tender or contract',
                    'Work order',
                    'Employment',
                    'Government scheme approval',
                    'Contractor registration approval',
                    'GeM registration or order',
                    'Tender qualification or selection',
                    'Business opportunities',
                    'Income or profit',
                    'Any financial benefit'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[13px] bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#64748b] pt-1">
                  The final decision regarding any government tender, scheme, registration, contract, employment, or opportunity is made solely by the relevant government department, authority, organization, or official platform.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">3</span>
                  Awareness Program
                </h4>
                <p>
                  Our programs are conducted <strong className="text-[#0f172a]">for awareness and informational purposes only</strong>.
                </p>
                <p>
                  Payment for a program or session is a payment for the information, awareness session, educational material, or related service provided. It should not be considered a payment for obtaining a government contract, tender, job, approval, registration, or guaranteed opportunity.
                </p>
              </div>

              {/* Section 4 - Refund Policy Highlight Box */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/70 space-y-2">
                <h4 className="text-base font-bold text-[#c2410c] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-orange-200/80 text-[#c2410c] text-xs font-bold flex items-center justify-center">4</span>
                  Refund Policy
                </h4>
                <p className="text-[13px] leading-relaxed">
                  Because our service involves providing information, awareness sessions, digital content, registration assistance, or access to scheduled sessions, <strong className="text-[#0f172a]">payments are generally non-refundable once the service, session, digital information, or access has been provided or initiated.</strong>
                </p>
                <p className="text-[13px] leading-relaxed">
                  If a session is cancelled by us and no alternative session or service is provided, the customer may be eligible for a refund for that specific service.
                </p>
                <p className="text-xs text-[#64748b]">
                  Any refund request will be reviewed based on the circumstances and the nature of the service purchased.
                </p>
              </div>

              {/* Section 5 - Incorrect Expectations */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">5</span>
                  Incorrect Expectations
                </h4>
                <p>A refund will not be provided solely because:</p>
                <ul className="space-y-1.5 mt-2">
                  {[
                    'The participant did not receive a tender or contract.',
                    'The participant was not selected for a government opportunity.',
                    'The participant did not receive employment.',
                    'The participant did not receive a business order.',
                    'The participant did not obtain a government approval.',
                    'The participant did not achieve the expected financial result.',
                    'The participant expected a guaranteed result that was not promised by us.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13px]">
                      <span className="text-slate-400 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">6</span>
                  Government Information
                </h4>
                <p>
                  Government rules, tender requirements, eligibility criteria, deadlines, fees, and procedures may change from time to time.
                </p>
                <p>
                  Participants are responsible for verifying the latest information from the relevant official government department or portal.
                </p>
                <p className="text-xs text-[#64748b]">
                  We do not represent ourselves as a government department or government authority unless explicitly stated otherwise.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <h4 className="text-base font-bold text-[#0f172a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-[#0f172a] text-xs font-bold flex items-center justify-center">7</span>
                  Refund Request
                </h4>
                <p>
                  For any eligible refund request, users should contact us using the contact details provided on the website and provide:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {[
                    'Name',
                    'Registered mobile number/email',
                    'Transaction details',
                    'Reason for the refund request'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[13px] bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium text-[#0f172a]">
                      <CheckCircle2 size={15} className="text-[#f15a24] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#64748b] pt-1">
                  Approved refunds, where applicable, will be processed through the original payment method or another suitable method.
                </p>
              </div>

              {/* Section 8 - Acceptance Box */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Lock size={18} className="text-[#f15a24] shrink-0" />
                  <span>8. Acceptance</span>
                </div>
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  By purchasing or registering for our program, you acknowledge that:
                </p>
                <p className="text-[13px] text-white font-semibold bg-white/10 p-3 rounded-xl border border-white/10">
                  This is an information and awareness program only. No specific outcome, government work, tender, contract, employment, approval, registration, order, income, or financial benefit is guaranteed.
                </p>
                <p className="text-xs text-slate-400">
                  By completing the payment or registration, you confirm that you have read and understood this Refund & Cancellation Policy.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer Action Bar */}
        <div className="bg-slate-50 px-5 sm:px-7 py-3.5 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#64748b] text-center sm:text-left">
            Need help? Contact support on WhatsApp: <a href="https://wa.me/919975917001" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#f15a24] hover:underline">+91 99759 17001</a>
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#f15a24] hover:bg-[#d94814] text-white text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
