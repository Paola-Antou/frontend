import Link from "next/link"
import { PreviewAlert } from "components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <header>
          <div className="container flex items-center justify-between py-6 mx-auto">
        
            <Link href="/" className="text-2xl text-blue-500 font-semibold no-underline">
              Pas à Pas Fashion
            </Link>
            <Link href="/about" className="hover:text-blue-600 text-blue-500">
              À propos
            </Link>

          </div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  )
}
