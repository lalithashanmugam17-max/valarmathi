// Display names for categories. The names stored in the database are matched by how they START,
// so this works whatever the old name was ("Tables", "Dressing Table", "Pooja Rack" ...).
// To rename a category, change the text on the right.
const RULES = [
  { start: 'table', name: 'Desks & Tables' },
  { start: 'dressing', name: 'Dressing Units' },
  { start: 'pooja', name: 'Pooja Units' }, // use 'Pooja Cabinets' here if you prefer that name
]

export const categoryName = (name) => {
  const n = (name ?? '').trim().toLowerCase()
  return RULES.find((r) => n.startsWith(r.start))?.name ?? name
}

// returns a copy of a category row / product row with the display name applied
export const withCategoryName = (row) => {
  if (!row) return row
  const out = { ...row }
  if ('name' in out && 'sort_order' in out) out.name = categoryName(out.name) // category row
  if ('category_name' in out) out.category_name = categoryName(out.category_name) // product row
  return out
}

// SQL piece for the search: gives the NEW display name of a category column, so that searching
// "dressing unit" or "desks" also finds the category even though the database still holds the old name.
export const categoryAliasSql = (col) =>
  `(CASE ${RULES.map((r) => `WHEN ${col} ILIKE '${r.start}%' THEN '${r.name}'`).join(' ')} ELSE '' END)`
