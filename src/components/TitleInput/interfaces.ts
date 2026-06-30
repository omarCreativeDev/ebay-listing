export interface TitleInputProps {
  title: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onGenerateAiDescription: () => Promise<void>;
  aiLoading: boolean;
}
