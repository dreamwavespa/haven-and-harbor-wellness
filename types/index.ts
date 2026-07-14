export interface Service {
  id: string;
  name: string;
  category: "Individual" | "Group" | "Psychiatry" | "Teen & Family" | "Workshops" | "Crisis";
  format: "In-person" | "Virtual" | "Both";
  duration: string;
  price: string;
  description: string;
  tags: string[];
}

export interface Provider {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  nextAvailable: string;
}

export interface Goal {
  id: string;
  title: string;
  category: string;
  progress: number;
  target: string;
  streak: number;
}

export interface Resource {
  id: string;
  title: string;
  type: "Meditation" | "Article" | "Exercise" | "Audio";
  category: string;
  duration: string;
  description: string;
}