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
              Up for sale is a stunning PSA 9 MINT Skyla 072/072 Full Art Trainer from the Shining
              Fates set—a must-have for serious Pokémon collectors and fans of Full Art Trainer
              cards!
            </p>
            <p>
              This Skyla card boasts vibrant colors, flawless artwork, and top-notch PSA grading,
              making it a great addition to any collection or investment portfolio. Shining Fates is
              an iconic set, and this beautifully graded card will stand out in any display. Don’t
              miss your chance to own this gem!
            </p>

            {/*<p>*/}
            {/*  Placed in a sleeve immediately after it was removed from the pack so its in excellent*/}
            {/*  condition.*/}
            {/*</p>*/}

            {SPECS_URL?.length ? (
              <p>
                To see full card list available in Crown Zenith set please visit{' '}
                <strong className={link}>{SPECS_URL}.</strong>
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
                <li>All items are double bubble wrapped and then packed securely.</li>
                <li>Combined postage available for multiple purchases.</li>
                <li>All serial numbers recorded prior to dispatch.</li>
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
