// Adafruit SHARP 2.7" Memory Display
// Params
//  side: default is B
//		refers to silkscreen printing layer only
//  mounting: default is true
//		if false (not recommended for stability) will remove the through holes in the pcb
// 	outline: default is false
//		if true, will add the outline to the silkscreen

module.exports = {
    nets: {
    	VIN: 'RAW',
		VCC: 'VCC',
		GND: 'GND',
		CLK: 'CLK',
		DI: 'DI',
		CS: 'CS',
		EMD: 'EMD',
		DISP: 'DISP',
		EIN: 'EIN'
    },
    params: {
    	class: 'DISP',
		side: 'B',
		mounting: true,
		outline: false
    },
    body: p => {
		const silkscreen = `${p.param.side}.SilkS`

		const standard = `
			(module SHARP_2_7 (layer F.Cu) (tedit 629788D9)
			${p.at /* parametric position */} 

			${'' /* footprint reference */}        
			(fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
			(fp_text value DISP (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
			
			${''/* component outline */}
			(fp_line (start 31.75 -27.94) (end -31.75 -27.94) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start -31.75 -27.94) (end -31.75 27.94) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start -31.75 27.94) (end -26.67 27.94) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start -26.67 27.94) (end -26.67 22.86) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start -26.67 22.86) (end 26.67 22.86) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start 26.67 22.86) (end 26.67 27.94) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start 26.67 27.94) (end 31.75 27.94) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			(fp_line (start 31.75 27.94) (end 31.75 -27.94) (layer ${p.param.outline ? silkscreen : `Dwgs.User`}) (width 0.15))
			
			${''/* screen outline */}
			(fp_line (start -29.75 14.86) (end 29.75 14.86) (layer Dwgs.User) (width 0.15))
			(fp_line (start 29.75 14.86) (end 29.75 -20) (layer Dwgs.User) (width 0.15))
			(fp_line (start 29.75 -20) (end -29.75 -20) (layer Dwgs.User) (width 0.15))
			(fp_line (start -29.75 -20) (end -29.75 14.86) (layer Dwgs.User) (width 0.15))
			
			${''/* pin names */}
			(fp_text user VIN (at -10.16 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user VCC (at -7.62 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user GND (at -5.08 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user CLK (at -2.54 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user DI (at 0.0 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user CS (at 2.54 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user EMD (at 5.08 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user DISP (at 7.62 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user EIN (at 10.16 -22.5 ${p.rot + 90}) (layer ${silkscreen}) (effects (font (size 0.8 0.8) (thickness 0.15))))
			
			${'' /* pins */}
			(pad 1 thru_hole circle (at -10.16 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VIN.str})
			(pad 2 thru_hole circle (at -7.62 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
			(pad 3 thru_hole circle (at -5.08 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
			(pad 4 thru_hole circle (at -2.54 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.CLK.str})
			(pad 5 thru_hole circle (at 0.0 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.DI.str})
			(pad 6 thru_hole circle (at 2.54 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.CS.str})
			(pad 7 thru_hole circle (at 5.08 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.EMD.str})
			(pad 8 thru_hole circle (at 7.62 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.DISP.str})
			(pad 9 thru_hole circle (at 10.16 -25.4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.EIN.str})
		`
		
		const mounting = `
			${''/* mounting holes */}
			(pad "" np_thru_hole circle (at -29.21 25.4) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
			(pad "" np_thru_hole circle (at 29.21 25.4) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
			(pad "" np_thru_hole circle (at -29.21 -25.4) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
			(pad "" np_thru_hole circle (at 29.21 -25.4) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
		`
		
		return `
			${standard}
			${p.param.mounting ? mounting : ``})
		`
	}
}