import { useEffect, useState } from 'react';
import './Accordion.css';

export const items = [
  {
    title: 'HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    title: 'CSS',
    content:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    title: 'JavaScript',
    content:
      'JavaScript is a programming language that is one of the core technologies of the Web.',
  },
];

export default function AccordionAnswerObj() {
  const [openIndexes, setOpenIndexes] = useState(new Set());


  const toggleHandler = (index) =>{

    setOpenIndexes(prev => {
      const next = new Set(prev)
      if(next.has(index)){
        next.delete(index)
      }else{
        next.add(index)
      }

      return next

    })
  }

  return (
    <>
      {items?.map((item, idx) => {
        const isOpen = openIndexes.has(idx);

        return (
          <li key={`${item?.title}-${idx}`}>
            <button onClick={()=>toggleHandler(idx)}>
              {item?.title}
              <span>{isOpen ? '▼' : '▶'}</span>
            </button>
            {isOpen && <div>{item?.content}</div>}
          </li>
        );
      })}
    </>
  );
}
