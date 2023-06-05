/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif']
		},
		extend: {
			colors: {
				global: {
					veryLigthPink: '#C7C7C7',
					textInputField: '#F7F7F7',
					hospitalGreen: '#ACD9B2',
					white: '#FFFFFF',
					black: '#000000'
				}
			},
			fontSize: {
				compact: '0.875rem', // 14px
				regular: '1rem', // 16px
				bold: '1.125rem' // 18px
				// semiGrande: '1.75rem', // 28px
				// grande: '2.125rem', // 34px
				// jumbo: '3.125rem' // 50px
			}
		}
	},
	plugins: []
};
