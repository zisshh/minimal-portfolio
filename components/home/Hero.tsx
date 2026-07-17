import Image from "next/image";
import { MapPin } from "lucide-react";
import { RoleRotator } from "./RoleRotator";
import { SocialLinks } from "./SocialLinks";
import { profile } from "@/content/profile";

const ZIIRO = "ziiro";
const ZIIRO_URL = "https://ziiro.work";

interface MetaProps {
  label: string;
  children: React.ReactNode;
}

function Meta({ label, children }: MetaProps) {
  return (
    <div>
      <dt className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-fg-subtle sm:text-[11px]">
        {label}
      </dt>
      <dd className="flex items-center gap-1.5 text-[14px] text-fg">{children}</dd>
    </div>
  );
}

export function Hero() {
  const ziiroAt = profile.bio.toLowerCase().indexOf(ZIIRO);

  return (
    <section className="flex flex-col pt-24 pb-16 sm:pt-28">
      <div className="flex items-center gap-4">
        <Image
          src="/avatar.png"
          alt={profile.name}
          width={64}
          height={64}
          priority
          className="h-16 w-16 rounded-xl border border-border object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-fg-strong sm:text-3xl md:text-[2rem]">
            {profile.name}
          </h1>
          <RoleRotator roles={profile.roles} />
        </div>
      </div>

      <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        <Meta label="Location">
          <MapPin className="h-3.5 w-3.5 text-fg-subtle" aria-hidden />
          {profile.location}
        </Meta>
        <Meta label="Email">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline transition-colors hover:text-fg-strong"
          >
            {profile.email}
          </a>
        </Meta>
        {profile.pronouns ? <Meta label="Pronouns">{profile.pronouns}</Meta> : null}
      </dl>

      <p className="mt-8 max-w-2xl text-[15px] font-[450] leading-[1.85] text-fg-muted">
        {ziiroAt === -1 ? (
          profile.bio
        ) : (
          <>
            {profile.bio.slice(0, ziiroAt)}
            <a
              href={ZIIRO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 decoration-fg-faint transition-colors hover:text-fg-strong hover:decoration-fg-strong"
            >
              {profile.bio.slice(ziiroAt, ziiroAt + ZIIRO.length)}
            </a>
            {profile.bio.slice(ziiroAt + ZIIRO.length)}
          </>
        )}
      </p>

      <SocialLinks className="mt-8" />
    </section>
  );
}
