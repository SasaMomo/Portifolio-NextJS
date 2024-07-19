import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Contact() {
  const refe = useRef<any>();
  return (
    <>
      <div
        id="top"
        className="bg-slate-400 dark:bg-[#202020] text-[#FFFFFF] transition-colors duration-500 ease-in-out"
      >
        <div>
          <Parallax pages={1.6} ref={refe}>
            <ParallaxLayer
              speed={2}
              factor={3}
              style={{
                backgroundImage: "url(https://i.imgur.com/uHwpwUq.jpeg)",
                backgroundSize: "cover",
              }}
              className="bg-red-800"
            ></ParallaxLayer>
            <ParallaxLayer
              offset={0.1}
              speed={1}
              onClick={() => refe.current.scrollTo(1)}
            >
              <h2 className="text-center text-2xl my-[4vh]">
                Eu gostaria muito de ler/ouvir o seu Feedback!
              </h2>
              <Image
                src="https://i.imgur.com/1uNIIzH.jpeg"
                alt="d"
                width={700}
                height={677}
                className="w-[80vw] sm:w-[60vw] mx-auto border-4 rounded-2xl border-purple-500"
              />
              <div className="flex container mx-auto my-2 active:animate-ping after:animate-ping">
                <ArrowDownIcon className="w-10 h-10 mx-auto animate-bounce my-4" />
                <p className="text-xl sm:text-2xl text-center">
                  Clique para avançar
                </p>
                <ArrowDownIcon className="w-10 h-10 mx-auto animate-bounce my-4" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={0.1}>
              <Header />
            </ParallaxLayer>
            <ParallaxLayer offset={1}>
              <div className="mx-auto text-center text-md sm:text-2xl dark:bg-[#202020] dark:text-[#FFFFFF] bg-slate-400 w-[80vw] rounded-md p-4 gap-y-2 flex flex-col">
                <p className="hover:underline hover:scale-110">
                  Email: sasa.lhcl@gmail.com
                </p>
                <p className="hover:underline hover:scale-110">
                  Telefone: (85) 99615-1455
                </p>
                <p className="hover:underline hover:scale-110">Linkedin: </p>
                <p className="hover:underline hover:scale-110">Whatsapp: </p>
                <Link
                  href="https://download1479.mediafire.com/l9b8zqh7ekigGjdr2G9RTqPwnmqQcuy8G5DVKwBklWyE_S6cQ7phn8whD61xLdywe3cq_1VvtaRIUpuGxiWQO0eR3Nv90YHHVwqmlIkBQdj8o_zvlryJoQslYf5OgLP02aITttePmxzpEQnxZTAlZU0d8EOe_K4KVTgZMIxlmJH4uQ/faiuihahqfueav0/Lucas+Henrique+V.pdf"
                  target="_blank"
                  className="flex mx-auto cursor-pointer hover:scale"
                >
                  <p className="py-1 text-md sm:text-4xl">
                    Baixe meu Currículo:  
                  </p>
                  <DocumentArrowDownIcon className="w-10 sm:w-16 hover:scale-[1.50]" />
                </Link>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1.5}
              factor={0.2}
              className="dark:bg-[#202020] dark:text-[#FFFFFF] bg-slate-400 w-[80vw] border-t-2 border-dotted"
              onClick={() => refe.current.scrollTo(0)}
            >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
}
