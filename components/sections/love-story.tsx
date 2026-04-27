"use client"

import React from 'react';
import Link from 'next/link';
import { StorySection } from '@/components/StorySection';
import { Cinzel } from "next/font/google";
import { siteConfig } from '@/content/site';

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

// Palette lives in globals.css → @theme inline → --color-motif-*
// Edit there once to update every component.

export function LoveStory() {
  return (
    <div className="min-h-screen bg-motif-cream overflow-x-hidden">


      <div className="text-center text-motif-medium z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-motif-silver mx-auto mb-4 sm:mb-6 opacity-60"></div>
        <h1 className={`${cinzel.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-[0.14em] sm:tracking-[0.18em] font-normal leading-tight text-motif-deep mt-8`}>
        Love Story
        </h1>
        {/* <p className={`${cinzel.className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.14em] sm:tracking-[0.18em] font-normal leading-tight text-motif-medium mb-1`}>
        From Paper to Forever
        </p> */}
      </div>

      {/* SECTION 1: Top - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isFirst={true}
        title="From Secret Glances to Forever Vows"
        imageSrc="/frontboxes/box (1).webp"
        text={
          <>
            <p className="mb-4">
            Many people ask us when, where, and how our story truly began. Some say it was fate, others
say it was algorithms. For us, it was a simple moment. One we didn’t think much of at the time,
but one that quietly changed everything.
            </p>
           
          </>
        }
      />

      {/* SECTION 2: Middle - Light */}
      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/desktop-background/couple (3).webp"
        title="March 8, 2019 — Perfectly Matched"
        text={
          <>
            <p>
            It started with a single swipe. Mutual, effortless, and seemingly ordinary. But looking back now,
that moment was anything but ordinary. We didn’t just find a match. We found someone who
understood our humor, shared our perspective, and felt familiar in a way we couldn’t quite
explain. Even before we truly got to know each other, there was already a quiet sense that this
connection was worth exploring.
            </p>
          </>
        }
      />

      {/* SECTION 3: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/LoveStory/April 18, 2019 — Our First Conversation.webp"
        title="April 18, 2019 — Our First Conversation"
        text={
          <>
            <p>
            What began as a simple “hey” quickly turned into hours of conversation. We remember how
easy it was to keep talking about anything and everything. What we thought would be a short
exchange became something we looked forward to every day. Without realizing it, we were
already becoming part of each other’s routine, sharing pieces of our lives one conversation at a
time.
           </p>
           
          </>
        }
      />
            {/* SECTION 4: Middle - Light */}
            <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/LoveStory/May 3, 2019 — Our First Date.webp"
        title="May 3, 2019 — Our First Date"
        text={
          <>
            <p>
            Meeting in person came with a mix of excitement and nerves. We both wondered if the
connection we felt would be the same in real life and it was. From the first moments,
everything felt natural. There were a few awkward pauses, a lot of laughter, and a quiet
realization that this was something real. That day became the beginning of something we both
chose to hold on to.
            </p>
          </>
        }
      />

      {/* SECTION 5: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/LoveStory/June 2019 — Our First Trip Together.webp"
        title="June 2019 — Our First Trip Together"
        text={
          <>
            <p>
            Soon after, we traveled together for the first time. It wasn’t just about the place. It was about
learning how to be with each other in new situations. We navigated unfamiliar roads, made
small decisions together, and experienced both the easy and challenging moments side by side.
Somewhere along the way, we realized that no matter where we were, what mattered most
was that we were together.
            </p>
           
          </>      
        }
      />
                  {/* SECTION 6: Middle - Light */}
                  <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/LoveStory/The Years That Followed 2 Concerts together.webp"
        title="July 30, 2019 — Our First “Yes”"
        text={
          <>
            <p>
            On this day, we made it official. With a simple “yes,” we chose each other not just for that
moment, but for everything that would come after. It was the start of our relationship as
partners, built on trust, respect, and the decision to grow together.
            </p>
          </>
        }
      />

      {/* SECTION 7: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/LoveStory/The Years That Followed 1.webp"
        title="The Years That Followed"
        text={
          <>
            <p>
            The years that followed were filled with moments. Some big, some small, all meaningful. We
went to concerts, traveled to new places, got lost more than a few times, and learned how to
<br />
<br />
navigate life together. We celebrated each other’s wins, supported each other through
challenges, and slowly built a life that felt like home.
<br />
<br />
We learned that love isn’t just about the highlights. It’s in the everyday moments. The
conversations at the end of a long day, the small acts of care, the patience, the understanding,
and even the disagreements that taught us how to listen and grow. Through it all, we kept
choosing each other.
            </p>
           
          </>      
        }
      />
                  {/* SECTION 8: Middle - Light */}
                  <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/LoveStory/March 2, 2025 — Our Sixth Year Together.webp"
        title="March 2, 2025 — Our Sixth Year Together"
        text={
          <>
            <p>
            On our sixth year together, we found ourselves in Austria, standing in front of the Alps taking in
how far we had come. In that moment, everything felt still and certain. And then, we took the
next step.
<br />
<br />
We got engaged.

            </p>
          </>
        }
      />

      {/* SECTION 9: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/desktop-background/couple (13).webp"
        // title="June 2019 — Our First Trip Together"
        text={
          <>
            <p>
With full hearts and a quiet sense of certainty, we made a promise not just for that day, but for
the life we continue to build together.
<br />
And now… the finale becomes the beginning.
<br />
With teary eyes, happy hearts, and all our favorite people as witnesses,
<br />
We will say “I do” to every sunrise and storm, every laugh and silence, every messy day and
magical night.
<br />
This isn’t just a wedding
<br />
It’s the start of our forever adventure.
            </p>
           
          </>      
        }
      />
                 
      {/* Footer Decoration */}
      <div className="bg-motif-cream pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 text-center text-motif-deep z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-motif-silver mx-auto mb-4 sm:mb-6 opacity-60"></div>
        <Link 
          href="#guest-list"
          className={`${cinzel.className} group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-normal text-motif-cream bg-motif-deep rounded-sm border border-motif-deep transition-all duration-300 hover:bg-motif-accent hover:border-motif-accent hover:text-motif-cream hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motif-soft/50 focus-visible:ring-offset-2 focus-visible:ring-offset-motif-cream`}
        >
          <span className="relative z-10">Join us</span>
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-sm bg-motif-soft opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300 -z-0"></div>
        </Link>
      </div>

    </div>
  );
}