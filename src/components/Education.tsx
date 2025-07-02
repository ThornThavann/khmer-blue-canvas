import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageToggle';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Royal University of Phnom Penh',
    period: '2016 - 2020',
    location: 'Phnom Penh, Cambodia',
    grade: 'Summa Cum Laude (GPA: 3.8/4.0)',
    achievements: [
      'President of Computer Science Student Association',
      'Dean\'s List for 6 consecutive semesters',
      'Outstanding Academic Achievement Award',
      'Led team project that won university hackathon'
    ],
    coursework: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development', 'Mobile Development']
  }
];

const certifications = [
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-DEV-2023-001',
    skills: ['Cloud Computing', 'AWS Services', 'Serverless Architecture']
  },
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google via Coursera',
    date: '2022',
    credentialId: 'GOOGLE-UX-2022-456',
    skills: ['User Experience Design', 'Prototyping', 'User Research']
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta (Facebook)',
    date: '2022',
    credentialId: 'META-REACT-2022-789',
    skills: ['React.js', 'Frontend Development', 'JavaScript']
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    credentialId: 'CKA-2023-012',
    skills: ['Kubernetes', 'Container Orchestration', 'DevOps']
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2021',
    credentialId: 'MONGO-DEV-2021-345',
    skills: ['MongoDB', 'NoSQL Databases', 'Database Design']
  },
  {
    title: 'Agile & Scrum Master Certification',
    issuer: 'Scrum Alliance',
    date: '2021',
    credentialId: 'CSM-2021-678',
    skills: ['Agile Methodologies', 'Scrum Framework', 'Project Management']
  }
];

const onlineCourses = [
  {
    title: 'Advanced React Patterns',
    platform: 'Frontend Masters',
    instructor: 'Kent C. Dodds',
    completion: '2023'
  },
  {
    title: 'System Design Interview',
    platform: 'Educative',
    instructor: 'Grokking Team',
    completion: '2023'
  },
  {
    title: 'Machine Learning Specialization',
    platform: 'Coursera',
    instructor: 'Andrew Ng',
    completion: '2022'
  },
  {
    title: 'Advanced CSS and Sass',
    platform: 'Udemy',
    instructor: 'Jonas Schmedtmann',
    completion: '2021'
  }
];

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-shimmer bg-gradient-to-r from-primary to-accent bg-clip-text">
            Education & Certifications
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning journey in computer science, development, and design
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Formal Education</h3>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-lift group creative-border p-8 max-w-4xl mx-auto"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl lg:text-3xl group-hover:text-shimmer transition-all duration-300 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-xl text-primary font-semibold mb-2">{edu.institution}</p>
                    <p className="text-lg text-accent-foreground font-medium mb-2">{edu.grade}</p>
                  </div>
                  <div className="lg:text-right space-y-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
                      {edu.period}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-primary mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary mb-3">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="mb-16 animate-fade-up">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift group creative-border"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-shimmer transition-all duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-3">Earned: {cert.date}</p>
                  <p className="text-xs text-muted-foreground mb-4">ID: {cert.credentialId}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Skills Validated:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-gradient-to-r from-accent/20 to-primary/20 text-accent-foreground rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Learning */}
        <div className="animate-fade-up">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Continuous Learning</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {onlineCourses.map((course, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift group creative-border"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-shimmer transition-all duration-300">
                    {course.title}
                  </h4>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span className="text-primary font-semibold">{course.platform}</span>
                    <Badge variant="outline" className="text-xs">
                      {course.completion}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-bounce-subtle opacity-40"></div>
    </section>
  );
};