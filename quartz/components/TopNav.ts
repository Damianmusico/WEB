import type { QuartzComponentConstructor, QuartzComponentProps } from "./types"

type Link = { label: string; href: string }
type Options = { links: Link[] }

export default ((opts?: Partial<Options>) => {
  const links: Link[] = opts?.links ?? []

  function TopNav(props: QuartzComponentProps) {
    const base = `https://${props.cfg.baseUrl}`

    return (
      <nav class="q-topnav">
        {links.map((l) => (
          <a class="q-topnav-link" href={`${base}${l.href}`}>
            {l.label}
          </a>
        ))}
      </nav>
    )
  }

  TopNav.css = `
    .q-topnav {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.95rem;
      line-height: 1;
      white-space: nowrap;
    }

    .q-topnav-link {
      text-decoration: none;
    }

    .q-topnav-link:hover {
      text-decoration: underline;
    }
  `

  return TopNav
}) satisfies QuartzComponentConstructor
