interface ContentProps {
  description: string;
}

export const Content = ({ description }: ContentProps) => {
  const maxParagraphLength = 450;

  const generateParagraphs = (text: string) => {
    const sentences = text.trim().match(/[^.!?]+[.!?]+(\s|$)/g) || [text];

    const paragraphs = [];
    let currentParagraph = '';

    sentences.forEach((sentence) => {
      const trimmedSentence = sentence.trim();
      if (!trimmedSentence) return;

      if (
        currentParagraph.length + trimmedSentence.length > maxParagraphLength &&
        currentParagraph.length > 0
      ) {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = trimmedSentence + ' ';
      } else {
        currentParagraph += trimmedSentence + ' ';
      }
    });

    if (currentParagraph.trim()) {
      paragraphs.push(currentParagraph.trim());
    }

    return paragraphs;
  };

  // 1. Chunk the live description string from props instead of the static constant
  const paragraphsArray = generateParagraphs(description);

  return (
    <>
      {paragraphsArray.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};
