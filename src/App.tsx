import styles from './App.module.scss';
import { FEATURES, SPECS_URL, TITLE } from './constants';
import classNames from 'classnames';
import { Logo } from './Logo/Logo';

function App() {
  const { ebayListing, heading, h1, wrapper, mainSection, spacer, content, link } = styles;

  return (
    <div className={ebayListing}>
      <Logo />
      <h1 className={classNames(h1, heading)}>{TITLE}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <div className={content}>
            <p>
              Enhance your Pokémon TCG collection with the Max Rod 116/131 from SV8.5 Prismatic
              Evolutions! This Holo Ace Spec Trainer card is a must-have for competitive players and
              collectors alike. With its powerful effect and stunning holographic design, the Max
              Rod stands out as a strategic asset in any deck.
            </p>
            <p>
              Perfect for collectors looking to complete their Prismatic Evolutions set or players
              seeking a powerful Ace Spec Trainer card to gain an edge in battle.
            </p>

            <p>
              Placed in a sleeve immediately after it was removed from the pack so its in excellent
              condition.
            </p>

            {SPECS_URL?.length ? (
              <p>
                To see full card list available in Crown Zenith set please visit{' '}
                <strong className={link}>{SPECS_URL}.</strong>
              </p>
            ) : null}

            {FEATURES.length > 0 ? (
              <>
                <p>
                  <strong>What's included</strong>
                </p>

                <ul>
                  {FEATURES.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            ) : null}

            <p>
              Please also&nbsp;
              <strong>
                <a href="https://www.ebay.co.uk/sch/i.html?_ssn=poke_relics">
                  check out my other auctions
                </a>
              </strong>
              .
            </p>
          </div>
        </div>

        <div>
          <div className={spacer}>
            <h3 className={heading}>Shipping</h3>
            <div className={content}>
              <ul>
                <li>Boxes/tins or slabs are double bubble wrapped and then packed securely.</li>
                <li>
                  Cards will be sent in a penny sleeve plus a card saver and then carefully
                  packaged.
                </li>
                <li>Combined postage available for multiple purchases.</li>
                <li>International shipping and collection not available.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className={heading}>Payment</h3>
            <div className={content}>
              <ul>
                <li>Payment must be made within 48 hours.</li>
                <li>Returns are not provided.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
