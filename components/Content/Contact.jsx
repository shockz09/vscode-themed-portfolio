import MarkdownListElements from "../utils/syntax/MarkdownListElements";
import data from "../../data/data.json";

export default function About() {
  return (
    <>
      <section className="w-full h-[100vh] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px]">
        <div className="pl-[20px] pr-[20px]">
          <div className="text-textLightBlue">
            <p>
              <span className="text-[#8464c6]">#</span>{" "}
              <span className="text-[#c7a06f]">Contact Me</span>
              <br /> <br />
              {data.contact.map((c, i) => (
                <MarkdownListElements key={i} name={c.name} link={c.url} />
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
