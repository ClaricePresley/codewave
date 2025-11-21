import "./QuemSomos.css";

export function QuemSomos() {
  return (
    <section className="quem-section" id="quem-somos">
      
      {/* Imagem de capa */}
      <div className="quem-capa">
        <img src="/quem-somos-capa.png" alt="Capa Quem Somos" />
      </div>

      {/* Card branco sobreposto */}
      <div className="quem-text-card">
        <h2 className="quem-titulo">Quem somos?</h2>

        <p className="quem-texto">
          Mãos que Acolhem é um projeto social criado no Maranhão com o objetivo
          de apoiar famílias que têm filhos com necessidades especiais, muitas
          vezes ligados a síndromes raras como microcefalia, paralisia cerebral
          e outras condições que exigem cuidado constantes.
        </p>

        <p className="quem-texto">
          Ele nasceu da iniciativa de uma mãe que também tem um filho com
          microcefalia, que conhecia de perto as dificuldades enfrentadas por
          outras famílias. Durante a pandemia, a situação se agravou, e foi aí
          que surgiu a ideia de organizar doações e criar uma rede de apoio.
        </p>

        <div className="quem-imagens">
          <img src="/quem-somos-1.png" alt="Mãe com criança" />
          <img src="/quem-somos-2.png" alt="Foto mãe e filha especial" />
        </div>
      </div>

    </section>
  );
}
