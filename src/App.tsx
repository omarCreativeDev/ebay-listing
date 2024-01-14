import styles from './App.module.scss';
import { FEATURES, SPECS_URL, TITLE } from './constants';

function App() {
  const {
    ebayListing,
    heading,
    h1,
    wrapper,
    mainSection,
    payment,
    shipping,
    subSection,
    footer,
    note
  } = styles;

  return (
    <div className={ebayListing}>
      <h1 className={`${h1} ${heading}`}>{TITLE}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <p>
            {TITLE} for sale. Complete with all original contents. Watch is used and in 100% working
            order. Its in decent condition but{' '}
            <span className={note}>
              has some scratches on the screen and/or watch (Please see pics)
            </span>
            . Selling as I have upgraded to a newer model.
          </p>
          <p>
            Has been factory reset ready for new owner. UK seller, no reserve so grab a bargain!
          </p>
          <p>
            For full specs please see <strong>{SPECS_URL}.</strong>
          </p>

          <p>
            <strong>Features</strong>
          </p>
          <ul>
            {FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={subSection}>
          <div className={payment}>
            <h3 className={heading}>Payment</h3>
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

          <div className={shipping}>
            <h3 className={heading}>Shipping</h3>
            <p>
              All packages are shipped via a tracked delivery service either via dpd or a similar
              courier. Please note all serial numbers are recorded prior to the item being
              dispatched.
            </p>
            <p>
              <strong>No International shipping or collection so please don't ask.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className={footer}>
        Designed by <span>Creative Developments.net</span>
      </div>
    </div>
  );
}

export default App;
