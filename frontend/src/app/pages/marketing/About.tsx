import { Outlet, Link } from 'react-router';
import { Target, Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import {Button} from '../../components/ui/Button';
import {Card} from '../../components/ui/Card';

export default function About() {
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
            Building a World Where{' '}
            <span className="bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              Knowledge is Free
            </span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            SkillSwap replaces money with time, creating a fair and accessible global skill-sharing network.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple-100)] to-[var(--brand-purple-200)] text-[var(--brand-purple-700)] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">Our Mission</h3>
                <p className="text-[var(--text-secondary)]">
                  To democratize learning by removing financial barriers. Everyone has something valuable to teach, and everyone deserves to learn.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue-100)] to-[var(--brand-blue-200)] text-[var(--brand-blue-700)] flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">Our Vision</h3>
                <p className="text-[var(--text-secondary)]">
                  A global network where anyone can access any skill, powered by reciprocity and community, not currency.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pink-100)] to-[var(--pink-200)] text-[var(--pink-700)] flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">Our Values</h3>
                <p className="text-[var(--text-secondary)]">
                  Fairness, trust, community, and lifelong learning. We believe in the power of human connection and knowledge sharing.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Problem We're Solving
          </motion.h2>
          <div className="space-y-6 text-lg text-[var(--text-secondary)]">
            <p>
              Traditional education and skill development is broken. Online courses cost hundreds of dollars. Private tutors are expensive. Many talented people can't access the knowledge they need because of financial constraints.
            </p>
            <p>
              Meanwhile, everyone has valuable skills they could teach others. A designer who wants to learn guitar. A developer who wants to learn marketing. A teacher who wants to learn photography.
            </p>
            <p className="text-xl font-semibold text-[var(--brand-purple-700)]">
              What if we could connect these people directly, without money changing hands?
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How SkillSwap Works
          </motion.h2>
          <div className="space-y-6 text-lg text-[var(--text-secondary)]">
            <p>
              SkillSwap uses <strong className="text-[var(--text-primary)]">TimeCredits</strong> as the universal currency. One hour of teaching any skill equals one TimeCredit. Whether you're teaching rocket science or cooking, your time has equal value.
            </p>
            <p>
              Our AI matching algorithm connects people with complementary skills. When you offer web design and want to learn Spanish, we find Spanish speakers who want to learn web design.
            </p>
            <p>
              Every exchange is tracked, rated, and verified, building trust and ensuring quality in our community.
            </p>
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
            Join the Movement
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Be part of the future of learning. No fees. No barriers. Just people helping people.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-[var(--brand-purple-700)]">
                Start Swapping Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
