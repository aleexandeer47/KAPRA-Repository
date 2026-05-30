import Nav from '../Components/Navbar'
import shirtImg from '../assets/camisa.png'

const OrderTracking = () => {
	const percent = 50

	const steps = [
		{ label: 'En pre producción', done: true },
		{ label: 'En producción', done: true },
		{ label: 'Finalizado', done: false },
	]

	const radius = 90
	const stroke = 20
	const normalizedRadius = radius - stroke * 0.5
	const circumference = normalizedRadius * 2 * Math.PI
	const strokeDashoffset = circumference - (percent / 100) * circumference

	return (
		<div className="flex h-screen">
			<Nav />
			<div className="flex-1 p-10 overflow-auto flex flex-col items-center ml-20">
				<div className="w-full max-w-7xl">
					<div>
                        <h1 className="text-4xl font-Inter font-bold text-blue-900">Seguimiento del pedido</h1>
					<p className="text-2xl font-Inter font-bold mb-8">#ORD-001-0012</p>
                    </div>

					<div className="flex flex-col items-center gap-10">
						<div className="flex items-center justify-center gap-10">
							<div className="w-100 h-72 bg-white rounded-3xl flex items-center justify-center ">
								<img src={shirtImg} alt="frontal" className="max-w-full max-h-full" />
							</div>
							<div className="w-100 h-72 bg-white rounded-3xl flex items-center justify-center ">
								<img src={shirtImg} alt="trasera" className="max-w-full max-h-full" />
							</div>
						</div>

						<div className="flex flex-col items-center">
							<h1 className="text-4xl font-Inter font-bold mb-10">Progreso</h1>
							<div className="flex flex-col lg:flex-row gap-10 items-center mt-5">
								<div className="bg-slate-200 p-10 rounded-[36px] shadow-xl">
									{steps.map((s, i) => (
										<div key={i} className="flex items-center gap-4 bg-white rounded-md px-8 py-4 mb-4 w-[30rem] shadow-sm">
											<div className="flex-1 text-xl font-Inter font-bold">{s.label}</div>
											<div className={s.done ? 'w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center' : 'w-8 h-8 rounded-full border'}>
												{s.done ? '✓' : ''}
											</div>
										</div>
									))}
								</div>

								<div className="flex items-center justify-center">
									<svg height={radius * 2} width={radius * 2} className="shadow-xl rounded-full">
										<defs>
											<linearGradient id="g1" x1="0%" x2="100%">
												<stop offset="0%" stopColor="#9BD0FF" />
												<stop offset="100%" stopColor="#2F6BFF" />
											</linearGradient>
										</defs>
										<circle
											stroke="#E6F0FF"
											fill="transparent"
											strokeWidth={stroke}
											r={normalizedRadius}
											cx={radius}
											cy={radius}
										/>
										<circle
											stroke="url(#g1)"
											fill="transparent"
											strokeWidth={stroke}
											strokeDasharray={`${circumference} ${circumference}`}
											style={{ strokeDashoffset }}
											strokeLinecap="round"
											r={normalizedRadius}
											cx={radius}
											cy={radius}
										/>
										<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="22" fontWeight="700" fill="#0B2B55">{percent}%</text>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderTracking

