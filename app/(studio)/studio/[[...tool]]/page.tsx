import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import { isSanityConfigured } from "../../../../sanity/env";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog editor | Bakersfield Doc Prep Co.",
  robots: { index: false, follow: false },
};

export { viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main style={{ maxWidth: 560, margin: "80px auto", padding: "0 24px", fontFamily: "system-ui, sans-serif" }}>
        <h1 style={{ fontSize: 24 }}>Blog editor is not configured yet</h1>
        <p>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> in the
          hosting environment, then redeploy. See <code>.env.example</code> for the full list.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
