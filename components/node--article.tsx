import Image from "next/image"
import { DrupalNode } from "next-drupal"
import { absoluteUrl, formatDate } from "lib/utils"
import styles from './nodeArticle.module.css'

interface NodeArticleProps {
  node: DrupalNode
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {
  return (
    <article className={styles.articleContainer} {...props}>
      {/* Titre de l'article */}
      <h1 className={styles.title}>{node.title}</h1>
      
      {/* Informations sur l'auteur et la date */}
      <div className={styles.meta}>
        {node.uid?.display_name && (
          <span className={styles.author}>
            Posted by <span className={styles.authorName}>{node.uid?.display_name}</span>
          </span>
        )}
        <span className={styles.date}> - {formatDate(node.created)}</span>
      </div>

      {/* Image principale de l'article */}
      {node.field_image && (
        <figure className={styles.figure}>
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={400}
            alt={node.field_image.resourceIdObjMeta.alt}
            className={styles.articleImage}
            priority
          />
          {node.field_image.resourceIdObjMeta.title && (
            <figcaption className={styles.figcaption}>
              {node.field_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}

      {/* Contenu de l'article */}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className={styles.content}
        />
      )}
    </article>
  )
}
