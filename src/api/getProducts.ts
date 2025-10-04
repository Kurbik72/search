interface Products<Product> {
  products: Product[]
}

interface Product {
  id: number
  name: string
}

export const mockProducts = Array.from({ length: 100 }, (_, i) => {
  const adjectives = [
    'Smart',
    'Eco',
    'Ultra',
    'Pro',
    'Compact',
    'Mega',
    'Deluxe',
    'Premium',
    'Modern',
    'Classic',
    'Advanced',
    'Digital',
    'Crystal',
    'Fresh',
    'Magic',
    'Strong',
    'Lite',
    'Max',
    'Super',
    'Elegant',
  ]
  const nouns = [
    'Bottle',
    'Microscope',
    'Reagent',
    'Beaker',
    'Flask',
    'Pipette',
    'Dispenser',
    'Analyzer',
    'Cleaner',
    'Filter',
    'Solution',
    'Mixer',
    'Test Tube',
    'Scale',
    'Sensor',
    'Container',
    'Heater',
    'Cooler',
    'Timer',
    'Titrator',
  ]
  const adj = adjectives[i % adjectives.length]
  const noun = nouns[Math.floor(i / adjectives.length) % nouns.length]
  return {
    id: i + 1,
    name: `${adj} ${noun}`,
  }
})

const IS_USE_MOCK_API = true

export const getProducts = async (): Promise<Products<Product>> => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()

  return IS_USE_MOCK_API ? { products: mockProducts } : { products: data }
}
