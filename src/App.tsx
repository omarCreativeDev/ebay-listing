import styles from './App.module.scss';
import { EBAY_ID, FEATURES, TITLE } from './constants';
import classNames from 'classnames';
import { Content } from './Content/Content';
import { Logo } from './Logo/Logo';

function App() {
  const { ebayListing, heading, h1, wrapper, mainSection, spacer, content, link } = styles;

  return (
    <div className={ebayListing}>
      {/*<Logo />*/}
      <h1 className={classNames(h1, heading)}>{TITLE}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <div className={content}>
            <Content />

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
                  href={`https://www.ebay.co.uk/sch/${EBAY_ID}/m.html`}
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
