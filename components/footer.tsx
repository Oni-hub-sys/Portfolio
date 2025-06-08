import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-heading font-bold text-2xl text-primary">
              Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 max-w-xs">
              Creating exceptional digital experiences through creative web development.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ananna Biswas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}