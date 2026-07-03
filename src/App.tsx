import { useAccount } from 'context/AccountContext/AccountContext';
import { useRef, useState } from 'react';
import styles from './App.module.scss';
import classNames from 'classnames';
import { Content } from 'components/Content/Content';
import { CopyStyleAndHtmlBtn } from 'components/CopyStyleAndHtmlBtn/CopyStyleAndHtmlBtn';
import { AccountSelector } from 'components/AccountSelector/AccountSelector';
import { TitleInput } from 'components/TitleInput/TitleInput';
import { generateAiDescription } from 'services/aiService';
import { Logo } from 'components/Logo/Logo';

function App() {
  const { generator, ebayListing, heading, h1, wrapper, spacer, content, card, fallBackMsg } =
    styles;
  const markupRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const { ebayId } = useAccount();

  const handleGenerateAiDescription = async () => {
    setAiLoading(true);

    try {
      const generatedText = await generateAiDescription(title);

      if (generatedText) {
        setDescription(generatedText);
      }
    } catch (err) {
      console.error('Failed to communicate with API server:', err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <>
      <div className={generator}>
        <AccountSelector />

        <TitleInput
          title={title}
          setTitle={setTitle}
          setDescription={setDescription}
          onGenerateAiDescription={handleGenerateAiDescription}
          aiLoading={aiLoading}
        />

        <CopyStyleAndHtmlBtn targetRef={markupRef} />
      </div>

      {!title.trim().length && (
        <h1 className={fallBackMsg}>Please enter a title to generate description...</h1>
      )}

      {aiLoading && <h1 className={fallBackMsg}>Loading...</h1>}

      {!aiLoading && title.trim().length && description?.length ? (
        <div className={ebayListing} ref={markupRef}>
          <Logo />
          <h1 className={classNames(h1, heading, styles[ebayId])}>{title}</h1>

          <div className={wrapper}>
            <div className={card}>
              <h2 className={classNames(heading, styles[ebayId])}>Description</h2>
              <div className={content}>
                {description ? (
                  <Content description={description} />
                ) : (
                  <p>Click the generate button above to create description text...</p>
                )}
              </div>
            </div>

            <div>
              <div className={classNames(card, spacer)}>
                <h3 className={classNames(heading, styles[ebayId])}>Packaging</h3>
                <div className={content}>
                  <ul>
                    <li>
                      Boxes/tins or slabs are bubble wrapped and then packed securely for extra
                      peace of mind.
                    </li>
                    <li>
                      Cards will be sent in a penny sleeve plus a card saver and then dispatched
                      with a hard card board backed envelope.
                    </li>
                  </ul>
                </div>
              </div>

              <div className={card}>
                <h3 className={classNames(heading, styles[ebayId])}>Shipping</h3>
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
      ) : null}
    </>
  );
}

export default App;
