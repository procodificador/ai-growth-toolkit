
export type ContentType = 'viral-hooks' | 'thread-writer' | 'video-script' | 'ad-copy';

export interface ContentResult {
  ideas?: string[];
  hook?: string;
  cta: string;
  script?: string;
  steps?: string[];
  headline?: string;
}

export interface Message {
  role: 'user' | 'bot';
  text: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'AI' | 'Growth' | 'Dev';
}
