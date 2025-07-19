import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-volunteers.jpg";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative bg-gradient-to-br from-background to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
                variants={itemVariants}
              >
                Connect Skills with
                <motion.span 
                  className="text-primary block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Purpose
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                Join thousands of volunteers sharing their skills to make a difference. 
                Whether you're looking to volunteer or need skilled help for your cause, 
                we connect passion with purpose.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center space-x-8"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <motion.div 
                    className="font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    5,000+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Volunteers</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart className="w-5 h-5 text-primary" />
                <div>
                  <motion.div 
                    className="font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    1,200+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="hero" className="group">
                  Start Volunteering
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="outline" size="lg">
                  Find Volunteers
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="pt-8"
              variants={itemVariants}
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by organizations like:</p>
              <motion.div 
                className="flex items-center space-x-6 opacity-60"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <div className="px-4 py-2 bg-muted rounded text-sm font-medium">Red Cross</div>
                <div className="px-4 py-2 bg-muted rounded text-sm font-medium">Habitat</div>
                <div className="px-4 py-2 bg-muted rounded text-sm font-medium">Local Food Bank</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={heroImage} 
                alt="Volunteers working together in community"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border"
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
              whileHover={{ rotate: 2, scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <div className="font-semibold text-card-foreground">Make an Impact</div>
                  <div className="text-sm text-muted-foreground">Every skill matters</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;