/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeCointainer } from "../styles/components/home";
import Masonry from "react-responsive-masonry";

const Home: NextPage = () => {
  return (
    <HomeCointainer>
      <Head>
        <title>Desejo Ardente</title>
        <meta
          name="description"
          content="DESCUBRA O SEGREDO PARA FAZER ELE CORRER ATRÁS DE VOCÊ, SENTIR SUA FALTA COMO NUNCA E QUERER ASSUMIR UM RELACIONAMENTO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center flex-col">
        <section className="relative bg-[url(/background.png)] bg-cover flex w-full justify-center items-center flex-col px-5 pb-10">
          <img src="logo.png" alt="logo" className="w-[180px]" />
          <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
            <img
              src="/img1.png"
              alt="person"
              className="max-w-[550px] w-[80%] mt-14 lg:mt-0"
            />
            <div className="flex flex-col relative w-full">
              <img
                src="/img2.png"
                alt="butterfly"
                className="absolute  w-[80px] lg:w-[120px] top-[-60px] right-[40px] lg:top-[-150px]"
              ></img>
              <p className="text-[#7F1D1D] text-[32.5px] mt-10 lg:mt-0 lg:text-[45px] font-bold leading-tight w-full max-w-[720px]">
                DESCUBRA O SEGREDO PARA FAZER ELE CORRER ATRÁS DE VOCÊ,{" "}
                <span className="bg-white">SENTIR SUA FALTA COMO NUNCA</span> E
                QUERER ASSUMIR UM RELACIONAMENTO
              </p>
              <p className="text-[#7F1D1D] text-[22.5px] lg:text-[35px] mt-8 leading-tight w-full max-w-[650px]">
                ⚠️ Importante: Depois de usar essas técnicas, você terá ele nas
                suas mãos, portanto, use com moderação 😱
              </p>
            </div>
          </div>
          <div className="flex w-full absolute bottom-[-50px] justify-center">
            <img alt="setinha" src="/btn.png"></img>
          </div>
        </section>
        <section className="flex flex-col items-center w-full pb-[50px]">
          <div className="wrapper h-full w-full max-w-[1200px] mt-[80px] flex flex-col items-start">
            <h3 className="text-[#7F1D1D] px-5 xl:px-0 text-[32.5px] lg:text-[48px] leading-none max-w-[900px] font-bold">
              Mas antes, preciso que preste atenção em tudo o que preparei aqui.
            </h3>
            <div className="px-5 xl:px-0 flex w-full flex-col items-center lg:justify-start lg:flex-row lg:items-center justify-center">
              <div className="flex flex-col justify-start mt-5 gap-y-4">
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  O método secreto para fazer ele vir atrás de você e ser
                  valorizada pelos homens contendo dentro deste livro funciona
                  independente do seu relacionamento atual, seja solteira,
                  ficando, namorando, casamento ou algum ex relacionamento.
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  Depois de você aprender os o que ensinamos, você vai despertar
                  a atenção dele, fazer ele vir atrás, sentir um medo de te
                  perder e um desejo muito forte de fazer tudo o que puder para
                  ter você.
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  Na verdade, assim que você aplicar este método com ele,
                  automaticamente ele vai esquecer qualquer outra mulher e vai
                  pensar em você o dia inteiro.
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  Ele vai enviar mensagens amorosas, vai te dar o valor que
                  merece, ser carinhoso e vai te ligar no meio do dia para te
                  falar: "Amor, estou cheio de saudades" 😍.
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  E não importa...
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  💔 Se você não atrai o homem que você quer;
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  💔 Se o seu ficante sumiu;
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  💔 Se o namorado está distante;
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  💔 Se o casamento está acabando;
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  💔 Se o término de vocês foi feio;
                </p>

                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  A partir de hoje, ele não vai querer ficar um dia sem sentir
                  seu cheiro, sem ouvir a sua voz, sem mandar mensagem...
                </p>
                <p className="text-[24px] font-light text-[#7F1D1D] ">
                  Você vai se mostrar uma nova mulher, que Ele Nunca Vai
                  Esquecer.
                </p>
                <p className="text-[24px] font-medium text-[#7F1D1D] ">
                  Você vai corrigir o passado e começar um futuro novo e
                  apaixonado, acabando com emoções ruins do passado e
                  construindo um futuro juntos.
                </p>
              </div>
              <img
                src="/img3.png"
                className="lg:max-w-[450px] max-w-[300px] w-full mt-[40px] lg:mt-0"
                alt="person2"
              ></img>
            </div>
          </div>
        </section>
        <section className="bg-[#fca5a5] w-full flex-col py-[70px] flex justify-center items-center">
          <h3 className="text-[#7F1D1D] text-[35px] lg:text-[50px] font-medium leading-none text-center max-w-[490px]">
            Veja os relatos reais das nossas alunas
          </h3>
          <div className="flex md:hidden px-5 w-full flex-col items-center gap-y-5 pt-[20px]">
            <img
              className="rounded-xl border-4 border-white"
              src="/relatos/relato1.jpg"
              alt=""
            />
            <img
              className="rounded-xl border-4 border-white"
              src="/relatos/relato2.jpg"
              alt=""
            />
            <img
              className="rounded-xl border-4  border-white"
              src="/relatos/relato3.jpg"
              alt=""
            />
            <img
              className="rounded-xl border-4 border-white"
              src="/relatos/relato4.jpg"
              alt=""
            />
            <img
              className="rounded-md border-4 border-white"
              src="/relatos/relato5.jpg"
              alt=""
            />
            <img
              className="rounded-md border-4 border-white"
              src="/relatos/relato6.jpeg"
              alt=""
            />
            <img
              className="rounded-md border-4 border-white"
              src="/relatos/relato7.jpeg"
              alt=""
            />

            <img
              className="rounded-md border-4  border-white"
              src="/relatos/relato8.jpeg"
              alt=""
            />
          </div>
          <div className="hidden md:flex w-full px-5 justify-center">
            <Masonry
              columnsCount={3}
              gutter="30px"
              className=" gridWrapper w-full mt-[50px] max-w-[1000px]"
            >
              <img
                className="rounded-xl border-4 border-white"
                src="/relatos/relato1.jpg"
                alt=""
              />
              <img
                className="rounded-xl border-4 border-white"
                src="/relatos/relato2.jpg"
                alt=""
              />
              <img
                className="rounded-xl border-4  border-white"
                src="/relatos/relato3.jpg"
                alt=""
              />
              <img
                className="rounded-xl border-4 border-white"
                src="/relatos/relato4.jpg"
                alt=""
              />
              <img
                className="rounded-md border-4 border-white"
                src="/relatos/relato5.jpg"
                alt=""
              />
              <img
                className="rounded-md border-4 border-white"
                src="/relatos/relato6.jpeg"
                alt=""
              />
              <img src="" alt=""></img>
              <img
                className="rounded-md border-4 border-white"
                src="/relatos/relato7.jpeg"
                alt=""
              />

              <img
                className="rounded-md border-4  border-white"
                src="/relatos/relato8.jpeg"
                alt=""
              />
            </Masonry>
          </div>
        </section>
        <section className=" bg-[#7f1d1d] px-5 w-full flex justify-center items-center py-[90px] relative">
          <h3 className="text-[#fca5a5] text-[45px] text-center font-bold leading-none max-w-[1000px]">
            E eu separei este método da seguinte forma (Veja tudo o que você vai
            aprender)
          </h3>
          <div className="flex w-full absolute bottom-[-50px] justify-center">
            <img alt="setinha" src="/btn.png" className="w-[80px] z-[2]"></img>
          </div>
        </section>
        <section className="w-full py-[80px] relative flex flex-col items-center">
          <h3 className="text-[42px] text-[#303030] font-bold max-w-[700px] leading-none text-center">
            E depois do método, você vai:
          </h3>
          <p className="mt-5 text-xl max-w-[700px] font-light text-center">
            Veja como você estará depois de entrar na nossa turma:
          </p>
          <section className="mt-6 flex flex-col justify-start w-full max-w-[700px]  items-center">
            <div className="w-full h-[55px] bg-[#f5f5f5] rounded-t-xl"></div>
            <div className="w-full h-[55px] "></div>
            <div className="w-full h-[55px] bg-[#f5f5f5]"></div>
            <div className="w-full h-[55px] "></div>
            <div className="w-full h-[55px] bg-[#f5f5f5]"></div>
            <div className="w-full h-[55px] "></div>
            <div className="w-full h-[55px] bg-[#f5f5f5] rounded-b-xl"></div>
          </section>
          <h3 className="text-[42px] mt-14 text-[#303030] font-bold max-w-[620px] leading-none text-center">
            E isso vai transformar você em uma nova mulher 😍
          </h3>
        </section>
        <section className=" bg-[#7f1d1d] gap-y-3 px-5 w-full flex flex-col justify-center items-center py-[60px] relative">
          <p className=" text-[#fcd34d] text-[45px] text-center font-bold leading-normal max-w-[1000px]">
            E a hora é agora...
          </p>
          <p className="text-white text-[20px] lg:text-[30px] text-center font-light leading-normal max-w-[800px]">
            Você já percebeu quanto nosso método é poderoso...
          </p>
          <p className="text-white text-[20px] lg:text-[30px] text-center font-light leading-normal max-w-[1000px]">
            Já viu a transformação na vida das nossas alunas...
          </p>
          <p className="text-white text-[20px] lg:text-[30px] text-center font-medium leading-normal max-w-[1000px]">
            Eu vou te fazer o meu melhor convite!
          </p>
          <p className="text-white text-[20px] lg:text-[30px] text-center font-light leading-normal max-w-[1000px]">
            Vou liberar poucas vagas para você entrar no nosso grupo.
          </p>
          <p className="text-white text-[20px] lg:text-[30px] text-center font-light leading-normal max-w-[1000px]">
            Agora responda, você quer ser valorizada como nunca antes, fazer ele
            vir atrás de você e ter o relacionamento que você merece?
          </p>
          <p className="text-white text-[20px] lg:text-[30px] text-center font-light leading-normal max-w-[1000px]">
            Se você respondeu sim, veja o que preparamos para você...
          </p>
        </section>
        <section className="w-full py-[80px] relative flex flex-col items-center">
          <h3 className="text-[52px] text-[#303030] font-medium max-w-[700px] leading-none text-center">
            Liberamos 3 vagas com um desconto exclusivo
          </h3>
          <p className="mt-5 text-2xl max-w-[700px] text-center">
            Essa oportunidade é somente agora. Quando as vagas esgotarem, não
            sei quando iremos abrir uma nova turma 😱
          </p>
        </section>
        <section className="py-[30px] bg-[#f8f8f8] flex w-full justify-center items-center">
          <h3 className="text-2xl text-[#008957] text-center">
            Você e outras 13 mulheres estão no site neste momento.
          </h3>
        </section>

        <section className=" bg-[#2a2627] px-5 w-full flex justify-center items-center py-[120px] relative">
          <div className="lg:justify-between flex flex-col lg:flex-row w-full items-center max-w-[1000px]">
            <img alt="" src="/compras/garantia.png" className="w-[340px]"></img>
            <div className="flex flex-col ml-5 lg:items-start items-center">
              <h4 className="text-white text-4xl font-semibold mb-8 mt-8 lg:mt-0 lg:text-left text-center">
                GARANTIA DE <br />
                SATISFAÇÃO 😱
              </h4>
              <p className="text-white text-[17px] lg:text-xl font-light lg:text-left text-center">
                Liberamos seu acesso agora, com 7 dias de garantia
                incondicional. Você pode baixar o Ebook, ler todo o conteúdo e
                se por algum motivo você não gostar de algo, mande apenas um{" "}
                <span className="text-[#f4b524] underline">
                  e-mail em aluna@elenuncavaiesquecer.com.br
                </span>{" "}
                para receber todo o seu dinheiro de volta, direto na sua conta
                bancária (para pix ou boleto) ou na fatura do seu cartão de
                crédito.{" "}
              </p>
              <p className="text-white text-[17px] lg:text-xl font-light mt-5 lg:text-left text-center">
                Sem burocracias, sem letras miúdas. Nós queremos mulheres
                felizes dentro do nosso grupo e temos certeza que você vai amar.
                Por isso, nós assumimos todo o risco e responsabilidade.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className=" bg-[#7f1d1d] px-5 w-full flex flex-col justify-center items-center py-[60px] relative">
          <h3 className="text-white text-[45px] text-center font-bold leading-normal max-w-[1000px]">
            ⚠️ Atenção ⚠️
          </h3>
          <h3 className="text-white text-[25px] text-center font-normal leading-normal max-w-[700px]">
            Não iremos garantir este valor por muito tempo… Essas vagas
            promocionais são LIMITADAS.
          </h3>
          <h3 className="text-white text-[40px] text-center font-bold leading-normal max-w-[1000px]">
            Temos 3 vagas com essa condição.
          </h3>
          <h3 className="text-white text-[25px] text-center font-normal leading-normal max-w-[1000px]">
            Por isso, é importante garantir sua vaga agora… Sem compromisso.
          </h3>
        </section>
        <section className="py-[30px] bg-[#f8f8f8] flex w-full justify-center items-center">
          <h3 className="text-2xl text-[#008957] text-center">
            ❤️ 97.36% DAS NOSSAS ALUNAS APROVAM O NOSSO MÉTODO ❤️
          </h3>
        </section>
        <section className="bg-[#cb8990] w-full flex-col py-[70px] flex justify-center items-center">
          <h3 className="text-[#fff] text-[35px] lg:text-[50px] font-medium leading-none text-center max-w-[490px]">
            Veja os relatos reais das nossas alunas
          </h3>
          <div className="flex md:hidden px-5 w-full flex-col items-center gap-y-5 pt-[20px]">
            <img
              className="rounded-xl border-4 border-white"
              src="/relatos2/relato1.jpg"
              alt=""
            />
            <img
              className="rounded-xl border-4 border-white"
              src="/relatos2/relato2.png"
              alt=""
            />
            <img
              className="rounded-xl border-4 border-white"
              src="/relatos2/relato3.jpg"
              alt=""
            />

            <img
              className="rounded-xl border-4  border-white"
              src="/relatos2/relato4.png"
              alt=""
            />
          </div>
          <div className="hidden md:flex w-full px-5 justify-center">
            <Masonry
              columnsCount={3}
              gutter="30px"
              className=" gridWrapper w-full mt-[50px] max-w-[1000px]"
            >
              <img
                className="rounded-xl border-4 border-white"
                src="/relatos2/relato1.jpg"
                alt=""
              />
              <img
                className="rounded-xl border-4 border-white"
                src="/relatos2/relato2.png"
                alt=""
              />
              <img
                className="rounded-xl border-4 border-white"
                src="/relatos2/relato3.jpg"
                alt=""
              />
              <img src="" alt=""></img>
              <img
                className="rounded-xl border-4  border-white"
                src="/relatos2/relato4.png"
                alt=""
              />
            </Masonry>
          </div>
        </section>
        <section className=" bg-[#7f1d1d] px-5 w-full flex flex-col justify-center items-center py-[90px] relative">
          <h3 className="text-white text-[35px] text-center font-medium leading-none max-w-[1000px]">
            Agora é com você, clique no link e comece hoje a se transformar em
            uma mulher inesquecível.
          </h3>
          <button className="uppercase text-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-white hover:border-[1px] border-gray-400 px-[30px] py-[20px] rounded-2xl font-bold mt-[40px] text-[22px] bg-[rgba(252,211,77,1)]">
            Quero ser Inesquecível e valorizada
          </button>
        </section>
      </main>
    </HomeCointainer>
  );
};

export default Home;
