// Adafruit Feather nRF52840 Express
// Params
//  mounting: default is false
//		if true, will add through holes sized for the Feather
// 	outline: default is false
//		if true, will add the outline to the silkscreen

module.exports = {
	nets: {
	  VBAT: 'VBAT',
	  EN: 'EN',
	  VBUS: 'VBUS',
	  D13: 'D13',
	  D12: 'D12',
	  D11: 'D11',
	  D10: 'D10',
	  D9: 'D9',
	  D6: 'D6',
	  D5: 'D5',
	  SCL: 'SCL',
	  SDA: 'SDA',
  
	  RST: 'RST',
	  RAW: 'RAW',
	  AREF: 'AREF',
	  GND: 'GND',
	  A0: 'A0',
	  A1: 'A1',
	  A2: 'A2',
	  A3: 'A3',
	  A4: 'A4',
	  A5: 'A5',
	  SCK: 'SCK',
	  MOSI: 'MOSI',
	  MISO: 'MISO',
	  RX: 'RX',
	  TX: 'TX',
	  D2: 'D2',
	},
	params: {
	  class: 'MCU',
	  mounting: false,
	  outline: false
	},
	body: p => {
		const standard = `
			(module Feather_nRF52840 (layer F.Cu) (tedit 629683B7)
			${p.at /* parametric position */}
	
			${'' /* footprint reference */}
			(fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
			(fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
	
			${''/* component outline */}
			(fp_line (start -25.4 11.43) (end 25.4 11.43) (layer Dwgs.User) (width 0.15))
			(fp_line (start 25.4 11.43) (end 25.4 -11.43) (layer Dwgs.User) (width 0.15))
			(fp_line (start 25.4 -11.43) (end -25.4 -11.43) (layer Dwgs.User) (width 0.15))
			(fp_line (start -25.4 -11.43) (end -25.4 11.43) (layer Dwgs.User) (width 0.15))
		`
  
		const mounting = `
			${''/* mounting holes */}
			(pad "" np_thru_hole circle (at -22.86 8.89) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
			(pad "" np_thru_hole circle (at 22.86 8.89) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
			(pad "" np_thru_hole circle (at -22.86 -8.89) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
			(pad "" np_thru_hole circle (at 22.86 -8.89) (size 3.81 3.81) (drill 2.54) (layers *.Cu *.Mask))
		`
  
		const pins = `
			${''/* pin names */}
			(fp_text user VBAT (at -8.89 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user EN (at -6.35 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user VBUS (at -3.81 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D13 (at -1.27 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D12 (at 1.27 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D11 (at 3.81 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D10 (at 6.35 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D9 (at 8.89 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D6 (at 11.43 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D5 (at 13.97 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user SCL (at 16.51 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user SDA (at 19.05 -7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			
			(fp_text user RST (at -19.05 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user RAW (at -16.51 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user AREF (at -13.97 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user GND (at -11.43 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user A0 (at -8.89 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user A1 (at -6.35 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user A2 (at -3.81 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user A3 (at -1.27 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user A4 (at 1.27 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user A5 (at 3.81 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user SCK (at 6.35 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user MOSI (at 8.89 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user MISO (at 11.43 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user RX (at 13.97 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user TX (at 16.51 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
			(fp_text user D2 (at 19.05 7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
	
			${''/* pins */}
			(pad 1 thru_hole circle (at -8.89 -10.16) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VBAT.str})
			(pad 2 thru_hole circle (at -6.35 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.EN.str})
			(pad 3 thru_hole circle (at -3.81 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VBUS.str})
			(pad 4 thru_hole circle (at -1.27 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D13.str})
			(pad 5 thru_hole circle (at 1.27 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D12.str})
			(pad 6 thru_hole circle (at 3.81 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D11.str})
			(pad 7 thru_hole circle (at 6.35 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D10.str})
			(pad 8 thru_hole circle (at 8.89 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D9.str})
			(pad 9 thru_hole circle (at 11.43 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D6.str})
			(pad 10 thru_hole circle (at 13.97 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D5.str})
			(pad 11 thru_hole circle (at 16.51 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.SCL.str})
			(pad 12 thru_hole circle (at 19.05 -10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.SDA.str})
			
			(pad 13 thru_hole circle (at -19.05 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RST.str})
			(pad 14 thru_hole circle (at -16.51 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RAW.str})
			(pad 15 thru_hole circle (at -13.97 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.AREF.str})
			(pad 16 thru_hole circle (at -11.43 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
			(pad 17 thru_hole circle (at -8.89 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A0.str})
			(pad 18 thru_hole circle (at -6.35 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A1.str})
			(pad 19 thru_hole circle (at -3.81 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A2.str})
			(pad 20 thru_hole circle (at -1.27 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A3.str})
			(pad 21 thru_hole circle (at 1.27 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A4.str})
			(pad 22 thru_hole circle (at 3.81 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A5.str})
			(pad 23 thru_hole circle (at 6.35 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.SCK.str})
			(pad 24 thru_hole circle (at 8.89 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.MOSI.str})
			(pad 25 thru_hole circle (at 11.43 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.MISO.str})
			(pad 26 thru_hole circle (at 13.97 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RX.str})
			(pad 27 thru_hole circle (at 16.51 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.TX.str})
			(pad 28 thru_hole circle (at 19.05 10.16 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D2.str})
		`
	  
		return `
			${standard}
			${pins}
			${p.param.mounting ? mounting : ``})
		`
	}
}