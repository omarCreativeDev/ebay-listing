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
              {TITLE} for sale. Comes boxed with all original contents. In excellent condition with
              86% battery capacity. No visible major scratches or marks as it has been kept in a
              case alongside a screen protector since purchase but do expect some minor wear and
              tear with a 2 year old phone.
            </p>
            <p>
              Phone is factory unlocked with no sim restrictions, selling due to upgrade. The phone
              is in perfect working order. Screen protector has some damage (see pics) but the
              screen itself is in perfect condition. Included is also a quad lock case which is not
              in the best condition but still works perfectly (it seems to have lost its shape in
              recent months).
            </p>

            {SPECS_URL?.length ? (
              <p>
                For full specs please visit{' '}
                <a href={SPECS_URL} target="_blank" rel="noreferrer">
                  <strong>{SPECS_URL}.</strong>
                </a>
              </p>
            ) : null}

            <p>
              <strong>Features</strong>
            </p>

            <ul>
              {FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
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
