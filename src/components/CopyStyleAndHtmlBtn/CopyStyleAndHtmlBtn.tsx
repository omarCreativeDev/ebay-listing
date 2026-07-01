import { useAccount } from 'context/AccountContext/AccountContext';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { CopyButtonProps } from './interfaces';
import styles from './CopyStyleAndHtmlBtn.module.scss';

export const CopyStyleAndHtmlBtn = ({ targetRef }: CopyButtonProps) => {
  const { btn } = styles;
  const [copied, setCopied] = useState(false);
  const { ebayId } = useAccount();

  const handleCopy = async () => {
    try {
      const divHtml = targetRef.current ? targetRef.current.outerHTML : '';
      const styleTags = document.head.querySelectorAll('style');
      const styleHtml = Array.from(styleTags)
        .map((tag) => tag.outerHTML)
        .join('\n');
      const combinedContent = `${styleHtml}\n${divHtml}`;
      await navigator.clipboard.writeText(combinedContent);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button onClick={handleCopy} variant={ebayId} className={btn}>
      {copied ? '✅ Copied to Clipboard!' : 'Copy Style & HTML'}
    </Button>
  );
};
