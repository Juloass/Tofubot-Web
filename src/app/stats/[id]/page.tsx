export default function Page({ params }: { params: { id: string } }) {

  return (
    <div>
      <h1 className="text-xl font-bold">Collection de l utilisateur {params.id}</h1>
      <p>Affichage de la collection pour l utilisateur {params.id} ici.</p>
    </div>
  );

}
