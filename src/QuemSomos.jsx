import React from 'react';

export default function QuemSomos() {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      {/* Imagem de capa */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <img
          src="/images/capa.png"   // você tem capa.png
          alt="Mãe e filha sorrindo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card central */}
      <div className="bg-gray-100 max-w-4xl mt-[-80px] rounded-xl shadow-md p-8 z-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Quem somos?</h2>

        <p className="text-gray-600 text-center mb-4">
          Mãos que Acolhem é um projeto social criado no Maranhão com o objetivo de apoiar famílias
          que têm filhos com necessidades especiais, muitas vezes ligados a síndromes raras como
          microcefalia, paralisia cerebral e outras condições que exigem cuidado constantes.
        </p>

        <p className="text-gray-600 text-center mb-6">
          Ele nasceu da iniciativa de uma mãe que também tem um filho com microcefalia, que conhecia
          de perto as dificuldades enfrentadas por outras famílias. Durante a pandemia, a situação
          se agravou, e foi aí que surgiu a ideia de organizar doações e criar uma rede de apoio.
        </p>

        {/* Duas imagens inferiores (coloque quando tiver) */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <img
            src="/images/foto-1.png"
            alt="Mãe com criança com microcefalia"
            className="rounded-lg w-full md:w-[45%] object-cover shadow-sm"
          />
          <img
            src="/images/foto-2.png"
            alt="Mãe sorrindo com criança especial"
            className="rounded-lg w-full md:w-[45%] object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
}
