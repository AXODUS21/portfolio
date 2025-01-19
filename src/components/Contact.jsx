import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join The Web Space
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild your vision <br/>  and make <br/> y<b>o</b>ur dreams a re<b>a</b>lity."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <a href="https://calendly.com/lubi-axellerosh/30min" target="_blank">
            <Button title="contact me" containerClass="mt-10 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
