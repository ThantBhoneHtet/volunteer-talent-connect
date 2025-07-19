import { Card, CardContent } from "@/shared/components/ui/card";
import { UserPlus, Search, HandHeart, Trophy } from "lucide-react";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and tell us about your skills, interests, and availability. It takes just 2 minutes.",
  },
  {
    icon: Search,
    title: "Find Opportunities",
    description: "Browse volunteer opportunities that match your skills, or let organizations find you.",
  },
  {
    icon: HandHeart,
    title: "Make a Difference",
    description: "Connect with organizations and start contributing your skills to meaningful causes.",
  },
  {
    icon: Trophy,
    title: "Track Your Impact",
    description: "See the difference you're making with impact tracking and recognition for your contributions.",
  },
];

const HowItWorks = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
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
            How SkillBank Works
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Getting started is simple. Here's how you can begin making a difference today.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative group hover:shadow-lg transition-shadow border-0 bg-card/50 backdrop-blur h-full">
                <CardContent className="p-6 text-center">
                  {/* Step number */}
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.5, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.7, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ rotate: 360 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-semibold text-card-foreground mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 1.1, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;