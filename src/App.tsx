import styles from './App.module.scss';
import { FEATURES, KEYWORDS, SPECS_URL, TITLE } from './constants';
import classNames from 'classnames';
import { Logo } from './Logo/Logo';

function App() {
  const { ebayListing, heading, h1, wrapper, mainSection, payment, shipping, subSection, content } =
    styles;

  return (
    <div className={ebayListing}>
      <Logo />
      <h1 className={classNames(h1, heading)}>{KEYWORDS}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <div className={content}>
            <p>
              {TITLE} for sale. A total of 33 cards will be sent, 4 of which are unused code cards.
              All cards have been placed in a sleeve immediately after they were taken out from pack
              so they are all in excellent condition. What you see in the pictures is exactly what
              you will receive.
            </p>

            <p>
              This will make a great gift for anyone interested in Pokemon, free postage and 1penny
              action start so grab an absolute bargain!
            </p>

            {SPECS_URL?.length ? (
              <p>
                To see full card list available in Crown Zenith set please visit{' '}
                <a href={SPECS_URL} target="_blank" rel="noreferrer">
                  <strong>{SPECS_URL}.</strong>
                </a>
              </p>
            ) : null}

            {FEATURES.length > 0 ? (
              <>
                <p>
                  <strong>Features</strong>
                </p>

                <ul>
                  {FEATURES.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <div className={subSection}>
          <div className={payment}>
            <h3 className={heading}>Payment</h3>
            <div className={content}>
              <p>
                Only bid/buy if you are genuinely interested in purchasing, no time wasters please!
                Payment must be made within 48 hours. Returns are not provided.
              </p>
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

          <div className={shipping}>
            <h3 className={heading}>Shipping</h3>
            <div className={content}>
              <p>
                All packages are shipped via a tracked delivery service. All serial numbers are
                recorded prior to the item being dispatched.
              </p>
              <p>
                <strong>International shipping and collection not available.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
