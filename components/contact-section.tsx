"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Contact <span className="text-primary">Information</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or questions.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-6">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="flex items-center p-4 gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:anannabiswasbd20@gmail.com" className="text-primary hover:underline">
                    anannabiswasbd20@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardContent className="flex items-center p-4 gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+8801735053420" className="text-primary hover:underline">
                    +8801735053420
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardContent className="flex items-center p-4 gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Doljitpur, Narail, Bangladesh -7500</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" className="rounded-full p-3" asChild>
                <a href="https://linkedin.com/in/ananna-biswas" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full p-3" asChild>
                <a href="https://github.com/ananna-biswas" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}