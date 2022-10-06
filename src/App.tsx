import styles from './App.module.scss';

function App() {
  const title =
    'Boxed Apple Watch Nike+ Series 4 (GPS + Cellular) 44 mm Space Grey Aluminum Case with Anthracite/Black Nike Sport Band';
  const specsUrl =
    'https://www.apple.com/uk/shop/product/FTXM2B/A/Refurbished-Apple-Watch-Nike-Series-4-GPS-Cellular-44mm-Space-Grey-Aluminium-Case-with-Anthracite-Black-Nike-Sport-Band';
  const { ebayListing, heading, h1, wrapper, mainSection, payment, shipping, subSection, footer } =
    styles;

  return (
    <div className={ebayListing}>
      <h1 className={`${h1} ${heading}`}>{title}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <p>
            {title} for sale. Complete with all original contents. Watch is used and in good
            condition but has some scratches on the case/screen (Please see pics). Selling as I have
            upgraded to a newer model.
          </p>
          <p>UK seller, no reserve so grab a bargain!</p>
          <p>
            For a full specs please see
            <strong>{specsUrl}.</strong>
          </p>

          <p>
            <strong>Features</strong>
          </p>
          <ul>
            <li>Originally released September 2018</li>
            <li>S4 with 64-bit dual-core processor (Up to 2x faster than S3 processor)</li>
            <li>Electrical heart sensor (ECG app)</li>
            <li>Water resistant to 50 meters1</li>
            <li>LTPO OLED Retina display with Force Touch (1000 nits brightness)</li>
            <li>Wi-Fi (802.11b/g/n 2.4GHz)</li>
            <li>Bluetooth 5.0</li>
            <li>Optical heart sensor</li>
            <li>Improved accelerometer</li>
            <li>Improved Gyroscope</li>
            <li>Ambient light sensor</li>
            <li>Capacity 16GB2</li>
            <li>All ceramic and sapphire crystal back</li>
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
