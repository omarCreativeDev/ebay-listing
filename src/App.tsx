import styles from './App.module.scss';
import { FEATURES, TITLE } from './constants';
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
              Pokemon TCG: Sneasel 061/131 Master Ball Reverse Holo from the Prismatic Evolutions
              set is a standout collectible for players and collectors alike. This card features the
              highly sought-after Master Ball reverse holo pattern, giving it a premium look that
              shines beautifully in any collection.
            </p>

            <p>
              Card number 061/131, it showcases Sneasel in crisp detail with vibrant artwork true to
              the Prismatic Evolutions release. The card is in Near Mint condition, showing minimal
              wear and clean edges, and has been carefully stored to preserve its quality. A great
              addition for Master Ball reverse holo collectors, Sneasel fans, or anyone looking to
              complete their Prismatic Evolutions set.
            </p>

            <p>Placed in a sleeve immediately after removal from pack so in excellent condition.</p>

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
              Please also checkout&nbsp;
              <strong>
                <a
                  href="https://www.ebay.co.uk/sch/poke_relics/m.html"
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
                  Boxes/tins or slabs are bubble wrapped and then packed securely for extra peace of
                  mind.
                </li>
                <li>
                  Cards will be sent in a penny sleeve plus a card saver and then dispatched with a
                  hard card board backed envelope.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className={heading}>Shipping</h3>
            <div className={content}>
              <ul>
                <li>
                  Combined postage available for multiple purchases. Please get in contact for more
                  info.
                </li>
                <li>International shipping and collection not available.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
