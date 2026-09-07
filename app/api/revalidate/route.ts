import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = { _type?: string; slug?: string };

/**
 * Sanity calls this route whenever a post is created, updated, or deleted so the
 * blog pages refresh right away instead of waiting for the scheduled revalidation.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    revalidateTag("post", "max");

    return NextResponse.json({ revalidated: true, type: body._type, slug: body.slug ?? null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
