import { useEffect, useState, useRef } from 'react'
import Nav from '../Components/Navbar'
import gorraImg from '../assets/gorra.png'
import camisaImg from '../assets/camisa.png'
import lapizIcon from '../assets/lapiz.png'
import basuraIcon from '../assets/bote-de-basura.png'

const sampleProducts = [
  { id: 1, name: 'Gorra Clásica Negra', price: 21.0, stock: 12, image: gorraImg, badge: 'En stock' },
  { id: 2, name: 'Camisa blanca', price: 10.0, stock: 0, image: camisaImg, badge: 'Agotado' },
  { id: 3, name: 'Camisa sin mangas negra', price: 18.0, stock: 3, image: camisaImg, badge: 'En stock' },
  { id: 4, name: 'Camisa deportiva', price: 15.0, stock: 20, image: camisaImg, badge: 'En stock' },
  { id: 5, name: 'Camisa cuello v', price: 12.0, stock: 6, image: camisaImg, badge: 'En stock' },
  { id: 6, name: 'Camisa con mangas negras', price: 21.0, stock: 0, image: camisaImg, badge: 'Agotado' },
  { id: 7, name: 'Camisa con mangas corta', price: 21.0, stock: 7, image: camisaImg, badge: 'En stock' },
  { id: 8, name: 'Gorra clásica blanca', price: 10.0, stock: 4, image: gorraImg, badge: 'En stock' },
]

const ProductCard = ({ product, onEdit }) => {
  const sizes = ['S', 'M', 'L']
  
  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col" style={{ minHeight: 300 }}>
      <div className="relative h-28 flex items-center justify-center bg-gray-50 rounded overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full object-contain" />
        <span className="absolute right-2 bottom-2 text-[11px] bg-green-500 text-white px-2 py-1 rounded">{product.badge}</span>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-sm text-gray-800">{product.name}</h3>
        <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">Tallas disponibles</p>
        <div className="flex gap-2 mt-2">
          {sizes.map(s => (
            <button key={s} className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400">{s}</button>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</div>
          <p className="text-xs text-gray-400">Stock: {product.stock} uds</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button onClick={() => onEdit(product)} className="flex-1 bg-blue-900 text-white px-4 py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
           <img src={lapizIcon} alt="Editar" className="w-3 h-3" /> Editar
        </button>
        <button className="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
          <img src={basuraIcon} alt="Eliminar" className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

const AddProductModal = ({ open, onClose, onSave, initial }) => {
  const [form, setForm] = useState(initial || {})
  const fileRef = useRef(null)

  useEffect(() => setForm(initial || {}), [initial])

  if (!open) return null

  const handleChange = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setForm({ ...form, image: url })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ ...form, id: form.id || Date.now() })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[900px] max-w-full p-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600">✕</button>
        <h2 className="text-2xl font-bold mb-5 text-[#00236F]">{initial ? 'Editar Producto' : 'Nuevo Producto'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-600">Nombre del producto</label>
              <input required value={form.name || ''} onChange={handleChange('name')} className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="text-xs text-gray-600">Categoría</label>
              <select value={form.category || ''} onChange={handleChange('category')} className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">Seleccionar</option>
                <option value="Camisa">Camisa</option>
                <option value="Gorra">Gorra</option>
                <option value="Accesorio">Accesorio</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-600">Color</label>
              <input value={form.color || ''} onChange={handleChange('color')} className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600">Precio base</label>
                <input type="number" value={form.price || ''} onChange={handleChange('price')} className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="text-xs text-gray-600">Cantidad</label>
                <input type="number" value={form.stock || ''} onChange={handleChange('stock')} className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-600">Talla</label>
              <select value={form.size || ''} onChange={handleChange('size')} className="w-full mt-2 p-3 border border-gray-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">Seleccionar</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="h-56 bg-gray-100 rounded-2xl border border-gray-200 mb-4" />
              <div className="flex justify-center gap-5 mt-2">
                <div className="h-20 w-24 bg-gray-100 rounded-2xl border border-gray-200" />
                <div className="h-20 w-24 bg-gray-100 rounded-2xl border border-gray-200" />
              </div>
              <div className="flex justify-center">
                <button type="button" className="w-30 mt-3 rounded-xl border border-gray-300 bg-[#00236F] text-white px-4 py-2 text-sm">Agregar foto</button>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-600">Descripción</label>
              <textarea value={form.description || ''} onChange={handleChange('description')} className="w-full mt-2 p-3 border border-gray-300 rounded-2xl bg-slate-50 h-40 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>
          <div className="col-span-2 flex justify-end gap-3 mt-1">
            <button type="button" onClick={onClose} className="px-5 py-3 border border-gray-300 rounded-xl">Cancelar</button>
            <button type="submit" className="px-5 py-3 bg-[#00236F] text-white rounded-xl">{initial ? 'Guardar cambios' : 'Agregar producto'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

const BaseProduct = () => {
  const [products, setProducts] = useState(sampleProducts)
  const [query, setQuery] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [editing, setEditing] = useState(null)

  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

  const handleSave = (prod) => {
    setProducts(prev => {
      const exists = prev.find(p => p.id === prod.id)
      if (exists) return prev.map(p => p.id === prod.id ? { ...p, ...prod } : p)
      return [prod, ...prev]
    })
    setOpenModal(false)
    setEditing(null)
  }

  const handleEdit = (prod) => {
    setEditing(prod)
    setOpenModal(true)
  }

  return (
    <div className="flex h-screen">
      <Nav />
      <div className="flex-1 p-8 overflow-auto">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-4xl font-Inter font-bold text-left text-blue-900 mt-2">Productos</h1>

          <div className="mt-4 flex items-center gap-4">
            <input placeholder="Buscar productos, SKUs o categorías..." value={query} onChange={e => setQuery(e.target.value)} className="bg-[#F1F5F9] p-2 rounded-lg w-1/2 text-sm" />
            <button onClick={() => { setEditing(null); setOpenModal(true) }} className="bg-blue-700 text-white px-4 py-2 rounded ml-auto">Agregar producto +</button>
          </div>

          <div className="flex items-center gap-4 mt-2 mb-4">
            <div className="flex gap-3 flex-wrap items-center">
              <button className="text-sm px-4 py-2 bg-gray-100 rounded-lg">Categoría: Gorras (x)</button>
              <button className="text-sm px-4 py-2 bg-gray-100 rounded-lg">Talla: M (x)</button>
              <button className="text-sm px-4 py-2 bg-gray-100 rounded-lg">En stock (x)</button>
              <select className="text-sm px-4 py-2 bg-gray-100 rounded-lg border-0 cursor-pointer">
                <option>Todos</option>
                <option>En stock</option>
                <option>Agotado</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onEdit={handleEdit} />
            ))}
          </div>

              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-500">
            <div>Mostrando {filtered.length} de {products.length} productos</div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border rounded text-xs min-w-[30px]">&lt;</button>
              <button className="px-2 py-1 bg-blue-900 text-white rounded text-xs min-w-[30px]">1</button>
              <button className="px-2 py-1 border rounded text-xs min-w-[30px]">2</button>
              <button className="px-2 py-1 border rounded text-xs min-w-[30px]">3</button>
              <div className="px-2 py-1 text-xs">...</div>
              <button className="px-2 py-1 border rounded text-xs min-w-[30px]">16</button>
              <button className="px-2 py-1 border rounded text-xs min-w-[30px]">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      <AddProductModal open={openModal} onClose={() => { setOpenModal(false); setEditing(null) }} onSave={handleSave} initial={editing} />
    </div>
  )
}

export default BaseProduct