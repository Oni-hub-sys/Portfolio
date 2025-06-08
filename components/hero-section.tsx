"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ExpertiseCards } from "./expertise-cards";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Electrical Engineer. Content Manager. Researcher.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
      console.log("Typing animation:", fullText.substring(0, currentIndex));
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ananna Biswas
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium min-h-[2rem]">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0">
            I combine electrical engineering expertise with content management skills to deliver innovative solutions and engaging digital content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#digital-tools">My Digital Tools</a>
            </Button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative h-[450px] w-[450px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
            <div className="relative h-full w-full rounded-full border-2 border-primary/20 overflow-hidden">
              <img 
                src="https://assets.macaly-user-data.dev/obkdr20qhe713hhwu7dhai4v/hz8c1awc7p3k9wi6ng4u7i2l/gC4XCUMPgezap29tighZy/image.png" 
                alt="Ananna Biswas" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <ExpertiseCards />
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce-slow" />
      </button>
    </section>
  );
}