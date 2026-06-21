"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * IntroAnimation
 *
 * On the very first page-load it renders a fullscreen overlay that:
 *  1. Plays meribuilds_animate.mp4 (fullscreen, cover-fit, responsive)
 *  2. Cross-fades to the meribuilds.png logo
 *  3. Fades the whole overlay out, revealing the page beneath
 *
 * The overlay is only shown once per browser session (sessionStorage flag).
 */
export function IntroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // "video" → "logo" → "done"
  const [phase, setPhase] = useState<"video" | "logo" | "done">("video");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only play the intro once per session
    if (typeof sessionStorage !== "undefined") {
      if (sessionStorage.getItem("meri-intro-played")) {
        setPhase("done");
        return;
      }
      sessionStorage.setItem("meri-intro-played", "1");
    }

    setVisible(true);
  }, []);

  // When the video ends → cross-fade to logo
  const handleVideoEnded = () => {
    setPhase("logo");

    // Hold the static logo for 1.2 s, then fade out the whole overlay
    setTimeout(() => {
      const overlay = overlayRef.current;
      if (overlay) {
        overlay.style.transition = "opacity 0.8s ease";
        overlay.style.opacity = "0";
        setTimeout(() => setPhase("done"), 850);
      }
    }, 1200);
  };

  // Safety fallback: if video fails / stalls, skip to logo phase after 8 s
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      if (phase === "video") handleVideoEnded();
    }, 8000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (phase === "done") return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        // Match the video's warm parchment background so no letterbox gap is visible
        backgroundColor: "#E0DDD6",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
      aria-hidden="true"
    >
      {/* ── Video phase — fills the full viewport ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phase === "video" ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: phase === "video" ? "auto" : "none",
        }}
      >
        <video
          ref={videoRef}
          src="/video/meribuilds_animate.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* ── Logo phase — same fullscreen bg, logo sized to match animated logo ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: phase === "logo" ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: "none",
        }}
      >
        <Image
          src="/image/meribuilds.png"
          alt="Meri Builds logo"
          width={900}
          height={450}
          style={{
            /* Mirror the cover-fit video: logo spans ~60% of viewport width,
               clamped so it never gets tiny on mobile or huge on ultrawide */
            width: "clamp(240px, 60vw, 900px)",
            height: "auto",
            objectFit: "contain",
          }}
          loading="eager"
        />
      </div>
    </div>
  );
}
