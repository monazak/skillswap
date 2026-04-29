import { Outlet, Link } from 'react-router';
import { UserPlus, Search, Calendar, Video, Star, Coins, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import {Button} from '../../components/ui/Button';
import {Card} from '../../components/ui/Card';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Create Your Profile',
      description: 'Sign up and tell us what skills you can offer and what you want to learn.',
      details: [
        'List skills you can teach (design, coding, languages, etc.)',
        'Add skills you want to learn',
        'Set your availability',
        'Write a short bio',
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Get Matched',
      description: 'Our AI finds the perfect skill exchange partners for you.',
      details: [
        'Smart matching based on complementary skills',
        'See match percentage with each user',
        'Filter by availability and skill level',
        'Browse profiles and reviews',
      ],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Book a Session',
      description: 'Schedule your first skill exchange with your match.',
      details: [
        'Pick a time that works for both of you',
        'Sessions are 1 hour minimum',
        'Each session costs 1 TimeCredit per hour',
        'Get calendar reminders',
      ],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Start Learning',
      description: 'Meet via video call and exchange knowledge.',
      details: [
        'Built-in video calling',
        'Screen sharing available',
        'Session timer tracks credits automatically',
        'Chat before/after sessions',
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Leave a Review',
      description: 'Rate your experience to help the community.',
      details: [
        '5-star rating system',
        'Written feedback',
        'Build your reputation',
        'Help others find great teachers',
      ],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-[var(--bg-secondary)]">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 text-[var(--text-primary)]">
            How{' '}
            <span className="bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              SkillSwap
            </span>{' '}
            Works
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Learn the simple process of exchanging skills without money
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] text-white flex items-center justify-center font-bold text-2xl shadow-[var(--shadow-lg)]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-purple-100)] text-[var(--brand-purple-700)] flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{step.title}</h3>
                  </div>
                  <p className="text-lg text-[var(--text-secondary)] mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
                        <span className="text-[var(--brand-purple-600)] mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Understanding TimeCredits
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-[var(--yellow-100)] text-[var(--yellow-600)] flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">What Are TimeCredits?</h3>
                <p className="text-[var(--text-secondary)]">
                  TimeCredits are our currency. <strong className="text-[var(--text-primary)]">1 hour = 1 credit</strong>, regardless of the skill. All time has equal value.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-[var(--green-100)] text-[var(--green-600)] flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">How to Earn Credits</h3>
                <p className="text-[var(--text-secondary)]">
                  You earn 1 credit for every hour you teach. New users get <strong className="text-[var(--text-primary)]">3 free credits</strong> to start learning immediately.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">How to Use Credits</h3>
                <p className="text-[var(--text-secondary)]">
                  Spend credits to book learning sessions. <strong className="text-[var(--text-primary)]">1 credit per hour</strong> of learning, no matter what the skill is.
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 bg-gradient-to-r from-[var(--brand-purple-50)] to-[var(--brand-blue-50)] rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-purple-600)] text-white flex items-center justify-center">
                  💡
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">Example Exchange</h4>
                <p className="text-[var(--text-secondary)]">
                  Sarah teaches 2 hours of graphic design to John. She earns <strong className="text-[var(--text-primary)]">2 TimeCredits</strong>. John spends 2 credits. Later, Sarah uses her credits to learn guitar from Maria. Everyone wins!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trust & Safety
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, color: 'purple', title: 'Verified Reviews', desc: 'Only people who\'ve had sessions can leave reviews. This ensures authentic, trustworthy feedback.' },
              { icon: Shield, color: 'blue', title: 'Reputation System', desc: 'Build your reputation over time. Higher-rated users are prioritized in matching.' },
              { icon: Shield, color: 'green', title: 'Secure Platform', desc: 'All sessions happen within SkillSwap. No need to share personal contact info.' },
              { icon: Shield, color: 'pink', title: 'Community Guidelines', desc: 'Clear rules ensure respectful, productive exchanges. Report any issues to our support team.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className={`w-12 h-12 rounded-xl bg-[var(--${item.color === 'purple' ? 'brand-purple' : item.color === 'blue' ? 'brand-blue' : item.color}-100)] text-[var(--${item.color === 'purple' ? 'brand-purple' : item.color === 'blue' ? 'brand-blue' : item.color}-${item.color === 'green' ? '600' : '700'})] flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">{item.title}</h3>
                  <p className="text-[var(--text-secondary)]">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of people exchanging skills every day
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-[var(--brand-purple-700)]">
                Create Your Free Account
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
