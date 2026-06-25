'use client';

import React, { useState } from 'react';
import { X, Clock, User, Tag, ChevronRight, BookOpen, Heart, Pill, ShieldCheck, Stethoscope, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  icon: React.ElementType;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding Your Blood Pressure Medication: A Simple Guide',
    excerpt: 'High blood pressure affects millions of Nigerians. Learn how your prescribed medications work, how to take them correctly, and what side effects to watch out for.',
    content: `High blood pressure (hypertension) is one of the most common chronic conditions managed at Ciyal Pharmacy. If your doctor has prescribed antihypertensives, this guide will help you understand them better.

**How Blood Pressure Medications Work**

There are several classes of blood pressure medications, each working differently:

- **ACE Inhibitors** (e.g., Lisinopril) relax your blood vessels by blocking a hormone that causes them to narrow.
- **Beta-Blockers** (e.g., Atenolol) reduce your heart rate and the force of your heartbeat.
- **Calcium Channel Blockers** (e.g., Amlodipine) prevent calcium from entering heart and blood vessel cells, which relaxes and widens the vessels.
- **Diuretics** help your kidneys remove excess sodium and water, reducing blood volume.

**Taking Your Medication Correctly**

Always take your medication at the same time each day. Never skip doses, even if you feel fine — hypertension is often called the "silent killer" because it shows no symptoms. Missing doses can cause rebound hypertension.

**Common Side Effects to Watch**

- Dry cough (common with ACE inhibitors)
- Dizziness when standing up quickly
- Swollen ankles (with calcium channel blockers)
- Frequent urination (with diuretics)

If you experience severe side effects, contact us immediately at +234 803 914 4988. Our pharmacists are always available to discuss your medication concerns.

**Lifestyle Tips to Boost Effectiveness**

Medication works best alongside healthy habits: reduce salt intake, exercise regularly, maintain a healthy weight, limit alcohol, and manage stress. Visit Ciyal Pharmacy at Chikakore Junction, Kubwa for a free blood pressure check.`,
    author: 'Pharm. Ciyal Team',
    date: 'June 20, 2025',
    readTime: '5 min read',
    category: 'Medication Guide',
    categoryColor: 'bg-blue-100 text-blue-700',
    icon: Pill,
    image: '/assets/images.jpg',
  },
  {
    id: 2,
    title: 'Diabetes Management: What Every Patient in Kubwa Should Know',
    excerpt: 'Managing diabetes requires more than just taking medication. Discover the full picture of blood sugar control, diet tips, and how Ciyal Pharmacy supports your care.',
    content: `Diabetes is a serious but manageable condition. At Ciyal Pharmacy in Kubwa, Abuja, we work closely with patients to ensure their diabetes management plan is effective and sustainable.

**Types of Diabetes Medications**

- **Metformin** — the most common first-line medication for Type 2 diabetes. It reduces glucose production in the liver.
- **Sulfonylureas** (e.g., Glibenclamide) — stimulate the pancreas to produce more insulin.
- **Insulin therapy** — required for Type 1 diabetes and some advanced Type 2 cases. Proper storage is critical (2–8°C).

**Monitoring Your Blood Sugar**

Test your blood sugar as directed by your doctor — typically before meals and at bedtime. Keep a log to share with your healthcare team. If your readings are consistently above 10 mmol/L, contact your doctor or visit us for guidance.

**Diet Is Half the Battle**

Avoid processed sugars, white rice, and sweetened beverages. Focus on:
- Whole grains (oats, brown rice)
- Leafy vegetables
- Lean proteins (fish, chicken, beans)
- Low-GI fruits (guava, pawpaw)

**Foot Care Is Critical**

Diabetes affects blood circulation to the feet. Inspect your feet daily for cuts or sores. Wear well-fitting shoes and see a doctor for any foot wound that does not heal within 2–3 days.

Visit us at Chikakore Junction, Kubwa to pick up your diabetes supplies including glucometers, test strips, and insulin pens. Call +234 803 914 4988 to confirm stock availability.`,
    author: 'Pharm. Ciyal Team',
    date: 'June 14, 2025',
    readTime: '6 min read',
    category: 'Chronic Care',
    categoryColor: 'bg-green-100 text-green-700',
    icon: Heart,
    image: '/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp',
  },
  {
    id: 3,
    title: 'How to Read Your Prescription: A Patient\'s Quick Reference',
    excerpt: 'Medical prescriptions can look confusing with abbreviations and Latin terms. This guide decodes common prescription labels so you always take the right dose at the right time.',
    content: `A prescription is a legal document your doctor writes to authorize you to receive specific medication. Understanding it helps you take your medicines safely.

**Common Prescription Abbreviations**

| Abbreviation | Meaning |
|---|---|
| OD | Once daily |
| BD / BID | Twice daily |
| TDS / TID | Three times daily |
| QID | Four times daily |
| PRN | As needed |
| AC | Before meals |
| PC | After meals |
| HS | At bedtime |
| PO | By mouth (oral) |
| SL | Under the tongue |

**What the Label Tells You**

Your dispensed medication label from Ciyal Pharmacy will include:
1. Your full name
2. The medication name and strength
3. Dosage instructions in plain language
4. Dispensing date and expiry
5. Our pharmacist's name and contact

**Never Do These**

- Never share prescription medication with others
- Never stop antibiotics before finishing the full course
- Never double-dose if you miss a dose — take it as soon as you remember, unless it is almost time for the next dose

**Questions? Ask Us**

At Ciyal Pharmacy, our pharmacists are trained to counsel you on every prescription. Simply WhatsApp us on +234 803 914 4988 or walk into our store at Chikakore Junction, Kubwa.`,
    author: 'Pharm. Ciyal Team',
    date: 'June 8, 2025',
    readTime: '4 min read',
    category: 'Patient Education',
    categoryColor: 'bg-purple-100 text-purple-700',
    icon: BookOpen,
    image: '/assets/amocilicin.jpg',
  },
  {
    id: 4,
    title: 'Antibiotic Resistance: Why You Must Complete Your Full Course',
    excerpt: 'Antibiotic resistance is a growing global health crisis. Learn why finishing your full prescription matters and how Nigeria is affected by this silent epidemic.',
    content: `Antibiotic resistance happens when bacteria evolve to survive medications that were once effective against them. It is one of the biggest public health threats globally — and it is largely driven by misuse of antibiotics.

**Why Resistance Happens**

When you stop antibiotics early because you "feel better," you may have killed most bacteria — but the strongest, most resistant ones may still be alive. These survivors multiply and the infection returns, this time harder to treat.

**Common Mistakes Nigerians Make**

- Buying antibiotics over the counter without a prescription
- Stopping treatment when symptoms improve
- Taking antibiotics for viral infections like the common cold or flu (antibiotics do not work against viruses)
- Sharing leftover antibiotics with family members

**What This Means for Nigeria**

Studies show that multi-drug resistant tuberculosis (MDR-TB), drug-resistant malaria, and resistant urinary tract infections are increasing in Nigeria. This makes treatment more expensive and less effective.

**How Ciyal Pharmacy Helps**

We only dispense antibiotics with a valid prescription. Our pharmacists will:
- Counsel you on the correct duration and dosage
- Explain what to do if you miss a dose
- Monitor for adverse reactions if you return for follow-up

Help fight antibiotic resistance — complete your full course and never self-medicate. Call us on +234 803 914 4988 for any antibiotic-related questions.`,
    author: 'Pharm. Ciyal Team',
    date: 'May 30, 2025',
    readTime: '5 min read',
    category: 'Health Alert',
    categoryColor: 'bg-red-100 text-red-700',
    icon: ShieldCheck,
    image: '/assets/paracetamol.jpg',
  },
  {
    id: 5,
    title: 'Vitamins & Supplements: What Actually Works and What Doesn\'t',
    excerpt: 'The supplement market is flooded with bold claims. Our pharmacists break down which vitamins are evidence-backed, which are overhyped, and how to choose quality products.',
    content: `Walk into any pharmacy or market in Nigeria and you will find shelves loaded with vitamins, minerals, and herbal supplements. But which ones are actually backed by science?

**Evidence-Backed Supplements**

- **Vitamin D** — Most Nigerians are actually deficient despite the sunshine! Supplementation is recommended for people who spend most of the day indoors.
- **Folic Acid** — Critical for pregnant women to prevent neural tube defects. Should be started before conception.
- **Iron** — Essential for anaemia, especially in women and children. Should be confirmed with a blood test before supplementing.
- **Zinc** — Supports immune function and wound healing.
- **Omega-3 Fatty Acids** — Evidence supports benefits for heart health and inflammation.

**Overhyped Supplements to Be Cautious About**

- Mega-dose Vitamin C — The body cannot absorb more than ~200mg at a time; the excess is excreted.
- Detox teas and cleanses — Your liver and kidneys do this naturally.
- "Immune boosters" with no clinical evidence

**How to Choose Quality Supplements**

Look for products with NAFDAC registration numbers. Avoid supplements with proprietary blends that hide ingredient amounts. At Ciyal Pharmacy, all our supplements are sourced from verified manufacturers.

**Always Tell Your Pharmacist**

Some supplements interact with medications — for example, St. John's Wort can reduce the effectiveness of some antidepressants. Always inform your pharmacist of all supplements you are taking.

Visit us at Chikakore Junction, Kubwa, or call +234 803 914 4988 for personalised supplement advice.`,
    author: 'Pharm. Ciyal Team',
    date: 'May 22, 2025',
    readTime: '7 min read',
    category: 'Wellness',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    icon: Leaf,
    image: '/assets/ADH_Vitamin-C.jpg',
  },
  {
    id: 6,
    title: 'Malaria Prevention and Treatment in Abuja: A 2025 Update',
    excerpt: 'Malaria remains endemic in Nigeria. Get the latest guidance on prevention strategies, approved treatment regimens, and when to seek urgent care.',
    content: `Malaria is one of the leading causes of illness and death in Nigeria, but it is entirely preventable and treatable when managed correctly.

**Prevention Strategies**

1. **Sleep under insecticide-treated bed nets (ITNs)** — This is the single most effective preventive measure.
2. **Use EPA-approved insect repellents** — Apply DEET-based repellents to exposed skin in the evenings.
3. **Eliminate stagnant water** — Mosquitoes breed in stagnant water. Empty containers, unclog gutters.
4. **Chemoprophylaxis for travellers** — If you are visiting a high-risk area or travelling from abroad, preventive medication may be recommended.

**Recognising Malaria Symptoms**

- High fever (often cyclical — every 2–3 days)
- Chills and rigors
- Headache, body aches
- Nausea and vomiting
- Fatigue

**Do Not Self-Treat Without Diagnosis**

Always confirm malaria with a Rapid Diagnostic Test (RDT) or blood smear before taking antimalarials. At Ciyal Pharmacy, we stock approved RDT kits.

**2025 Approved Treatment Regimens (Nigeria)**

- **Artemether-Lumefantrine (AL)** — First-line treatment for uncomplicated malaria in Nigeria (e.g., Coartem, Lonart)
- **Artesunate-Amodiaquine (ASAQ)** — Second-line option
- **IV Artesunate** — For severe malaria (hospital setting only)

Never use monotherapy (chloroquine alone) — resistance is widespread.

**When to Seek Urgent Care**

Go to a hospital immediately if you have: convulsions, inability to eat or drink, repeated vomiting, extreme weakness, or altered consciousness.

Stock up on your malaria prevention supplies at Ciyal Pharmacy, Chikakore Junction, Kubwa. Call +234 803 914 4988 for availability.`,
    author: 'Pharm. Ciyal Team',
    date: 'May 15, 2025',
    readTime: '6 min read',
    category: 'Infectious Disease',
    categoryColor: 'bg-orange-100 text-orange-700',
    icon: Stethoscope,
    image: '/assets/images-117.webp',
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => setSelectedPost(post);
  const closePost = () => setSelectedPost(null);

  return (
    <div className="font-inter bg-bg-custom pb-20">

      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/30 to-bg-custom py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope"
          >
            Health Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Ciyal Health Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Expert pharmacy advice, medication guides, and wellness tips from our clinical team in Kubwa, Abuja.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => {
            const Icon = post.icon;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Category badge overlay */}
                  <span className={`absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{post.date}</span>
                  </div>

                  <h2 className="font-manrope font-bold text-slate-900 text-base leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 text-xs leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <button
                    onClick={() => openPost(post)}
                    className="mt-2 flex items-center gap-1.5 text-primary font-semibold text-xs hover:gap-2.5 transition-all duration-200 group/btn"
                    aria-label={`Read more: ${post.title}`}
                  >
                    <span>Read More</span>
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Read More Modal */}
      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePost}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:py-10 pointer-events-none"
            >
              <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-3xl bg-slate-100 shrink-0">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Close button */}
                  <button
                    onClick={closePost}
                    className="absolute top-4 right-4 h-9 w-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                    aria-label="Close article"
                  >
                    <X className="h-4 w-4 text-slate-700" />
                  </button>

                  {/* Category + title overlay */}
                  <div className="absolute bottom-4 left-5 right-14">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full inline-block mb-2 ${selectedPost.categoryColor}`}>
                      {selectedPost.category}
                    </span>
                    <h2 className="font-manrope font-extrabold text-white text-lg sm:text-xl leading-snug">
                      {selectedPost.title}
                    </h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-400 border-b border-slate-100 pb-5">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {selectedPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5" /> {selectedPost.date}
                    </span>
                  </div>

                  {/* Article body rendered as formatted text */}
                  <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed space-y-4">
                    {selectedPost.content.split('\n\n').map((para, i) => {
                      if (para.startsWith('**') && para.endsWith('**') && !para.includes('\n')) {
                        return (
                          <h3 key={i} className="font-manrope font-bold text-slate-800 text-base mt-6 mb-1">
                            {para.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (para.startsWith('- ') || para.split('\n').every(l => l.startsWith('- '))) {
                        const items = para.split('\n').filter(l => l.startsWith('- '));
                        return (
                          <ul key={i} className="list-disc list-outside ml-4 space-y-1.5">
                            {items.map((item, j) => (
                              <li key={j} className="text-slate-600 text-sm" dangerouslySetInnerHTML={{
                                __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                              }} />
                            ))}
                          </ul>
                        );
                      }
                      if (para.startsWith('1. ')) {
                        const items = para.split('\n').filter(l => /^\d+\./.test(l));
                        return (
                          <ol key={i} className="list-decimal list-outside ml-4 space-y-1.5">
                            {items.map((item, j) => (
                              <li key={j} className="text-slate-600 text-sm" dangerouslySetInnerHTML={{
                                __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                              }} />
                            ))}
                          </ol>
                        );
                      }
                      if (para.includes('|---')) {
                        const rows = para.split('\n').filter(r => !r.match(/^[|: -]+$/));
                        return (
                          <div key={i} className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                              {rows.map((row, j) => {
                                const cells = row.split('|').filter(c => c.trim());
                                return (
                                  <tr key={j} className={j === 0 ? 'bg-slate-50 font-semibold text-slate-800' : 'border-t border-slate-100'}>
                                    {cells.map((cell, k) => (
                                      <td key={k} className="px-3 py-2 text-slate-600">{cell.trim()}</td>
                                    ))}
                                  </tr>
                                );
                              })}
                            </table>
                          </div>
                        );
                      }
                      return (
                        <p key={i} className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{
                          __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                        }} />
                      );
                    })}
                  </div>

                  {/* CTA footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/2348039144988"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-sm py-3 rounded-xl transition-colors shadow-md shadow-primary/15"
                    >
                      <span>Book a Consultation</span>
                    </a>
                    <button
                      onClick={closePost}
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-3 rounded-xl transition-colors"
                    >
                      <span>Close Article</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
