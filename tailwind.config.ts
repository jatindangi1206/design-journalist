
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px',
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated royal color scheme
				'nyt-red': '#8B0000', // Darker royal red
				'nyt-blue': '#14375F', // Deep navy blue
				'nyt-black': '#121212',
				'nyt-gray-dark': '#333333',
				'nyt-gray': '#666666',
				'nyt-gray-light': '#E2E2E2',
				'nyt-background': '#F9F7F1', // Cream parchment color
				'royal-gold': '#D4AF37', // Royal gold
				'royal-purple': '#4B0082', // Royal purple
				'royal-burgundy': '#800020', // Royal burgundy
				'royal-cream': '#F9F7F1', // Royal cream/parchment
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				sans: ['Helvetica', 'Arial', 'sans-serif'],
				broadway: ['Broadway', 'Impact', 'Haettenschweiler', 'sans-serif'],
			},
			fontSize: {
				'featured': ['50px', {
					lineHeight: '1.1',
					fontWeight: '700',
				}],
				'headline': ['34px', {
					lineHeight: '1.2',
					fontWeight: '700',
				}],
				'subhead': ['24px', {
					lineHeight: '1.3',
					fontWeight: '400',
					fontStyle: 'italic',
				}],
				'body': ['20px', {
					lineHeight: '1.5',
					fontWeight: '400',
				}],
				'caption': ['14px', {
					lineHeight: '1.4',
					fontWeight: '400',
				}],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
			},
			spacing: {
				'golden': '1.618em',
			},
			backgroundImage: {
				'royal-pattern': "url('https://i.ibb.co/1zsyPd4/royal-pattern.png')",
			},
			gridTemplateColumns: {
				'article-desktop': 'repeat(5, 1fr)',
				'article-tablet': 'repeat(3, 1fr)',
				'article-mobile': '1fr',
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#121212',
						a: {
							color: '#14375F',
							'&:hover': {
								color: '#D4AF37',
							},
						},
						h1: {
							fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
							fontWeight: '700',
						},
						h2: {
							fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
							fontWeight: '700',
						},
						h3: {
							fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
							fontWeight: '600',
						},
						h4: {
							fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
							fontWeight: '600',
						},
						blockquote: {
							borderLeftColor: '#D4AF37',
							fontStyle: 'italic',
							color: '#333333',
						},
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
