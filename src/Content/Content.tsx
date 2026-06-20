import { CONTENT, IS_RAW_CARD } from '../constants';

export const Content = () => {
  const maxParagraphLength = 300;

  const generateParagraphs = (text: string) => {
    const sentences = text.trim().match(/[^.!?]+[.!?]+(\s|$)/g) || [text];

    const paragraphs = [];
    let currentParagraph = '';

    sentences.forEach((sentence) => {
      const trimmedSentence = sentence.trim();
      if (!trimmedSentence) return;

      // If adding this sentence exceeds the limit, push the current paragraph and start a new one
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

    // Don't forget to push the very last paragraph chunk
    if (currentParagraph.trim()) {
      paragraphs.push(currentParagraph.trim());
    }

    return paragraphs;
  };

  const paragraphsArray = generateParagraphs(CONTENT);

  return (
    <>
      {paragraphsArray.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {IS_RAW_CARD ? (
        <p>Placed in a sleeve immediately after removal from pack so in excellent condition.</p>
      ) : null}
    </>
  );
};
