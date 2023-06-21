import React from 'react';
import pdffile from './pdd.pdf'

const PDFViewer = () => {
  return (
    <div>
      <iframe
        src={pdffile}
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default PDFViewer;