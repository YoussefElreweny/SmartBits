
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const FORMSPREE_ID = 'xykdkayk';

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-32 scroll-mt-24 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
          <div className="grid lg:grid-cols-2">
            {/* Info Panel */}
            <div className={`p-10 md:p-16 flex flex-col justify-between ${isDarkMode ? 'bg-indigo-950/20' : 'bg-indigo-600 text-white'}`}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's build the <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-300'}>future</span>.</h2>
                <p className={`text-lg mb-12 ${isDarkMode ? 'text-slate-400' : 'text-indigo-100'}`}>
                  Ready to evolve your digital presence? We're eager to hear about your next breakthrough idea.
                </p>

                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-white/5 text-cyan-400' : 'bg-white/20 text-white'}`}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-slate-500' : 'text-indigo-200'}`}>Email Us</p>
                      <p className="text-lg font-bold">y_reweny@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-white/5 text-cyan-400' : 'bg-white/20 text-white'}`}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-slate-500' : 'text-indigo-200'}`}>Business Inquiries</p>
                      <p className="text-lg font-bold">+20 10 9694 7387</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-white/10 text-slate-500' : 'border-white/20 text-indigo-100'}`}>
                <p className="text-sm font-medium tracking-wide">Professional Grade Digital Engineering.</p>
              </div>
            </div>

            {/* Form Panel */}
            <div className="p-10 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <div className="group">
                    <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Identity</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your Name"
                      className={`w-full px-6 py-4 rounded-2xl border transition-all focus:outline-none ${isDarkMode
                        ? 'bg-slate-950 border-white/5 focus:border-cyan-500 text-white'
                        : 'bg-white border-slate-200 focus:border-indigo-600 text-slate-900 shadow-sm'
                        }`}
                    />
                  </div>

                  <div className="group">
                    <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Communication</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@company.com"
                      className={`w-full px-6 py-4 rounded-2xl border transition-all focus:outline-none ${isDarkMode
                        ? 'bg-slate-950 border-white/5 focus:border-cyan-500 text-white'
                        : 'bg-white border-slate-200 focus:border-indigo-600 text-slate-900 shadow-sm'
                        }`}
                    />
                  </div>

                  <div className="group">
                    <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Inquiry</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Brief project overview..."
                      className={`w-full px-6 py-4 rounded-2xl border transition-all focus:outline-none resize-none ${isDarkMode
                        ? 'bg-slate-950 border-white/5 focus:border-cyan-500 text-white'
                        : 'bg-white border-slate-200 focus:border-indigo-600 text-slate-900 shadow-sm'
                        }`}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSent || isSubmitting}
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] ${isSent
                    ? 'bg-green-500 text-white'
                    : (isDarkMode ? 'bg-white text-slate-950 hover:bg-cyan-50' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200')
                    } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isSent ? 'Message Sent!' : (isSubmitting ? 'Sending...' : 'Initiate Project')}
                  {!isSent && !isSubmitting && <Send size={20} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
