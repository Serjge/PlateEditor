import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import 'App.css'

export const IFrame = ({ children, ...props }: any) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode =
    contentRef &&
    contentRef.contentWindow &&
    contentRef.contentWindow.document.body;
  // console.log(contentRef.contentWindow)
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe  style={{width: '100%', height: '100%'}} {...props} ref={setContentRef}>
      {mountNode && createPortal(React.Children.only(children), mountNode)}
    </iframe>
  );
};