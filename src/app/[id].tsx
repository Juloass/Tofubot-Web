import { useRouter } from 'next/router';

export default function Collection() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Collection de l utilisateur {id}</h1>
      <p>Affichage de la collection pour l utilisateur {id} ici.</p>
    </div>
  );
}
