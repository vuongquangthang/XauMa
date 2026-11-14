import { Product } from '../data/products'
import { VEGETABLES, Vegetable } from '../data/vegetables'

export interface AiShoppingInput {
  product: Product
  excludedFoods: string[]
  preference: 'leaf' | 'root_fruit' | 'balanced'
}

export interface SuggestedItem {
  vegetable: Vegetable
  estimatedWeight: string
}

export interface AiShoppingRecommendation {
  product: Product
  suggestedItems: SuggestedItem[]
  totalWeight: string
  totalPrice: number
  excludedList: string[]
  allergenNotice?: string
  nutritionHighlight: string
}

export const generateAiRecommendation = (input: AiShoppingInput): AiShoppingRecommendation => {
  const { product, excludedFoods, preference } = input

  // Lọc bỏ những củ quả bị loại trừ
  const availableVeggies = VEGETABLES.filter(
    (v) => !excludedFoods.includes(v.id) && !excludedFoods.includes(v.name)
  )

  let sortedVeggies = [...availableVeggies]

  if (preference === 'leaf') {
    // Ưu tiên rau ăn lá lên đầu
    sortedVeggies.sort((a, b) => (a.category === 'leaf' ? -1 : 1))
  } else if (preference === 'root_fruit') {
    // Ưu tiên củ quả lên đầu
    sortedVeggies.sort((a, b) => (a.category === 'root_fruit' ? -1 : 1))
  }

  // Số lượng món phụ thuộc vào loại hộp
  let itemCount = 4
  if (product.id === 'hop-gia-dinh' || product.id === 'hop-tron-vi') itemCount = 6
  if (product.id === 'hop-tiec-xanh') itemCount = 7

  const selectedVeggies = sortedVeggies.slice(0, itemCount)

  // Gán trọng lượng ước tính từng món theo gói
  const suggestedItems: SuggestedItem[] = selectedVeggies.map((veg, idx) => {
    let weight = '400g'
    if (product.id === 'hop-sinh-vien') {
      weight = idx === 0 ? '600g' : '400g'
    } else if (product.id === 'hop-gia-dinh' || product.id === 'hop-tron-vi') {
      weight = idx < 2 ? '800g' : '600g'
    } else {
      weight = idx < 3 ? '1.2kg' : '800g'
    }
    return { vegetable: veg, estimatedWeight: weight }
  })

  let nutritionHighlight = 'Cân bằng chất xơ, vitamin A & C dồi dào từ rau củ quả chín vụ.'
  if (preference === 'leaf') {
    nutritionHighlight = 'Giàu diệp lục, axit folic và chất xơ hòa tan giúp thanh lọc cơ thể.'
  } else if (preference === 'root_fruit') {
    nutritionHighlight = 'Nguồn năng lượng sạch, giàu kali, beta-carotene và khoáng chất tự nhiên.'
  }

  return {
    product,
    suggestedItems,
    totalWeight: product.weight,
    totalPrice: product.price,
    excludedList: excludedFoods,
    allergenNotice: excludedFoods.includes('nam-huong')
      ? 'Đã loại trừ nấm theo yêu cầu người dùng.'
      : undefined,
    nutritionHighlight,
  }
}
