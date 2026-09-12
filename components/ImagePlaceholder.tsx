import Image from "next/image";

type Props = {
  caption: string;
  /** Optional real image source. When absent, a striped placeholder renders. */
  src?: string;
  alt?: string;
  /** darker stripe palette for use on navy/dark panels */
  onDark?: boolean;
  priority?: boolean;
  /** hide the visible caption chip (keeps the accessible label) — e.g. hero backgrounds */
  hideCaption?: boolean;
};

/**
 * Striped stand-in for a not-yet-supplied photo. When `src` is provided it
 * renders next/image (fill) instead. Always absolutely fills a positioned,
 * sized parent (the reference markup sets height / aspect-ratio on the wrapper).
 */
export function ImagePlaceholder({
  caption,
  src,
  alt,
  onDark = false,
  priority = false,
  hideCaption = false,
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt ?? caption}
        fill
        priority={priority}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 900px) 100vw, 600px"
      />
    );
  }

  const stripe = onDark
    ? "repeating-linear-gradient(135deg,#0F2647 0 14px,#132C50 14px 28px)"
    : "repeating-linear-gradient(135deg,#F1EDE4 0 14px,#E9E3D6 14px 28px)";

  return (
    <div
      role="img"
      aria-label={caption}
      style={{
        position: "absolute",
        inset: 0,
        background: stripe,
        display: "grid",
        placeItems: "center",
        padding: "16px",
      }}
    >
      {hideCaption ? null : (
      <div
        style={{
          background: onDark ? "rgba(7,21,40,.75)" : "#fff",
          border: `1px solid ${onDark ? "#1C2E4A" : "#D6CFC1"}`,
          padding: "10px 14px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "11.5px",
          lineHeight: 1.5,
          color: onDark ? "#C9CFDA" : "#5B6577",
          textAlign: "center",
          maxWidth: "88%",
        }}
      >
        {caption}
      </div>
      )}
    </div>
  );
}
