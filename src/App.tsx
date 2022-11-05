import styles from './App.module.scss';

function App() {
  const title = 'Apple iPhone 12 Pro Max - 256GB - Graphite (Unlocked) Excellent Condition';
  const specsUrl = 'https://support.apple.com/kb/SP832?locale=en_GB';
  const { ebayListing, heading, h1, wrapper, mainSection, payment, shipping, subSection, footer } =
    styles;
  const features = [
    'Weight: 228g',
    'Dimensions: 160.8 x 78.1 x 7.4mm',
    'Display size: 6.7-inch',
    'Resolution: 1284 x 2778',
    'Chipset: A14 Bionic',
    'RAM: 6GB',
    'Storage: 128/256/512GB',
    'Rear camera: 12MP + 12MP + 12MP',
    'Front camera: 12MP',
    'Pre-installed software: iOS 14',
    'Battery: 3,687mAh',
    'Charging: 15W wired, 7.5W wireless'
  ];

  return (
    <div className={ebayListing}>
      <h1 className={`${h1} ${heading}`}>{title}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <p>
            {title} for sale. Complete with all original contents. No visible scratches or damage.
            It's been well looked after as its had a screen protector and a case since day one. Quad
            lock phone case is also included. Selling as I have upgraded to a newer model.
          </p>
          <p>UK seller, no reserve so grab a bargain!</p>
          <p>
            For a full specs please see&nbsp;
            <strong>{specsUrl}.</strong>
          </p>

          <p>
            <strong>Features</strong>
          </p>
          <ul>
            {features.map((feature) => (
              <li>{feature}</li>
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
