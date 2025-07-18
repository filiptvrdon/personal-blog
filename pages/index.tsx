import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {BlogIcon, GithubIcon} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">

          <Link href="#" className="hover:opacity-75 hover:scale-105 transition-all duration-300 text-current">
            <span className={title()}>Live&nbsp;</span>
            <span className={title({color: "red"})}>hardcore&nbsp;</span>
          </Link>
          <br/>
          <Link href="#" className="hover:opacity-75 hover:scale-105 transition-all duration-300 text-current">
            <span className={title()}>Build&nbsp;</span>
            <span className={title({color: "blue"})}>software&nbsp;</span>
          </Link>
          <br />
          <p className={subtitle()}>
            Forging success in career, training and life through strength, discipline and relentless effort.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              // color: "primary",
              radius: "full",
              variant: "bordered",
            })}
            href={"/blog"}
          >
            <BlogIcon size={20} />
            Blog
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
