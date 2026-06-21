import { useRef, useState } from 'react';
import styles from './App.module.scss';
import { FEATURES } from './constants';
import classNames from 'classnames';
import { Content } from './Content/Content';
import { CopyStyleAndHtmlBtn } from './CopyStyleAndHtmlBtn/CopyStyleAndHtmlBtn';
import { AccountSelector } from './AccountSelector/AccountSelector';
import { ListingInputs } from './ListingInputs/ListingInputs';
import { Logo } from './Logo/Logo';

function App() {
  const { ebayListing, heading, h1, wrapper, mainSection, spacer, content, link } = styles;
  const markupRef = useRef<HTMLDivElement>(null);

  const [ebayId, setEbayId] = useState<string>('poke_gems');
  const [title, setTitle] = useState<string>(
    'Pokemon TCG: Gothitelle 043/086 Pokeball Reverse Holo Rare - White Flare - NM'
  );
  const [description, setDescription] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const handleGenerateAiDescription = async () => {
    setAiLoading(true);
    try {
      const response = await fetch('http://localhost:5001/api/generate-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `give me a description to sell ${title} on ebay without html, icons or emojis. max 2 paragraphs only. 

          CRITICAL INSTRUCTIONS:
          - Do NOT include any conversational introduction like "Here is your description".
          - Do NOT repeat the item title or include any bold markdown headers at the start.
          `
        })
      });

      const data = await response.json();
      if (data.text) {
        setDescription(data.text);
      }
    } catch (err) {
      console.error('Failed to communicate with API server:', err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <>
      <AccountSelector currentId={ebayId} onSelectId={setEbayId} />

      <ListingInputs
        title={title}
        setTitle={setTitle}
        setDescription={setDescription}
        onGenerateAiDescription={handleGenerateAiDescription}
        aiLoading={aiLoading}
      />

      <div className={ebayListing} ref={markupRef}>
        {/*<Logo />*/}
        <h1 className={classNames(h1, heading)}>{title}</h1>

        <div className={wrapper}>
          <div className={mainSection}>
            <h2 className={heading}>Description</h2>
            <div className={content}>
              {description ? (
                <Content description={description} />
              ) : (
                <p>Click the generate button above to create description text...</p>
              )}

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
            </div>
          </div>

          <div>
            <div className={spacer}>
              <h3 className={heading}>Packaging</h3>
              <div className={content}>
                <ul>
                  <li>
                    Boxes/tins or slabs are bubble wrapped and then packed securely for extra peace
                    of mind.
                  </li>
                  <li>
                    Cards will be sent in a penny sleeve plus a card saver and then dispatched with
                    a hard card board backed envelope.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className={heading}>Shipping</h3>
              <div className={content}>
                <ul>
                  <li>
                    Combined postage available for multiple purchases. Please get in contact for
                    more info.
                  </li>
                  <li>International shipping and collection not available.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CopyStyleAndHtmlBtn targetRef={markupRef} />
    </>
  );
}

export default App;
