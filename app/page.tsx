import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          A leaderboard app<br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        {/* @ts-ignore*/}
        <image src="https://media2.giphy.com/media/wZqxOSe4gg91u/giphy.gif?cid=6104955emd26itknc1eu03tmgckhhw7s1y9vy4k5zrtl3scj&ep=v1_gifs_translate&rid=giphy.gif&ct=g" className="w-1/3 h-1/3 bg-slate-400" aria-label="gif"/>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={{href:siteConfig.links.github}}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
