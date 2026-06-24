import { RefObject, useState } from 'react';
import classNames from 'classnames';
import styles from './CopyStyleAndHtmlBtn.module.scss';

interface CopyButtonProps {
  targetRef: RefObject<HTMLDivElement | null>;
}

export const CopyStyleAndHtmlBtn = ({ targetRef }: CopyButtonProps) => {
  const { btn, copySuccess } = styles;
  const [copied, setCopied] = useState(false);

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
    <button onClick={handleCopy} className={classNames(btn, copied ? copySuccess : '')}>
      {copied ? 'Copied to Clipboard! ✅' : 'Copy Style & HTML'}
    </button>
  );
};
