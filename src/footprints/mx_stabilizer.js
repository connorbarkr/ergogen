// PCB-mount stabilizer holes for any MX switch. 
// 
// Params
//    keycaps: default is false
//      if true, will display a keycap of the appropriate size
//    size: default is 2
//      must be one of 2, 2.25, 2.75, 3, 7, 8, 9, 10
//
// To use, simply add as a footprint with the anchor ref set to the desired key position.

module.exports = {
	params: {
		class: 'Stab',
		keycaps: false,
		size: 2
	},
	body: p => {
		const standard = `
			(module mx_stabilizer (layer F.Cu) (tedit 62979931)
			${p.at /* parametric position */}

			${'' /* footprint reference */}
			(fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
			(fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
			`
		
		const keycap = `
			${'' /* keycap marks */}
			(fp_line (start -${9.5 * p.param.size} -9.5) (end ${9.5 * p.param.size} -9.5) (layer Dwgs.User) (width 0.15))
			(fp_line (start ${9.5 * p.param.size} -9.5) (end ${9.5 * p.param.size} 9.5) (layer Dwgs.User) (width 0.15))
			(fp_line (start ${9.5 * p.param.size} 9.5) (end -${9.5 * p.param.size} 9.5) (layer Dwgs.User) (width 0.15))
			(fp_line (start -${9.5 * p.param.size} 9.5) (end -${9.5 * p.param.size} -9.5) (layer Dwgs.User) (width 0.15))
		`
 
		function holes(spacing) {
			return `
				${'' /* holes */}
				(pad "" np_thru_hole circle (at -${spacing / 2} -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
				(pad "" np_thru_hole circle (at ${spacing / 2} -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
				(pad "" np_thru_hole circle (at -${spacing / 2} 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
				(pad "" np_thru_hole circle (at ${spacing / 2} 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
			`
		}
		
		// default spacing for <3u
		var spacing = 23.876

		switch (p.param.size) {
			case 2:
			case 2.25:
			case 2.75:
				break
			case 3:
				spacing = 38.1
				break
			case 7:
				spacing = 114.3
				break
			case 8:
			case 9:
			case 10:
				spacing = 133.35
				break
			default:
				throw new Error(`Invalid stabilizer size ${p.param.size}.`)
		}

		return `
			${standard}
			${p.param.keycaps ? keycap : ''}
			${holes(spacing)})
		`
	}
}