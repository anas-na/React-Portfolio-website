import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import AnasNahilResume from "../resume/AnasNahilResume.pdf"

const Resume = () => {
    
    return (
        <div id="resume">
             <Document file={AnasNahilResume}>
      <Page pageNumber={1} />
    </Document>
        </div>
    )
}

export default Resume;
