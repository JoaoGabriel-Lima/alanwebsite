/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeCointainer } from "../styles/components/home";
import Masonry from "react-responsive-masonry";
import InfoCard from "../components/infocard";
import Link from "next/link";
import * as fbq from "../lib/fpixel";

const Home: NextPage = () => {
  const handleClick = () => {
    fbq.event("Purchase", { currency: "BRL", value: 29.0 });
  };

  return (
    <HomeCointainer>
      <Head>
        <title>Desejo Ardente</title>
        <meta
          name="description"
          content="Descubra o segredo para fazer ele correr atrás de você, sentir sua falta como nunca e querer assumir um relacionamento"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center flex-col">
        <section className="relative bg-[#e8a0a6] bg-[url(/background.png)] bg-cover flex w-full justify-center items-center flex-col px-5 pb-10">
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
        <section className="relative w-full bg-white flex flex-col justify-start items-center py-[100px] px-5">
          <InfoCard image="/circulos/1.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Como atrair a atenção dele, <br /> fazendo ele vir atrás
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você vai aprender a fazer os homens mais disputados virem atrás de
              você, sabendo despertar a atenção dele e fazer ele te notar.{" "}
            </p>
          </InfoCard>
          <InfoCard image="/circulos/2.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Se tornar uma mulher interessante
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você vai entender o que faz ele te achar interessante, diferente
              das outras e realmente te tratar de forma especial, valorizando
              você como mulher. Aqui que a maioria das mulheres perdem valor e
              fazem os homens simplesmente “sumir” do nada e ficam sem entender
              o que aconteceu ou o que elas fizeram errado.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/3.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Tenha um papo interessante e desperte o desejo dele falar com você
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Aqui você vai fazer ele se interessar por você, deixando-o
              confuso, interessado e praticamente implorando para sair com você.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/4.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Aprendendo a deixar ele com saudades e louco pra te ver
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você vai deixar ele confuso, sentindo sua falta e quando te ver
              ele vai te olhar diferente. É uma forma realmente de fazer isso
              sem que ele perceba e ganhar espaço na lembrança dele, fazendo vir
              atrás de você.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/2.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Fazendo seu ex sentir sua falta e te procurar
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Um conunto de "iscas" vai fazer ele simplesmente querer falar com
              você e te procurar. E você vai aprender a "começar do zero"
              apagando o passado e começando uma nova história.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/6.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Como criar o desejo nele de querer algo sério com você
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Elas conhecem o cara, saem, vão pra cama com ele e depois ele
              some… ou a relação esfria. Sim, aqui as mulheres erram e não sabem
              realmente criar vínculo emocional e um desejo nele de querer algo
              com você. E nada tem a ver de ter sexo no primeiro encontro ou
              não.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/7.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Fazendo ele sentir falta, independente do relacionamento
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Aprenda as técnicas para fazer ele sentir sua falta, pensar em
              você e mandar mensagem do nada dizendo que quer te ver, que está
              com saudades...
            </p>
          </InfoCard>
          <InfoCard image="/circulos/8.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Corrigindo os erros do passado
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você errou com um ficante, namorado ou marido? Descubra como
              corrigir e "recomeçar" com ele, da forma certa, apenas aplicando
              essas técnicas simples e objetivas.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/9.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Recebendo mais carinho do marido e fazendo ele se apaixonar
              novamente
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Nós preparamos um módulo especial para reerguer o casamento,
              fazendo ele se apaixonar novamente, te dando mais atenção e
              carinho. Seu relacionamento nunca mais vai esfriar com este
              método.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/5.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Faça ele valorizar sua companhia
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você vai aprender a fazer ele valorizar quando você dá atenção ou
              quando você está com ele. Isso muda a relação e a forma que eles
              te tratam. Eles vão te tratar como uma rainha.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/7.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Seja o melhor sexo da vida dele
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Totalmente secreto e sigiloso! Nós desvendamos o que faz ele
              pirar, os desejos mais secretos dele e como você vai realmente ser
              inesquecível. Essa etapa e tão especial, que nossas alunas casadas
              simplesmente deixam o marido confuso e apaixonado depois que elas
              usaram as técnicas deste módulo.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/8.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Inesquecível e apertada
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você vai descobrir como fazer ele pirar na hora do sexo e também
              despertar um prazer que você nunca sentiu antes, com as posições
              que fazem você se sentir segura com o próprio corpo e chegar ao
              orgasmo.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/10.png" isOnLeft={true}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Oral Memorável
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Vamos te ensinar técnicas para ele enlouquecer e depois
              praticamente implorar e fazer o que você quiser para você fazer
              novamente nele.
            </p>
          </InfoCard>
          <InfoCard image="/circulos/11.png" isOnLeft={false}>
            <h3 className="leading-none text-[#fca5a5] mb-4 font-bold text-3xl text-center lg:text-left">
              Acabe com a síndrome do Dedo Podre
            </h3>
            <p className="font-light text-[#fca5a5] text-xl text-center lg:text-left">
              Você vai aprender a escolher o homem ideal para você (você vai
              precisar) e eliminar a Síndrome do Dedo Podre.
            </p>
          </InfoCard>
          <div className="flex w-full absolute bottom-[-50px] justify-center">
            <img alt="setinha" src="/btn.png"></img>
          </div>
        </section>

        <section className="w-full bg-[#b94d6c] flex flex-col justify-start items-center py-[50px] px-5">
          <p className="mt-10 text-white text-3xl max-w-[600px] font-medium text-center">
            Você precisa aprender este método para despertar tudo isso na cabeça
            dele...
          </p>
          <p className="mt-10 text-white text-4xl max-w-[800px] font-bold text-center">
            Depois de saber o método INESQUECÍVEL, Ele Nunca Mais Vai Esquecer
            DE VOCÊ!
          </p>
          <p className="my-10 text-black text-4xl max-w-[800px] font-bold text-center">
            E quando isso acontecer…
          </p>
          <p className="mt-5 text-white text-3xl max-w-[800px] text-center">
            • Você vai fazer o homem que você quiser correr atrás;{" "}
          </p>
          <p className="mt-5 text-white text-3xl max-w-[800px] text-center">
            • Vai ser valorizada como nunca antes;
          </p>
          <p className="mt-5 text-white text-3xl max-w-[800px] text-center">
            • Ele terá medo de te perder;
          </p>
          <p className="mt-5 text-white text-3xl max-w-[800px] text-center">
            • E isso vai deixar ele desesperado para ter um compromisso sério
            com você!;
          </p>
          <p className="mt-5 text-white text-3xl max-w-[800px] text-center">
            • E vai fazer qualquer homem te tratar como uma rainha.
          </p>
          <p className="my-10 text-white text-3xl max-w-[800px] text-center">
            E tudo isso é mais simples do que você imagina… É um conjunto de
            ações que você precisa aprender…
          </p>
          <p className="mt-4 text-white text-3xl max-w-[800px] text-center">
            Você vai se tornar uma mulher enigmática, sedutora, que faz os
            homens ao seu redor ficarem desesperados pela sua atenção!
          </p>
        </section>
        <section className="w-full bg-[#000] flex flex-col justify-start items-center py-[50px] px-5">
          <p className="mt-10 text-white text-3xl max-w-[600px] font-bold text-center">
            + Bônus Gratuito
          </p>
          <p className="mt-4 text-[#cc6280] leading-none text-6xl max-w-[750px] font-extrabold text-center">
            Fórmula Infalível para ele vir atrás de você
          </p>
          <p className="my-10 text-white lg:text-5xl text-4xl max-w-[800px] font-light text-center">
            Um passo a passo infalível para fazer ele sentir sua falta,
            utilizando táticas secretas e extremamente poderosas para fazer ele
            te procurar e despertar nele o desejo de ficar com você.
          </p>
          <p className="mt-5 text-[#cc6280] text-3xl font-bold max-w-[800px] text-center">
            ❤️ Fórmula para atrair ex-namorado;
          </p>
          <p className="my-2 text-[#cc6280] text-3xl font-bold max-w-[800px] text-center">
            ❤️ Fórmula para aquele ficante que sumiu do nada;
          </p>
          <p className="mt-2 mb-10 text-[#cc6280] text-3xl font-bold max-w-[800px] text-center">
            ❤️ Fórmula para atrair homem que você quer.
          </p>
        </section>
        <section className="relative bg-[#e8a0a6] py-20 bg-[url(/background.png)] bg-cover flex w-full justify-center items-center flex-col px-5 pb-10">
          <h3 className="mb-10 text-[#7f1d1d] text-center text-5xl font-bold max-w-[800px]">
            VEJA O QUE RECEBEMOS DAS NOSSAS ALUNAS
          </h3>
          <div className="hidden lg:flex w-full relative justify-center">
            <Masonry
              columnsCount={3}
              className="z-20 max-w-[1000px] mb-10 relative"
            >
              <img src="/relatos3/1.png" className="z-[20]" alt="" />
              <img src="/relatos3/2.png" alt="" />
              <img src="/relatos3/3.png" alt="" />
              <img src="/relatos3/4.png" alt="" />
              <img src="/relatos3/5.png" alt="" />
              <img
                src="/img2.png"
                alt="butterfly"
                className="absolute  w-[80px] lg:w-[100px] top-[-80px] right-0"
              ></img>
              <img
                src="/img1.png"
                alt="person"
                className="absolute  w-[80px] lg:w-[180px] top-[-80px] left-[-50px]"
              ></img>
            </Masonry>
          </div>
          <div className="z-20 px-5 flex lg:hidden relative flex-col items-center justify-start">
            <img src="/relatos3/1.png" className="z-[20]" alt="" />
            <img src="/relatos3/2.png" alt="" />
            {/* <img src="/relatos3/3.png" alt="" /> */}
            <img src="/relatos3/4.png" alt="" />
            <img src="/relatos3/5.png" alt="" />
            <img
              src="/img2.png"
              alt="butterfly"
              className="absolute  w-[80px] lg:w-[100px] top-[-80px] right-0"
            ></img>
            <img
              src="/img1.png"
              alt="person"
              className="absolute  w-[100px] lg:w-[180px] top-[-60px] left-[0px]"
            ></img>
          </div>

          <img
            alt=""
            src="/compras/entalhe.png"
            className="w-[800px] absolute top-0 left-[-500px]"
          ></img>
          <div className="flex w-full absolute bottom-[-50px] justify-center">
            <img alt="setinha" src="/btn.png"></img>
          </div>
        </section>

        <section className="w-full py-[80px] relative flex flex-col items-center">
          <h3 className="text-[42px] text-[#303030] font-bold max-w-[700px] leading-none text-center">
            E depois do método, você vai:
          </h3>
          <p className="mt-5 text-xl max-w-[700px] font-light text-center">
            Veja como você estará depois de entrar na nossa turma:
          </p>
          <section className="px-3 mt-6 flex flex-col justify-start w-full max-w-[700px]  items-center">
            <div className="w-full py-4 bg-[#f5f5f5] px-7 rounded-t-xl flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">
                Fazer homens disputados virem atrás de você
              </span>
            </div>
            <div className="w-full py-4 px-7 flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">
                Despertar o sentimento de perda na cabeça dele;
              </span>
            </div>
            <div className="w-full py-4 bg-[#f5f5f5] px-7 flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">
                Ser valorizada como nunca antes;
              </span>
            </div>
            <div className="w-full py-4 px-7 flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">
                Consertar o passado e deixar ele apaixonado;
              </span>
            </div>
            <div className="w-full py-4 bg-[#f5f5f5] px-7 flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">
                Deixar ele apaixonado por você;
              </span>
            </div>
            <div className="w-full py-4 px-7 flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">
                Recuperar aquele relacionamento perdido;
              </span>
            </div>
            <div className="w-full py-4 bg-[#f5f5f5] px-7 rounded-b-xl flex items-center">
              <img alt="" src="/compras/check.svg" className="mr-7"></img>
              <span className="font-normal text-xl">E muito mais...</span>
            </div>
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
          <h3 className="px-3 text-[52px] text-[#303030] font-medium max-w-[700px] leading-none text-center">
            Liberamos 3 vagas com um desconto exclusivo
          </h3>
          <p className="px-3 mt-5 mb-14 text-2xl max-w-[700px] text-center">
            Essa oportunidade é somente agora. Quando as vagas esgotarem, não
            sei quando iremos abrir uma nova turma 😱
          </p>
          <img
            alt=""
            src="/compras/entalhe.png"
            className="w-[800px] absolute top-[250px] left-[-400px]"
          ></img>
          <div className="lg:mt-0 mt-[160px] relative flex flex-row gap-x-5 lg:items-center justify-center">
            <div className="lg:static absolute top-[-160px] bg-[#fff] border-2 border-gray-200 items-center max-w-[280px] lg:max-w-[380px] w-[90%] flex flex-col p-5 lg:p-7 rounded-2xl">
              <p className="text-[#bcc1c6] font-normal text-lg mb-8">
                Valor Normal
              </p>
              <h2 className="text-[#bcc1c6]  font-bold text-6xl line-through">
                R$ 337
              </h2>

              <hr className="my-5 w-full border-0 h-[1px] bg-gray-300"></hr>
              <div className="z-10 flex w-full flex-col items-start justify-start gap-y-3">
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Fazer ele vir atrás de você
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Ser uma mulher interessante
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Consertar o passado
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Fazer ele te procurar
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Ele só vai pensar em você
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Criar o desejo de compromisso
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Fazer seu ex sentir falta
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Reconquistar o marido / namo
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Fazer ele sentir falta
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    O melhor s*xo da vida dele
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Inesquecível e Apertada
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Faça ele valorizar você
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Oral Memorável
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkblue.svg"
                    alt=""
                  />
                  <span className="text-[#bcc1c6] font-normal text-lg">
                    Acabe com o Dedo Podre
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#7f1d1d] z-20 items-center max-w-[380px] w-[90%] flex flex-col p-7 rounded-2xl">
              <p className="text-white font-normal text-lg mb-8">
                Sua Vaga com Desconto
              </p>
              <h2 className="text-white font-bold text-3xl">
                3x <span className="text-6xl ">R$ 10</span>
              </h2>
              <h3 className="text-white text-2xl mt-1">ou R$ 29 à vista</h3>
              <Link
                onClick={() => handleClick()}
                href={"https://pay.kiwify.com.br/osbEO9c"}
                className="text-center uppercase text-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-white hover:border-[1px] border-gray-400 px-[8px] py-[15px] rounded-2xl font-medium mt-[20px] text-[18px] bg-[rgba(252,211,77,1)]"
              >
                Quero reservar minha vaga com desconto
              </Link>
              <hr className="my-5 w-full border-0 h-[1px] bg-gray-400"></hr>
              <div className="z-10 flex w-full flex-col items-start justify-start gap-y-3">
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Fazer ele vir atrás de você
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Ser uma mulher interessante
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Consertar o passado
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Fazer ele te procurar
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Ele só vai pensar em você
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Criar o desejo de compromisso
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Fazer seu ex sentir falta
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Reconquistar o marido / namo
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Fazer ele sentir falta
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    O melhor s*xo da vida dele
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Inesquecível e Apertada
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Faça ele valorizar você
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Oral Memorável
                  </span>
                </div>
                <div className="flex w-full">
                  <img
                    className="max-w-[24px] mr-4"
                    src="/compras/checkwhite.svg"
                    alt=""
                  />
                  <span className="text-white font-normal text-lg">
                    Acabe com o Dedo Podre
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:flex-row flex-col flex gap-y-10 lg:gap-x-[60px] h-auto items-center">
            <img
              src="/compras/garantia_lista_1.png"
              className="w-[192px]"
              alt=""
            />
            <img
              src="/compras/garantia_lista_2.png"
              className="w-[233px] max-h-[71px]"
              alt=""
            />
            <img
              src="/compras/garantia_lista_3.png"
              className="w-[283px] max-h-[74px]"
              alt=""
            />
          </div>
        </section>
        <section className="py-[30px] bg-[#f8f8f8] z-[2] flex w-full justify-center items-center">
          <h3 className="px-3 text-2xl text-[#008957] text-center">
            Você e outras 13 mulheres estão no site neste momento.
          </h3>
        </section>
        <section className=" bg-[#2a2627] px-5 w-full flex justify-center items-center py-[120px] relative">
          <div className="lg:justify-between flex flex-col lg:flex-row w-full items-center max-w-[1000px]">
            <img alt="" src="/compras/garantia.png" className="w-[340px]"></img>
            <div className="flex flex-col lg:ml-5 lg:items-start items-center">
              <h4 className="text-white text-4xl font-semibold mb-8 mt-8 lg:mt-0 lg:text-left text-center">
                GARANTIA DE <br />
                SATISFAÇÃO 😱
              </h4>
              <p className=" text-white text-[17px] lg:text-xl font-light lg:text-left text-center">
                Liberamos seu acesso agora, com 7 dias de garantia
                incondicional. Você pode baixar o Ebook, ler todo o conteúdo e
                se por algum motivo você não gostar de algo, mande apenas um{" "}
                <span className="text-[#f4b524] underline">
                  e-mail em arogerma@proton.me
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
          <h3 className="text-2xl px-3 text-[#008957] text-center">
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
          <Link
            onClick={() => handleClick()}
            href={"https://pay.kiwify.com.br/osbEO9c"}
            className="text-center uppercase text-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-white hover:border-[1px] border-gray-400 px-[30px] py-[20px] rounded-2xl font-bold mt-[40px] text-[22px] bg-[rgba(252,211,77,1)]"
          >
            Quero ser Inesquecível e valorizada
          </Link>
        </section>
      </main>
    </HomeCointainer>
  );
};

export default Home;
