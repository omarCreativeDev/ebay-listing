import styles from './App.module.scss';

function App() {
  const title = 'Boxed White Sony PS5 Blu-Ray Disc Edition Console with 2 controllers';
  const specsUrl = 'https://www.ign.com/articles/ps5-full-specs-revealed';
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
  const features = [
    'CPU: 8x Zen 2 Cores at 3.5GHz (variable frequency)',
    'GPU: 10.28 TFLOPs, 36 CUs at 2.23GHz (variable frequency)',
    'GPU Architecture: Custom RDNA 2',
    'Memory/Interface: 16GB GDDR6/256-bit',
    'Memory Bandwidth: 448GB/s',
    'Internal Storage: Custom 825GB SSD',
    'IO Throughput: 5.5GB/s (Raw), Typical 8-9GB/s (Compressed)',
    'Expandable Storage: NVMe SSD Slot',
    'External Storage: USB HDD Support',
    'Optical Drive: 4K UHD Blu-ray Drive'
  ];

  return (
    <div className={ebayListing}>
      <h1 className={`${h1} ${heading}`}>{title}</h1>
      <div className={wrapper}>
        <div className={mainSection}>
          <h2 className={heading}>Description</h2>
          <p>
            {title} for sale. Complete with all original contents. No visible scratches or damage.
          </p>
          <p>
            <span className={note}>
              Both controllers have stick drift so could do with a repair.
            </span>{' '}
            No problems with PS5 itself at all, just needs a good clean.
          </p>
          <p>
            Has been factory reset ready for new owner. UK seller, no reserve so grab a bargain!
          </p>
          <p>
            For full specs please see <strong>{specsUrl}.</strong>
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
