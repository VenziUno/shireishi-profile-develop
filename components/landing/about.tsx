interface Props {
  text: string;
}

const About: React.FC<Props> = ({ text }) => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center h-screen sm:max-h-[976px] max-h-[600px]">
        <div className="flex flex-col justify-center items-center w-full max-w-screen-xl about__background gap-8">
          <p className="text-center sm:text-2xl text-xl text-[#292929] px-10 pt-[72px]">
            ABOUT US
          </p>
          <p className="text-center md:text-2xl sm:text-lg text-base candarab text-[#292929] max-w-screen-lg pb-32 xl:px-0 lg:px-32 px-12" dangerouslySetInnerHTML={{ __html: text }}>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
