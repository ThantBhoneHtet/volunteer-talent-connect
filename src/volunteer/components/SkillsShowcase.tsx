import { Card, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { 
  Code, 
  Palette, 
  GraduationCap, 
  Megaphone, 
  Calculator, 
  Camera, 
  Stethoscope, 
  Hammer,
  TrendingUp,
  Users
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const skillCategories = [
  {
    icon: Code,
    title: "Technology",
    color: "bg-blue-500/10 text-blue-600",
    skills: ["Web Development", "Mobile Apps", "Data Analysis", "Cybersecurity", "AI/ML"],
    volunteers: 1240
  },
  {
    icon: Palette,
    title: "Creative",
    color: "bg-purple-500/10 text-purple-600",
    skills: ["Graphic Design", "Video Editing", "Photography", "Writing", "UI/UX"],
    volunteers: 890
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "bg-green-500/10 text-green-600",
    skills: ["Tutoring", "Curriculum Design", "Language Teaching", "Training", "Mentoring"],
    volunteers: 2150
  },
  {
    icon: Megaphone,
    title: "Marketing",
    color: "bg-orange-500/10 text-orange-600",
    skills: ["Social Media", "Content Creation", "SEO", "Brand Strategy", "PR"],
    volunteers: 670
  },
  {
    icon: Calculator,
    title: "Finance & Legal",
    color: "bg-emerald-500/10 text-emerald-600",
    skills: ["Accounting", "Legal Advice", "Grant Writing", "Tax Prep", "Budgeting"],
    volunteers: 530
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "bg-red-500/10 text-red-600",
    skills: ["Medical Care", "Mental Health", "Nutrition", "First Aid", "Health Education"],
    volunteers: 980
  }
];

const SkillsShowcase = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Skills That Make a Difference
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From technology to healthcare, our volunteers bring diverse expertise to help 
            organizations achieve their missions. Discover how your skills can create impact.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-6 h-6" />
                    </motion.div>
                    <motion.div 
                      className="text-right"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      <div className="text-sm text-muted-foreground">Available</div>
                      <motion.div 
                        className="font-semibold text-foreground"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + 0.5, 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 300
                        }}
                      >
                        {category.volunteers}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-semibold text-card-foreground mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* Skills */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: index * 0.1 + 0.6 }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} variants={badgeVariants}>
                        <Badge variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-primary/5 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            {[
              { icon: TrendingUp, value: "6,500+", label: "Active Volunteers" },
              { icon: Users, value: "150+", label: "Skill Categories" },
              { icon: Hammer, value: "2,400+", label: "Projects Completed" },
              { icon: Camera, value: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.5,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;