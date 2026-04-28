import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import SkillTag from '../../components/ui/SkillTag';
import Card from '../../components/ui/Card';

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [skillInput, setSkillInput] = useState('');
  const [wantInput, setWantInput] = useState('');
  const [bio, setBio] = useState('');

  const [data, setData] = useState({
    skillsOffered: [] as string[],
    skillsWanted: [] as string[],
    availability: [] as string[],
    bio: '',
  });

  const totalSteps = 4;

  const addSkill = () => {
    if (skillInput.trim()) {
      setData({ ...data, skillsOffered: [...data.skillsOffered, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const addWant = () => {
    if (wantInput.trim()) {
      setData({ ...data, skillsWanted: [...data.skillsWanted, wantInput.trim()] });
      setWantInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setData({ ...data, skillsOffered: data.skillsOffered.filter((s) => s !== skill) });
  };

  const removeWant = (skill: string) => {
    setData({ ...data, skillsWanted: data.skillsWanted.filter((s) => s !== skill) });
  };

  const toggleAvailability = (day: string) => {
    if (data.availability.includes(day)) {
      setData({ ...data, availability: data.availability.filter((d) => d !== day) });
    } else {
      setData({ ...data, availability: [...data.availability, day] });
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/app');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.skillsOffered.length > 0;
      case 2:
        return data.skillsWanted.length > 0;
      case 3:
        return data.availability.length > 0;
      case 4:
        return bio.trim().length > 0;
      default:
        return true;
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-bold text-2xl">
              S
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] bg-clip-text text-transparent">
              SkillSwap
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Welcome! Let's set up your profile</h1>
          <p className="text-[var(--text-secondary)]">Step {currentStep} of {totalSteps}</p>
        </div>

        <div className="mb-8">
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all ${
                  i < currentStep
                    ? 'bg-gradient-to-r from-[var(--brand-purple-600)] to-[var(--brand-blue-600)]'
                    : 'bg-[var(--border-primary)]'
                }`}
              />
            ))}
          </div>
        </div>

        <Card>
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">What skills can you offer?</h2>
              <p className="text-[var(--text-secondary)] mb-6">Add at least one skill you can teach others</p>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="e.g., Web Design, Guitar, Spanish..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                />
                <Button onClick={addSkill} type="button">
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 min-h-[100px] p-4 bg-[var(--bg-secondary)] rounded-xl">
                {data.skillsOffered.length === 0 ? (
                  <p className="text-[var(--text-tertiary)] text-sm">Your skills will appear here</p>
                ) : (
                  data.skillsOffered.map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="offer" onRemove={() => removeSkill(skill)} />
                  ))
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">What do you want to learn?</h2>
              <p className="text-[var(--text-secondary)] mb-6">Add skills you're interested in learning</p>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="e.g., Photography, Coding, French..."
                  value={wantInput}
                  onChange={(e) => setWantInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addWant())}
                />
                <Button onClick={addWant} type="button">
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 min-h-[100px] p-4 bg-[var(--bg-secondary)] rounded-xl">
                {data.skillsWanted.length === 0 ? (
                  <p className="text-[var(--text-tertiary)] text-sm">Skills you want to learn will appear here</p>
                ) : (
                  data.skillsWanted.map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="want" onRemove={() => removeWant(skill)} />
                  ))
                )}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">When are you available?</h2>
              <p className="text-[var(--text-secondary)] mb-6">Select the days you're usually free for sessions</p>

              <div className="grid grid-cols-2 gap-3">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleAvailability(day)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      data.availability.includes(day)
                        ? 'border-[var(--brand-purple-600)] bg-[var(--brand-purple-50)] text-[var(--brand-purple-700)]'
                        : 'border-[var(--border-primary)] hover:border-[var(--border-secondary)] text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{day}</span>
                      {data.availability.includes(day) && <Check className="w-5 h-5" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Tell us about yourself</h2>
              <p className="text-[var(--text-secondary)] mb-6">Write a short bio to help others connect with you</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Profile Photo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--brand-purple-600)] to-[var(--brand-blue-600)] flex items-center justify-center text-white font-semibold text-2xl">
                      S
                    </div>
                    <Button variant="secondary" type="button">
                      Upload Photo
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Bio</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--brand-purple-500)] focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Tell people about your experience, interests, and what you're passionate about..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                  <p className="text-sm text-[var(--text-tertiary)] mt-1">{bio.length} / 500 characters</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-[var(--border-primary)]">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => navigate('/app')}
              >
                Skip for now
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentStep === totalSteps ? 'Complete' : 'Next'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
