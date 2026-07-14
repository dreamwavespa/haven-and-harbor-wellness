import { Service, Provider, Goal, Resource } from "@/types";

export const services: Service[] = [
  {
    id: "s1",
    name: "Individual Talk Therapy",
    category: "Individual",
    format: "Both",
    duration: "50 min",
    price: "$0–120 (sliding scale)",
    description:
      "One-on-one sessions with a licensed therapist for anxiety, depression, trauma, grief, and life transitions.",
    tags: ["Anxiety", "Depression", "Trauma", "Sliding scale"],
  },
  {
    id: "s2",
    name: "Cognitive Behavioral Therapy (CBT)",
    category: "Individual",
    format: "Both",
    duration: "50 min",
    price: "$0–120 (sliding scale)",
    description:
      "Structured, goal-oriented sessions that help you identify and reframe unhelpful thought patterns.",
    tags: ["Structured", "Skill-building"],
  },
  {
    id: "s3",
    name: "Psychiatric Evaluation & Medication Management",
    category: "Psychiatry",
    format: "Both",
    duration: "30–45 min",
    price: "$0–150 (insurance accepted)",
    description:
      "Comprehensive evaluations and ongoing medication management with our on-staff psychiatric nurse practitioners.",
    tags: ["Medication", "Insurance accepted"],
  },
  {
    id: "s4",
    name: "Grief & Loss Support Group",
    category: "Group",
    format: "In-person",
    duration: "75 min / weekly",
    price: "Free",
    description:
      "A weekly peer-facilitated circle for anyone processing the loss of a loved one, in a warm, unhurried space.",
    tags: ["Peer-led", "Free", "Weekly"],
  },
  {
    id: "s5",
    name: "Young Adult Anxiety Circle",
    category: "Group",
    format: "Virtual",
    duration: "60 min / weekly",
    price: "$15/session",
    description:
      "A supportive group for ages 18–28 navigating anxiety, hosted virtually every Thursday evening.",
    tags: ["Ages 18-28", "Virtual"],
  },
  {
    id: "s6",
    name: "Teen Counseling (13–17)",
    category: "Teen & Family",
    format: "In-person",
    duration: "45 min",
    price: "$0–90 (sliding scale)",
    description:
      "A dedicated space for teens to talk through school stress, identity, friendships, and family dynamics.",
    tags: ["Teens", "Confidential"],
  },
  {
    id: "s7",
    name: "Family Systems Counseling",
    category: "Teen & Family",
    format: "Both",
    duration: "60 min",
    price: "$0–140 (sliding scale)",
    description:
      "Guided sessions for families working through communication, conflict, or a recent transition together.",
    tags: ["Whole family", "Communication"],
  },
  {
    id: "s8",
    name: "Mindfulness & Stress Reduction Workshop",
    category: "Workshops",
    format: "In-person",
    duration: "2 hrs / monthly",
    price: "$25",
    description:
      "A monthly hands-on workshop teaching breathwork, body scans, and grounding techniques you can use anywhere.",
    tags: ["Drop-in", "Monthly"],
  },
  {
    id: "s9",
    name: "Parenting Through Big Emotions",
    category: "Workshops",
    format: "Virtual",
    duration: "90 min",
    price: "$20",
    description:
      "A practical workshop for caregivers on responding to tantrums, anxiety, and shutdowns with calm and confidence.",
    tags: ["Caregivers", "Practical tools"],
  },
  {
    id: "s10",
    name: "Same-Day Crisis Consultation",
    category: "Crisis",
    format: "Both",
    duration: "30 min",
    price: "Free",
    description:
      "Reserved same-day slots for anyone in acute distress who needs to talk to a clinician today, not next week.",
    tags: ["Same-day", "Free", "Urgent"],
  },
];

export const providers: Provider[] = [
  { id: "p1", name: "Dr. Naomi Okafor", title: "Licensed Clinical Psychologist", specialties: ["Anxiety", "Trauma", "CBT"], nextAvailable: "Tomorrow, 2:00 PM" },
  { id: "p2", name: "Daniel Reyes, LMFT", title: "Marriage & Family Therapist", specialties: ["Family Systems", "Teens"], nextAvailable: "Thu, 10:30 AM" },
  { id: "p3", name: "Priya Chandra, PMHNP", title: "Psychiatric Nurse Practitioner", specialties: ["Medication Mgmt", "ADHD"], nextAvailable: "Fri, 9:15 AM" },
  { id: "p4", name: "Sam Whitfield, LCSW", title: "Clinical Social Worker", specialties: ["Grief", "Group Facilitation"], nextAvailable: "Today, 5:45 PM" },
];

export const goals: Goal[] = [
  { id: "g1", title: "Practice mindful breathing daily", category: "Mindfulness", progress: 80, target: "5x / week", streak: 12 },
  { id: "g2", title: "Sleep 7+ hours a night", category: "Sleep", progress: 62, target: "7 nights / week", streak: 4 },
  { id: "g3", title: "One meaningful social contact / week", category: "Connection", progress: 45, target: "1x / week", streak: 2 },
  { id: "g4", title: "Complete weekly CBT worksheet", category: "Therapy homework", progress: 90, target: "1x / week", streak: 8 },
];

export const resources: Resource[] = [
  { id: "r1", title: "5-Minute Box Breathing", type: "Meditation", category: "Anxiety", duration: "5 min", description: "A guided breathing exercise to calm your nervous system before a stressful moment." },
  { id: "r2", title: "Grounding: The 5-4-3-2-1 Technique", type: "Exercise", category: "Anxiety", duration: "7 min", description: "A sensory grounding practice for panic, dissociation, or racing thoughts." },
  { id: "r3", title: "Understanding Cognitive Distortions", type: "Article", category: "CBT", duration: "6 min read", description: "Learn to spot the ten most common thinking traps and how to reframe them." },
  { id: "r4", title: "Body Scan for Better Sleep", type: "Audio", category: "Sleep", duration: "18 min", description: "A slow, calming body scan designed to ease you into rest." },
  { id: "r5", title: "Journaling Prompts for Grief", type: "Exercise", category: "Grief", duration: "10 min", description: "Ten gentle prompts to help you process loss at your own pace." },
  { id: "r6", title: "Building a Support Network", type: "Article", category: "Connection", duration: "5 min read", description: "Practical steps for reconnecting when isolation feels like the default." },
  { id: "r7", title: "Loving-Kindness Meditation", type: "Meditation", category: "Self-compassion", duration: "12 min", description: "A metta practice to soften self-criticism and build compassion." },
  { id: "r8", title: "Coping Ahead for Hard Conversations", type: "Exercise", category: "Family", duration: "8 min", description: "A DBT-based worksheet to prepare emotionally for a difficult talk." },
];