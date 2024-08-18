import styles from './App.module.scss';
import { FEATURES, SPECS_URL, TITLE } from './constants';
import classNames from 'classnames';

function App() {
  const { ebayListing, heading, h1, wrapper, mainSection, payment, shipping, subSection, content } =
    styles;

  return (
    <div className={ebayListing}>
      <h1 className={classNames(h1, heading)}>{TITLE}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <div className={content}>
            <p>
              {TITLE} for sale. This limited edition coin commemorates the 2024 Pokémon World
              Championships in Honolulu. It features the iconic character Pikachu and is a must-have
              for any fan of the Pokémon Trading Card Game.
            </p>
            <p>
              The coin is an official Nintendo product manufactured in 2024 and is a great addition
              to any collection. UK seller, no reserve so grab a bargain!
            </p>

            {SPECS_URL?.length ? (
              <p>
                For full specs please see <strong>{SPECS_URL}.</strong>
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
                Only bid if you are genuinely interested in purchasing, no time wasters please!
                Payment must be made within 48 hours. Returns are not provided.
              </p>
              <p>
                Please also&nbsp;
                <strong>
                  <a href="http://shop.ebay.co.uk/merchant/pro.jdm_W0QQ_nkwZQQ_armrsZ1QQ_fromZQQ_mdoZ">
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
                All packages are shipped via a tracked delivery service either via dpd or a similar
                courier. Please note all serial numbers are recorded prior to the item being
                dispatched.
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
