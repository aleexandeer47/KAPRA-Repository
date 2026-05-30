import { useState } from 'react'
import Nav from '../Components/Navbar'

const sampleOrders = [
	{  n: 'ORD-2026-0011', cliente: 'Juan Pérez', ciudad: 'San Salvador', total: '$300', estado: 'Finalizado', pago: 'Pagado', fecha: '09/04/2026' },
	{  n: 'ORD-2026-0012', cliente: 'María López', ciudad: 'Santa Ana', total: '$150', estado: 'Pendiente', pago: 'Pendiente', fecha: '10/04/2026' },
	{  n: 'ORD-2026-0013', cliente: 'Carlos Ramírez', ciudad: 'San Miguel', total: '$420', estado: 'Finalizado', pago: 'Pendiente', fecha: '11/04/2026' },
	{  n: 'ORD-2026-0014', cliente: 'Ana Martínez', ciudad: 'San Salvador', total: '$280', estado: 'Producción', pago: 'Pagado', fecha: '12/04/2026' },
	{  n: 'ORD-2026-0015', cliente: 'Luis Hernández', ciudad: 'Usulután', total: '$95', estado: 'Producción', pago: 'Pagado', fecha: '13/04/2026' },
    {  n: 'ORD-2026-0011', cliente: 'Juan Pérez', ciudad: 'San Salvador', total: '$300', estado: 'Finalizado', pago: 'Pagado', fecha: '09/04/2026' },
	{  n: 'ORD-2026-0012', cliente: 'María López', ciudad: 'Santa Ana', total: '$150', estado: 'Pendiente', pago: 'Pendiente', fecha: '10/04/2026' },
	{  n: 'ORD-2026-0013', cliente: 'Carlos Ramírez', ciudad: 'San Miguel', total: '$420', estado: 'Finalizado', pago: 'Pendiente', fecha: '11/04/2026' },
	{  n: 'ORD-2026-0014', cliente: 'Ana Martínez', ciudad: 'San Salvador', total: '$280', estado: 'Producción', pago: 'Pagado', fecha: '12/04/2026' },
	{  n: 'ORD-2026-0015', cliente: 'Luis Hernández', ciudad: 'Usulután', total: '$95', estado: 'Producción', pago: 'Pagado', fecha: '13/04/2026' }
]
const StatusPill = ({ children }) => {
	let color = 'text-green-600'
	if (children === 'Pendiente') color = 'text-red-500'
	if (children === 'Producción') color = 'text-amber-500'
	return <span className={"font-Inter font-SemiBold " + color}>{children}</span>
}

const Orders = () => {
	const [query, setQuery] = useState('')

	return (
		<div className="flex h-screen">
			<Nav />
			<div className="flex-1 overflow-hidden ml-20 peer-hover:ml-64 transition-all duration-300 ease-in-out flex flex-col">
				<div className="flex-1 overflow-y-auto p-10">
					<div className="w-full max-w-full">
						<h1 className="text-5xl font-Inter font-bold text-left text-blue-900 mb-8">Pedidos</h1>

						<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
							<div className="w-full sm:w-2/5">
								<input
									placeholder="Buscar pedidos"
									value={query}
									onChange={e => setQuery(e.target.value)}
									className="w-full border border-slate-300 rounded-[15px] px-5 py-4 bg-white text-base text-slate-700 shadow-sm"
								/>
							</div>
							<div className="flex flex-wrap items-center gap-3">
								<button className="bg-blue-900 text-white px-6 py-3 rounded-[15px] text-base shadow-lg">Nuevo pedido</button>
								<select className="border border-slate-300 rounded-[15px] px-4 py-3 text-sm bg-white">
									<option>Estado</option>
								</select>
								<select className="border border-slate-300 rounded-[15px] px-4 py-3 text-sm bg-white">
									<option>Pago</option>
								</select>
							</div>
						</div>

						<div className="bg-white overflow-hidden">             
<div className="grid grid-cols-[1.4fr_1.2fr_1fr_0.8fr_0.8fr_0.8fr_0.8fr] gap-4 rounded-[10px] bg-slate-200 px-6 py-3 text-xs font-Inter font-semibold uppercase tracking-wide text-slate-700 text-center">
							<div>N-Pedido</div>
							<div>Cliente</div>
							<div>Ciudad</div>
							<div>Total</div>
							<div>Estado</div>
							<div>Pago</div>
							<div>Fecha</div>
						    </div>

					<div className="space-y-2 px-6 py-3">
						{sampleOrders.map((o) => (
							<div key={o.n} className="border border-slate-300 rounded-[10px] px-5 py-3 bg-white shadow-sm">
								<div className="grid grid-cols-[1.4fr_1.2fr_1fr_0.8fr_0.8fr_0.8fr_0.8fr] gap-4 text-xs text-slate-700 items-center text-center">
									<div className="font-Inter font-medium">{o.n}</div>
									<div className="font-Inter font-medium">{o.cliente}</div>
									<div className="font-Inter font-medium">{o.ciudad}</div>
									<div className="font-Inter font-bold">{o.total}</div>
									<div className="font-Inter font-semibold"><StatusPill>{o.estado}</StatusPill></div>
									<div className="font-Inter font-semibold"><StatusPill>{o.pago}</StatusPill></div>
									<div className="font-Inter font-medium text-slate-500">{o.fecha}</div>
								</div>
							</div>
							))}
						</div>

					<div className="px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
							<div>Mostrar 1 a 10 clientes de 280</div>
							<div className="flex gap-3">
								<button className="border border-slate-300 rounded-full px-5 py-3">Anterior</button>
								<button className="border border-slate-300 rounded-full px-5 py-3">Siguiente</button>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Orders

