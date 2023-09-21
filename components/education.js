import Image from "next/image";
import Section from "./section";

export default function Education(params) {
  return (
    <>
      <div className="bg-zinc-100">
        <Section>
          <div className="flex justify-between text-center flex-col md:flex-row">
            <div className="md:w-[32%] w-full box-border p-10 md:mb-0 mb-3 shadow-lg shadow-grey-500/50 rounded bg-white">
              <a href="https://www.tech.ac.jp/" target="_blank">
                <Image
                  priority
                  src="/assets/images/logo_edu_techc.png"
                  className="mx-auto mb-5"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "120px" }}
                  alt=""
                />
              </a>
              <h3 className="text-lg font-semibold">
                Tokyo Design Technology Center College
              </h3>
              <p className="mt-3 mb-2">
                Diploma in Web Creator Course - Full Time
              </p>
              <p className="text-sm text-zinc-500">Apr 2015 - Mar 2018</p>
            </div>
            <div className="md:w-[32%] w-full box-border p-10 md:mb-0 mb-3 shadow-lg shadow-grey-500/50 rounded bg-white">
              <a
                href="https://www.tokyo-fukushi.ac.jp/english/japaneselanguage.html"
                target="_blank"
              >
                <Image
                  priority
                  src="/assets/images/logo_edu_TUSW.png"
                  className="mx-auto mb-5"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "120px" }}
                  alt=""
                />
              </a>
              <h3 className="text-lg font-semibold">
                Tokyo University Of Social Welfare
              </h3>
              <p className="mt-3 mb-2">Japanese - Part Time</p>
              <p className="text-sm text-zinc-500">Oct 2013 - Mar 2015</p>
            </div>
            <div className="md:w-[32%] w-full box-border p-10 md:mb-0 mb-3 shadow-lg shadow-grey-500/50 rounded bg-white">
              <a href="https://www.mufl.edu.mm/" target="_blank">
                <Image
                  priority
                  src="/assets/images/logo_edu_mufl.png"
                  className="mx-auto mb-5"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "auto", height: "120px" }}
                  alt=""
                />
              </a>
              <h3 className="text-lg font-semibold">
                University Of Foreign Languages, Mandalay
              </h3>
              <p className="mt-3 mb-2">
                Bachelor of Arts (Japanese) - Full Time
              </p>
              <p className="text-sm text-zinc-500">Oct 2009 - Sep 2012</p>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
