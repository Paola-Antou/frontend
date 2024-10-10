import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeArticleTeaser } from "components/node--article--teaser"
import Link from 'next/link'

interface IndexPageProps {
  nodes: DrupalNode[]
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Pas à Pas Fashion</title>
       
      </Head>

      {/* Contenu principal */}
      
        
        

        {/* Image en haut de la page */}
        <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url("/images/logo.jpg")' }}> 
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-5xl font-black text-white">Bienvenue</h1>
          </div>
        </section>

        {/* Liste des articles en grille responsive */}
        <main className="container mx-auto px-4 py-10">
          <h1 className="mb-10 text-4xl font-black text-gray-800 text-center">Articles récents</h1>
          
          {nodes?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {nodes.map((node) => (
                <div key={node.id} className="bg-white p-6 rounded-lg shadow-md">
                  <NodeArticleTeaser node={node} />
                </div>
              ))}
            </div>
          ) : (
            <p className="py-4 text-center text-gray-600">No articles found</p>
          )}
        </main>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      nodes,
    },
  }
}
