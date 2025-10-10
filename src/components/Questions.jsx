'use client';

import { questions } from '@/assets';
import Heading from './sub/Heading';
import Question from './sub/Question';

const Questions = () => {
  return (
    <div
      id="questions"
      className="min-h-screen ml-[30px] py-20 px-6 md:px-20 lg:px-40 xl:px-60"
    >
      <Heading text={'Questions & Answers'} />
      <div>
        <ul className="flex flex-col gap-y-3">
          {questions.map((question, i) => (
            <Question key={i} data={question} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Questions;
