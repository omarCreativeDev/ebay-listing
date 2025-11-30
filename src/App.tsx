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
              Pokemon TCG: Brassius 135/131 Trainer Ultra Rare from the Prismatic Evolutions set.
              This card is in Near Mint condition and has been carefully stored in a protective
              sleeve. Surfaces, edges, and corners show minimal to no wear, consistent with NM
              grading standards.
            </p>

            <p>
              The card features vibrant artwork and crisp text, making it an excellent addition for
              collectors or players looking to enhance their deck. This is an authentic Ultra Rare
              pull and comes from a smoke-free environment. A great opportunity to add a standout
              Trainer card to your collection.
            </p>

            {/*<p>*/}
            {/*  Multiple copies of this card are available, and 1 will be sent at random upon*/}
            {/*  purchase.*/}
            {/*</p>*/}

            {/*<p>*/}
            {/*  The sleeves are made from durable material, offering excellent protection against wear*/}
            {/*  and tear while maintaining a smooth shuffle feel. Whether you're an avid tournament*/}
            {/*  player or a passionate collector, these Misty & Psyduck sleeves add both style and*/}
            {/*  functionality to your card deck.*/}
            {/*</p>*/}

            {/*<p>*/}
            {/*  This playmat is brand new and sealed, never used or opened. It is perfect for*/}
            {/*  collectors, competitive players, or fans of the Hoenn region and its characters. Due*/}
            {/*  to its limited release in Japan, it is a rare and sought-after item for international*/}
            {/*  Pokémon enthusiasts.*/}
            {/*</p>*/}

            {/*<p>*/}
            {/*  The item is authentic, factory-sealed, and has never been opened. Ships quickly and*/}
            {/*  securely from a smoke-free environment. Don't miss your chance to own this*/}
            {/*  sought-after Japanese exclusive accessory.*/}
            {/*</p>*/}

            {/*<p>Placed in a sleeve immediately after removal from pack so in excellent condition.</p>*/}

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
