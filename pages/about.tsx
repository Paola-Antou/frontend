import Head from "next/head"
import { Layout } from "components/layout"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - Pas à Pas Fashion</title>
      </Head>

      {/* Banniere avec image */}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url("/images/logo.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-black text-white">About</h1>
        </div>
      </section>

      {/* Contenu de la page About */}
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Nos services</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Chez Pas à Pas Fashion, nous offrons une sélection tendance de vêtements et de chaussures pour hommes, femmes et enfants. Notre mission est de combiner élégance, confort et qualité à des prix abordables. Que vous cherchiez un style chic pour une occasion spéciale ou des pièces casual pour votre quotidien, nous avons ce qu'il vous faut.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-4">
  Notre service se distingue par une expérience d'achat personnalisée, avec des conseillers prêts à vous guider pour trouver la tenue idéale. Nous proposons également des services de livraison rapide, des retours faciles et des offres promotionnelles régulières pour rendre votre expérience encore plus agréable.
        </p>

        {/* Ajoutez plus de contenu ou des images ici */}
      </main>
    </Layout>
  )
}
