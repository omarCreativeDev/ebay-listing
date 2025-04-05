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
              For sale are 5x Pokémon TCG Fusion Arts Booster Packs in Korean language, factory
              sealed and brand new. This is a rare and highly sought-after set from the Pokémon
              Trading Card Game series, featuring unique artwork and powerful cards that are
              exclusive to the Korean release. Each pack is sealed in its original packaging,
              ensuring authenticity and collectibility.
            </p>
            <p>
              Whether you're a dedicated collector or a competitive player, these packs offer the
              chance to pull stunning cards from the Fusion Arts expansion. Great for expanding your
              collection or as a unique gift for any Pokémon fan.
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
