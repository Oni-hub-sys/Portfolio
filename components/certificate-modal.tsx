"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Award, GraduationCap, Trophy } from "lucide-react";

interface CertificateModalProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

export function CertificateModal({ children, triggerClassName }: CertificateModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">Certificates & Achievements</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="academic">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="academic">Academic Certificates</TabsTrigger>
            <TabsTrigger value="competition">Competition Certificates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  B.Tech in Electronic and Electrical Engineering
                </CardTitle>
                <CardDescription>
                  Kalinga Institute of Industrial Technology, Odisha, India (2020-2023)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>CGPA:</strong> 8.50/10.00</p>
                <p><strong>Key Courses:</strong> Power Electronics, Electric Vehicle Technology, Wireless Power Transfer, Control Systems</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Diploma in Engineering in Electronics Technology
                </CardTitle>
                <CardDescription>
                  Jessore Polytechnic Institute, Jessore, Bangladesh (2015-2019)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>CGPA:</strong> 3.08/4.00</p>
                <p><strong>Key Courses:</strong> Digital Electronics, Circuit Theory, Electronic Devices and Circuits</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  S.S.C in General Electronics
                </CardTitle>
                <CardDescription>
                  Technical School and College, Narail, Bangladesh (2013-2015)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>GPA:</strong> 5.00/5.00</p>
                <p><strong>Key Courses:</strong> Basic Electronics, General Mathematics, Physics</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="competition" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  BOSCH-IEEE HACKATHON (2022)
                </CardTitle>
                <CardDescription>
                  Problem Statement: Designing of the eDrive for Tata Nexon EV
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Focused on designing the eDrive for the Tata Nexon EV, selecting it as the powertrain with a 1-axle (front axle) configuration. Conducted performance baseline calculations and simulations in Matlab/Simulink.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  TECH CONNECTION (WHITE PAPER CONTEST) BY JOHNSON CONTROLS (2022)
                </CardTitle>
                <CardDescription>
                  Problem Statement: E-Waste on Printed Circuit Board
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Research paper addressing environmental and economic challenges posed by waste electrical and electronic equipment (WEEE), focusing on recycling waste printed circuit boards (WPCBs).</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  REGIONAL LEVEL SKILL COMPETITION (2017)
                </CardTitle>
                <CardDescription>
                  2nd Place at the institute level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Presented a project on "Smart Home Controlling System" that was selected for the regional level competition.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  INSTITUTE LEVEL SKILL COMPETITION (2016)
                </CardTitle>
                <CardDescription>
                  3rd Place among all submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Participated in a Skill Competition organized by Jessore Polytechnic Institute, supported by the Skill and Training Enhancement Project (STEP). Project on 'Security and Alarm System' was awarded 3rd place.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}