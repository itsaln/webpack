const plugin = require('tailwindcss/plugin')
const twColors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	important: true,
	theme: {
		colors: {
			white: twColors.white,
			black: twColors.black,
			transparent: twColors.transparent,
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			backdrop: 'var(--backdrop)',
			dark: 'var(--dark)',
			primary: 'var(--primary)',
			secondary: 'var(--secondary)',
			warning: 'var(--warning)',
			danger: 'var(--danger)',
			success: 'var(--success)',
			grey: 'var(--grey)',
			'grey-100': 'var(--grey-100)',
			'grey-200': 'var(--grey-200)',
			'grey-300': 'var(--grey-300)',
			'grey-400': 'var(--grey-400)',
			gold: 'var(--gold)',
			purple: 'var(--purple)'
		},
		extend: {
			fontFamily: {
				montserrat: ['var(--font-montserrat)']
			},
			fontSize: {
				xs: ['11px', '14px'],
				sm: ['12.5px', '16px'],
				base: ['14px', '18px'],
				lg: ['17px', '22px'],
				xl: ['22.5px', '28px'],
				'2xl': ['28px', '36px']
			},
			spacing: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
				'3xl': 'var(--spacing-3xl)'
			},
			borderRadius: {
				garden: 'var(--radius-garden)',
				island: 'var(--radius-island)',
				continent: 'var(--radius-continent)',
				rounding: 'var(--radius-rounding)'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			}
		},
		container: {
			center: true,
			padding: '16px',
			screens: {
				sm: '576px',
				md: '769px',
				lg: '992px',
				xl: '1280px',
				'2xl': '1536px'
			}
		}
	},
	plugins: [
		plugin(({ addComponents, addUtilities }) => {
			addComponents({
				'.truncate-1': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '1',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-2': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '2',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-3': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '3',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-4': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '4',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				}
			})
			addUtilities({
				'.outline-border-none': {
					outline: 'none',
					border: 'none'
				},
				'.pointer-events-all': {
					pointerEvents: 'all'
				}
			})
		})
	]
}
