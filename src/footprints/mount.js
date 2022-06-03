//	Mounting hole for PCBs
//	Params
// 		grounded: default is true
//			no copper layer if false
//		size: default is 2.54mm
//			refers to drilled diameter

module.exports = {
	nets: {
		GND: 'GND'
	},
	params: {
		class: 'Stab',
		grounded: true,
		size: 2.54
	},
    body: p => {
		const ground_size = p.param.grounded ? p.param.size + 1.27 : p.param.size

		return `
			(module Mnt (layer F.Cu) (tedit 591DBFB0)
			${p.at /* parametric position */}

			${'' /* via */}
			(pad "" np_thru_hole circle (at 0 0) (size ${ground_size} ${ground_size}) (drill ${p.param.size}) (layers *.Cu *.Mask))
			)
		`
	}
}