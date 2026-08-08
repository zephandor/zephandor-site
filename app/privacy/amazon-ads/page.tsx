import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const title = "OpenMariana Amazon Ads Privacy Notice | Zephandor";
const description =
  "Privacy Notice for the private OpenMariana Amazon Ads integration used for authorized internal Amazon Advertising analytics, reporting, monitoring, and optimization.";
const url = `${siteConfig.domain}/privacy/amazon-ads`;
const lastUpdated = "August 8, 2026";

const sections = [
  {
    title: "Overview",
    body: [
      "OpenMariana Amazon Ads is a private internal software integration used to manage, analyze, monitor, and optimize the organization's own Amazon Advertising operations.",
      "The integration communicates with Amazon Ads through authorized Amazon Ads API access and Login with Amazon authorization. Its purposes include advertising analytics, reporting, campaign monitoring, keyword analysis, search-term analysis, bid optimization, budget analysis, performance evaluation, and internal business decision support."
    ]
  },
  {
    title: "Information We Access",
    body: [
      "When authorized, and only where supported by the permissions granted through the Amazon Ads API, the integration may access Amazon Advertising information such as advertiser profile information, advertising profile identifiers, marketplace and account information, campaigns, campaign status, campaign settings, ad groups, advertisements, advertised products, keywords, keyword match types, targeting expressions, product targets, bids, placement settings, campaign budgets, and budget usage.",
      "The integration may also access advertising analytics made available through the authorized Amazon Ads API, including impressions, clicks, advertising spend, CPC, CTR, attributed orders, attributed sales, conversion metrics, ACOS, ROAS, campaign performance reports, keyword performance reports, search-term performance data, targeting performance data, placement performance data, and related advertising analytics.",
      "This integration is not intended to access customer names, addresses, payment details, or buyer personal information unless a future authorized Amazon API scope explicitly provides such information and this notice is updated accordingly."
    ]
  },
  {
    title: "How We Use Information",
    body: [
      "Amazon Advertising data is used for internal purposes such as advertising performance analysis, campaign monitoring, campaign optimization, keyword performance analysis, search-term analysis, bid recommendations, bid optimization, budget allocation analysis, advertising cost analysis, profitability analysis, ACOS and ROAS analysis, reporting, historical trend analysis, anomaly detection, internal business intelligence, and operational decision support.",
      "Where internally correlated with authorized business data, advertising information may support inventory-aware advertising decisions. Any AI-assisted analysis is used for internal business decision support and is not used to train publicly available AI models."
    ]
  },
  {
    title: "Amazon Authorization",
    body: [
      "Access is obtained only after authorization using Amazon Login with Amazon and the Amazon Ads API authorization process.",
      "Access is limited by the permissions and scopes granted by Amazon and by the authorizing Amazon Advertising account. The integration cannot legitimately access Amazon Advertising information beyond the authorization granted to it."
    ]
  },
  {
    title: "Internal Use",
    body: [
      "The integration is currently intended for the organization's own Amazon advertising operations.",
      "It is not currently offered as a public customer-facing advertising management service. Amazon Advertising data obtained through this authorization is not sold as a commercial dataset."
    ]
  },
  {
    title: "Data Sharing",
    body: [
      "Amazon Advertising data is not sold and is not intentionally shared with unrelated third parties.",
      "Data may be processed by infrastructure or technical service providers only where required to operate, secure, host, monitor, back up, or maintain the integration."
    ]
  },
  {
    title: "Data Storage and Security",
    body: [
      "Reasonable technical and organizational safeguards are used to protect information handled by the integration. Access is restricted to authorized systems and operators, and HTTPS/TLS is used for data in transit where applicable.",
      "Application access follows least-privilege principles where technically applicable. Logs should avoid unnecessarily exposing secrets, authorization tokens, or other sensitive credentials."
    ]
  },
  {
    title: "Credential and Token Security",
    body: [
      "Sensitive authentication materials, including Amazon Login with Amazon client secrets, access tokens, refresh tokens, and API credentials, are treated as confidential credentials.",
      "These credentials must not be published on this Privacy Notice page, embedded into public frontend JavaScript, committed into public source repositories, or otherwise exposed through publicly served website content. Secrets are handled separately from public website content."
    ]
  },
  {
    title: "Data Retention",
    body: [
      "Amazon Advertising information is retained only for as long as reasonably necessary for internal analytics, operational reporting, security, troubleshooting, legitimate business purposes, and applicable legal requirements.",
      "Data that is no longer required may be deleted, anonymized, or aggregated where appropriate."
    ]
  },
  {
    title: "Revoking Access",
    body: [
      "Amazon Advertising API authorization can be revoked through the applicable Amazon authorization controls.",
      "When authorization is revoked, the integration should no longer be able to obtain new Amazon Advertising data using the revoked authorization. Stored authorization credentials associated with that authorization should be disabled or removed as appropriate. Previously stored data may be deleted according to applicable retention requirements and legitimate legal or business obligations."
    ]
  },
  {
    title: "Data Deletion",
    body: [
      `Questions or valid requests concerning data handled by the integration may be submitted through the contact information below. Requests can be sent to ${siteConfig.email}.`,
      "We may need to verify the request and evaluate it according to applicable legal requirements, operational obligations, security needs, and legitimate business purposes."
    ]
  },
  {
    title: "Third-Party Infrastructure",
    body: [
      "The integration may rely on infrastructure or technical service providers for hosting, monitoring, storage, backups, security, maintenance, or operational support.",
      "Such providers may process data only where required to operate and maintain the integration. This notice does not make claims about specific vendor certifications or controls unless they are separately verified and documented."
    ]
  },
  {
    title: "Changes to This Privacy Notice",
    body: [
      "This Privacy Notice may be updated from time to time to reflect changes in the integration, Amazon Ads API permissions, security practices, operational requirements, or applicable law.",
      "The Last Updated date indicates when this page was most recently revised."
    ]
  },
  {
    title: "Contact",
    body: [
      `For questions about this Privacy Notice or the OpenMariana Amazon Ads integration, contact Zephandor at ${siteConfig.email}.`,
      "Amazon, Amazon Ads, and related marks are trademarks of Amazon.com, Inc. or its affiliates. OpenMariana is an independent internal integration and is not an Amazon product."
    ]
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "OpenMariana Amazon Ads Integration Privacy Notice",
  url,
  description,
  dateModified: "2026-08-08",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email
  },
  about: {
    "@type": "SoftwareApplication",
    name: "OpenMariana Amazon Ads",
    applicationCategory: "BusinessApplication",
    description:
      "Private internal integration for authorized Amazon Advertising analytics, reporting, monitoring, and optimization."
  }
};

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url
  },
  openGraph: {
    title,
    description,
    url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary",
    title,
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default async function AmazonAdsPrivacyNoticePage() {
  const messages = await getMessages("en");

  return (
    <>
      <Navbar locale="en" messages={messages} />
      <main>
        <PageHero
          eyebrow="Privacy notice"
          title="OpenMariana Amazon Ads Integration Privacy Notice"
          copy="This notice explains how the private OpenMariana Amazon Ads integration handles authorized Amazon Advertising information for internal analytics, monitoring, and optimization."
        />
        <section className="container-shell py-16 sm:py-20">
          <article className="card-surface mx-auto max-w-4xl p-7 sm:p-10">
            <div className="border-b border-slate-200 pb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-700">
                OpenMariana Amazon Ads
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-surface">
                Privacy Notice for Amazon Ads API Authorization
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This page is provided for the Login with Amazon Security Profile used by OpenMariana Amazon Ads.
                It describes the data categories, purposes, authorization model, retention approach, and contact
                channel for this private internal integration.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title} aria-labelledby={section.title.toLowerCase().replaceAll(" ", "-")}>
                  <h2
                    id={section.title.toLowerCase().replaceAll(" ", "-")}
                    className="text-2xl font-semibold text-surface"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section aria-labelledby="last-updated" className="rounded-[24px] border border-slate-200 bg-white p-6">
                <h2 id="last-updated" className="text-2xl font-semibold text-surface">
                  Last Updated
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Last Updated: {lastUpdated}</p>
              </section>
            </div>
          </article>
        </section>
      </main>
      <Footer locale="en" messages={messages} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
