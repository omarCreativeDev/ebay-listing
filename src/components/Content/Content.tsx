import { useAccount } from 'context/AccountContext/AccountContext';
import { ContentProps } from './interfaces';
import { FEATURES } from './constants';
import styles from './Content.module.scss';

export const Content = ({ description }: ContentProps) => {
  const { ebayId } = useAccount();
  const { link } = styles;
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

      {FEATURES.length > 0 ? (
        <>
          <p>
            <strong>Features:</strong>
          </p>

          <ul>
            {FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      ) : null}

      <p>
        Please also checkout&nbsp;
        <strong>
          <a
            href={`https://www.ebay.co.uk/sch/${ebayId}/m.html`}
            target="_blank"
            className={link}
            rel="noreferrer"
          >
            our other listings
          </a>
        </strong>
        .
      </p>
    </>
  );
};
