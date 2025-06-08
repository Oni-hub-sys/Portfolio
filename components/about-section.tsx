"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { CertificateModal } from "./certificate-modal";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a detail-oriented professional with experience in electrical engineering research, wireless power transfer technology, and content management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4">
              With a strong background in electronic and electrical engineering, I've pursued research in wireless power transfer technology, focusing on innovative solutions for electric vehicle charging systems. My passion lies in developing efficient and sustainable energy transfer methods.
            </p>
            <p className="text-muted-foreground mb-4">
              Alongside my technical expertise, I've developed professional skills in content management, leading teams and creating engaging content. I'm committed to bridging the gap between complex technical concepts and clear, impactful communication.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Content Research Specialist</h4>
              <p className="text-muted-foreground mb-4">
                I excel in conducting comprehensive research for content development, utilizing data-driven methodologies to uncover valuable insights. My approach combines technical knowledge with creative problem-solving to develop content strategies that engage audiences and deliver measurable results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/5">Data Analysis</Badge>
                <Badge variant="outline" className="bg-primary/5">SEO Research</Badge>
                <Badge variant="outline" className="bg-primary/5">Content Strategy</Badge>
                <Badge variant="outline" className="bg-primary/5">Trend Identification</Badge>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Education
              <CertificateModal triggerClassName="text-primary hover:underline cursor-pointer text-sm font-normal">
                <span>View Certificates</span>
              </CertificateModal>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-medium">B.Tech in Electronic and Electrical Engineering</h4>
                  <p className="text-muted-foreground">Kalinga Institute of Industrial Technology, Odisha, India (2020-2023)</p>
                  <p className="text-sm text-accent">CGPA: 8.50/10.00</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-medium">Diploma in Engineering in Electronics Technology</h4>
                  <p className="text-muted-foreground">Jessore Polytechnic Institute, Jessore, Bangladesh (2015-2019)</p>
                  <p className="text-sm text-accent">CGPA: 3.08/4.00</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-medium">S.S.C in General Electronics</h4>
                  <p className="text-muted-foreground">Technical School and College, Narail, Bangladesh (2013-2015)</p>
                  <p className="text-sm text-accent">GPA: 5.00/5.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center">Professional Experience</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Content Writer Manager (Part Time)</h4>
                  <p className="text-muted-foreground">WriterLoop AI (Seattle, USA) - Remote</p>
                  <p className="text-sm text-accent">September 2024 - Present</p>
                </div>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-muted-foreground">Promoted to Content Manager within months; now leading a team</li>
                <li className="text-muted-foreground">Research and develop engaging content ideas through surveys and analysis</li>
                <li className="text-muted-foreground">Write, edit, and refine scripts for clarity and impact</li>
                <li className="text-muted-foreground">Oversee content creation, data entry, and workflow optimization</li>
                <li className="text-muted-foreground">Design visual assets using Canva to enhance content quality</li>
                <li className="text-muted-foreground">Collaborate with the team to ensure consistency and efficiency</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Teaching (Part-time)</h4>
                  <p className="text-muted-foreground">KP-8(A), KIIT University Hostel, Bhubaneswar, India</p>
                  <p className="text-sm text-accent">June 2022 - May 2023</p>
                </div>
              </div>
              <div className="mb-2">
                <h5 className="font-medium">Subjects:</h5>
                <ul className="list-disc pl-5">
                  <li className="text-muted-foreground">Basic Electronics and Electrical Engineering</li>
                  <li className="text-muted-foreground">Electrical Machines</li>
                  <li className="text-muted-foreground">Analog & Digital Electronics</li>
                  <li className="text-muted-foreground">Switch Gear & Protection</li>
                  <li className="text-muted-foreground">Power System</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}