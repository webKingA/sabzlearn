import React from 'react'
import './According.css';
import Accordion from 'react-bootstrap/Accordion';

export default function According({title , h3}) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {h3}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
