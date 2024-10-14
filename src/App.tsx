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
              {TITLE} for sale. A total of 23 cards will be sent, 2 of which are unused code cards.
            </p>
            <p>
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
                <strong>{SPECS_URL}.</strong>
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
              <ul>
                <li>Only bid/buy if you are genuinely interested in purchasing.</li>
                <li>Payment must be made within 48 hours.</li>
                <li>Returns are not provided.</li>
              </ul>
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
              <ul>
                <li>All packages shipped via tracked delivery.</li>
                <li>All serial numbers recorded prior to dispatch.</li>
              </ul>
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
