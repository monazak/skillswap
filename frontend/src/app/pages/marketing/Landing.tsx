import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Video, Star } from 'lucide-react';
import { motion } from 'motion/react';
import {Button} from '../../components/ui/Button';

export default function Landing() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI Matching',
      description: 'Smart algorithm finds your perfect skill exchange partner',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Time-Based Credits',
      description: '1 hour = 1 credit. Fair exchange, no money involved',
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Built-in Sessions',
      description: 'Video calls, scheduling, and session tracking in one place',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Reputation System',
      description: 'Reviews and ratings ensure quality exchanges',
    },
  ];

  const exchanges = [
    { give: 'Design', get: 'Guitar', hours: 1 },
    { give: 'Coding', get: 'Spanish', hours: 2 },
    { give: 'Marketing', get: 'Photography', hours: 1 },
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      avatar: '',
      rating: 5,
      text: 'I learned guitar from a professional musician by teaching them web design. Amazing experience!',
    },
    {
      name: 'Maria Rodriguez',
      avatar: '',
      rating: 5,
      text: 'The AI matching is incredible. I found the perfect Spanish teacher who wanted to learn photography.',
    },
    {
      name: 'James Wilson',
      avatar: '',
      rating: 5,
      text: "Time credits make it so fair. I've learned 3 new skills in 2 months!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-purple-50)] via-[var(--bg-primary)] to-[var(--brand-blue-50)] py-20">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, var(--brand-purple-200) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[var(--text-primary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Trade Skills,{' '}
                <span className="bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
                  Not Money
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-[var(--text-secondary)] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Learn anything from anyone. Teach what you know. Exchange time instead of money on the world's first peer-to-peer skill marketplace.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/signup">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="group">
                      Start Swapping
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/how-it-works">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="secondary">
                      Explore Skills
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="bg-[var(--bg-primary)] rounded-3xl shadow-[var(--shadow-2xl)] p-8 transform rotate-2"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="transform -rotate-2">
                  <div className="flex items-center justify-center gap-8 mb-8">
                    <motion.div
                      className="text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-24 h-24 rounded-full bg-[var(--brand-purple-100)] flex items-center justify-center mb-3">
                        <span className="text-3xl">🎨</span>
                      </div>
                      <p className="font-medium text-[var(--text-primary)]">Design</p>
                    </motion.div>
                    <motion.div
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ↔️
                    </motion.div>
                    <motion.div
                      className="text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-[var(--brand-blue-100)] flex items-center justify-center mb-3">
                        <span className="text-3xl">🎸</span>
                      </div>
                      <p className="font-medium text-[var(--text-primary)]">Guitar</p>
                    </motion.div>
                  </div>
                  <div className="bg-gradient-to-r from-[var(--brand-purple-50)] to-[var(--brand-blue-50)] rounded-2xl p-4 text-center">
                    <p className="text-sm text-[var(--text-secondary)]">1 hour = 1 hour</p>
                    <p className="font-semibold text-[var(--brand-purple-700)] mt-1">Fair Exchange ✨</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">How It Works</h2>
            <p className="text-xl text-[var(--text-secondary)]">Three simple steps to start learning</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: '1',
                title: 'Offer Your Skills',
                description: 'Share what you know and what you want to learn',
                emoji: '📝',
              },
              {
                step: '2',
                title: 'Get Matched',
                description: 'AI finds the perfect exchange partner for you',
                emoji: '🤝',
              },
              {
                step: '3',
                title: 'Start Learning',
                description: 'Schedule sessions and exchange knowledge',
                emoji: '🚀',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] p-6 transition-shadow"
              >
                
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] text-white flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Powerful Features</h2>
            <p className="text-xl text-[var(--text-secondary)]">Everything you need for successful skill exchanges</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] p-6 transition-shadow"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple-100)] to-[var(--brand-blue-100)] text-[var(--brand-purple-700)] flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-semibold mb-2 text-[var(--text-primary)]">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Example Exchanges</h2>
            <p className="text-xl text-[var(--text-secondary)]">Real skill swaps happening every day</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {exchanges.map((exchange, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] p-6 cursor-pointer transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-purple-100)] flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📚</span>
                    </div>
                    <p className="font-semibold text-[var(--text-primary)]">{exchange.give}</p>
                  </div>
                  <motion.div
                    className="text-2xl px-4"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↔️
                  </motion.div>
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-blue-100)] flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <p className="font-semibold text-[var(--text-primary)]">{exchange.get}</p>
                  </div>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-3 text-center">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {exchange.hours} hour{exchange.hours > 1 ? 's' : ''} each
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Loved by Learners</h2>
            <p className="text-xl text-[var(--text-secondary)]">See what our community has to say</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-[var(--bg-primary)] rounded-2xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] p-6 transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-purple-500)] to-[var(--brand-blue-500)] flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                    <div className="flex text-[var(--yellow-500)]">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-20 bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join the Skill Economy
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Stop paying for courses. Start exchanging knowledge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/signup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-[var(--brand-purple-700)]">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
