import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">Erro 404</span>
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe ou foi movido. Volte para a página inicial de {site.doctor}.</p>
      <a className="button" href="/">
        Ir para a página inicial
      </a>
    </main>
  );
}
