import type { QuartzComponentConstructor, QuartzComponentProps } from "./types"

type Options = {
  slugs?: string[] // páginas donde quieres que se muestre (por defecto, solo "index")
}

export default ((opts?: Partial<Options>) => {
  const allowed = new Set(opts?.slugs ?? ["index"])

  function OnlyForHome(props: QuartzComponentProps) {
    // props.fileData.slug suele ser "index" para la home
    const slug = props.fileData.slug ?? ""
    if (!allowed.has(slug)) return null
    return <>{props.children}</>
  }

  return OnlyForHome
}) satisfies QuartzComponentConstructor
