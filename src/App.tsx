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
  const [description, setDescription] = useState<string>(
    "Gothitelle 043/086 Poké Ball Reverse Holo Rare from the White Flare set. Card is in Near Mint (NM) condition, showing minimal signs of handling and maintaining excellent overall appearance. The Poké Ball Reverse Holo pattern displays beautifully, making this a great addition for collectors looking to complete their White Flare master set or add a standout holographic card to their collection. Please review photos carefully for the card's exact condition. The card will be packaged securely to ensure safe delivery."
  );

  return (
    <>
      <AccountSelector currentId={ebayId} onSelectId={setEbayId} />

      <ListingInputs
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />

      <div className={ebayListing} ref={markupRef}>
        <h1 className={classNames(h1, heading)}>{title}</h1>
        {/*<Logo />*/}

        <div className={wrapper}>
          <div className={mainSection}>
            <h2 className={heading}>Description</h2>
            <div className={content}>
              <Content description={description} />

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
