import { useState, useEffect } from 'react';

const useTypewriter = (words = [], typingSpeed = 150, erasingSpeed = 100, delayBetween = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    let timeout;
    const currentWord = words[wordIndex];

    if (isTyping) {
      if (displayText === currentWord) {
        // Word completed, wait before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      } else {
        // Type next character
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (displayText === '') {
        // Word erased, move to next word
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      } else {
        // Erase character
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isTyping, words, typingSpeed, erasingSpeed, delayBetween]);

  return displayText;
};

export default useTypewriter;
