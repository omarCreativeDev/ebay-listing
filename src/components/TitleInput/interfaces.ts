import { ReactNode } from 'react';

export type PlaysetSize = 2 | 3 | 4 | null;

export interface TitleInputProps {
  title: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onGenerateAiDescription: () => Promise<void>;
  aiLoading: boolean;
  playset: PlaysetSize;
  setPlayset: (value: PlaysetSize) => void;
  copyButton?: ReactNode;
}
