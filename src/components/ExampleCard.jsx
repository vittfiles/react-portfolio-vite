import React from "react";

function ExampleCard({ title, img, tags, info, index, demo, code }) {
  let defClass =
    "flex flex-col text-start p-4 my-4 bg-white rounded-lg w-full sm:w-[49%] md:w-[32%] sm:mr-[2%]";
  if (index === 1) {
    defClass =
      "flex flex-col text-start p-4 my-4 bg-white rounded-lg w-full sm:w-[49%] md:w-[32%] md:mr-[2%]";
  }
  if (index === 2) {
    defClass =
      "flex flex-col text-start p-4 my-4 bg-white rounded-lg w-full sm:w-[49%] md:w-[32%]";
  }
  return (
    <article className={defClass}>
      <img className="rounded-lg aspect-[4/3] object-cover" src={img} />
      <ul className="font-medium text-base text-black-400 pt-4 flex flex-wrap">
        {tags.map((el) => (
          <li className="inline pr-2" key={el}>
            #{el}
          </li>
        ))}
      </ul>
      <h2 className="pt-4 pb-2 text-black-400 font-semibold text-2xl mt-auto">
        {title}
      </h2>
      <p className="text-black-200 font-medium text-base pb-4">{info}</p>
      <div className="py-4">
        {demo && (
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={demo}
            className="font-medium text-lg text-white px-7 py-1 border-2 border-blues rounded-xl bg-blues mr-2 hover:text-blues hover:bg-white"
          >
            Demo
          </a>
        )}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={code}
          className="font-medium text-lg text-blues px-6 py-1 border-2 border-blues rounded-xl hover:text-white hover:bg-blues"
        >
          Code
        </a>
      </div>
    </article>
  );
}

export default ExampleCard;
