const modules = import.meta.glob("../blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true
})

function parseFrontmatter(raw) {

  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw }
  }

  const frontmatter = match[1]
  const content = match[2]

  const data = {}

  frontmatter.split("\n").forEach(line => {
    const [key, ...rest] = line.split(":")
    if (!key) return

    let value = rest.join(":").trim()

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map(v => v.trim())
    }

    data[key.trim()] = value
  })

  return { data, content }
}

export const posts = Object.entries(modules).map(([path, raw], i) => {

  const { data, content } = parseFrontmatter(raw)
  const slug = data.slug

  return {
    id: i + 1,
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    excerpt: data.excerpt || "",
    github: data.github || "",
    content
  }
})

