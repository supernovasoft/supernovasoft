import { Section, SectionHeading } from '@/components/ui/primitives';

const EFFECTIVE_DATE = 'October 10, 2026';
const CONTACT_EMAIL = 'info@supernovasoft.com';

const mail = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
    {CONTACT_EMAIL}
  </a>
);

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Information we do not collect',
    body: (
      <p>
        Our apps do not collect, store, sell or share personal information. We do not ask for your name,
        email address, phone number, location, contacts, photos or files, and we do not use advertising
        identifiers, analytics trackers or advertising networks.
      </p>
    ),
  },
  {
    title: 'Audit logs',
    body: (
      <>
        <p>
          To keep the service secure and to troubleshoot problems, our servers keep technical audit logs of
          requests made to them. An audit log entry may contain:
        </p>
        <ul className="list-disc space-y-1 ps-6">
          <li>the action that was performed and whether it succeeded;</li>
          <li>the date and time of the action;</li>
          <li>the account or device identifier that performed it;</li>
          <li>the IP address the request came from.</li>
        </ul>
        <p>
          Audit logs are used only for security, abuse prevention and troubleshooting. They are never used
          for advertising or profiling, and they are never sold or shared with third parties, except where
          we are required to do so by law.
        </p>
      </>
    ),
  },
  {
    title: 'Data retention and deletion',
    body: (
      <p>
        Audit logs are kept for a maximum of <strong>90 days</strong> and are then deleted automatically and
        permanently. If you want logs related to you deleted sooner, email us at {mail} and we will delete
        them.
      </p>
    ),
  },
  {
    title: 'Security',
    body: (
      <p>
        Data sent between the apps and our servers is encrypted in transit (HTTPS/TLS). Access to audit
        logs is limited to authorised Supernova Soft staff who need it to operate the service.
      </p>
    ),
  },
  {
    title: "Children's privacy",
    body: (
      <p>
        Our apps are not directed at children under 13, and we do not knowingly collect personal information
        from children.
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>
        If we change this policy, we will post the new version on this page and update the effective date
        above.
      </p>
    ),
  },
  {
    title: 'Contact us',
    body: <p>Questions or requests about this policy can be sent to Supernova Soft at {mail}.</p>,
  },
];

export function Privacy() {
  return (
    <Section>
      <title>Privacy Policy | Supernova Soft</title>
      <SectionHeading
        align="start"
        eyebrow={`Effective ${EFFECTIVE_DATE}`}
        title="Privacy"
        highlight="Policy"
        description="This policy explains how Supernova Soft handles information in its mobile applications published on Google Play and on supernovasoft.com."
      />
      <div className="mt-12 max-w-3xl space-y-10">
        {sections.map((s) => (
          <section key={s.title} className="space-y-3 leading-relaxed text-muted-foreground">
            <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
            {s.body}
          </section>
        ))}
      </div>
    </Section>
  );
}
