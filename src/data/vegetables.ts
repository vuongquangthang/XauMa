export interface Vegetable {
  id: string
  name: string
  category: 'leaf' | 'root_fruit' | 'herb'
  icon: string
  desc: string
  isCommonExclusion?: boolean
  allergenNote?: string
}

export const VEGETABLES: Vegetable[] = [
  { id: 'hanh-tay', name: 'Hành tây', category: 'root_fruit', icon: '🧅', desc: 'Hành tây củ nhỏ, ngọt thanh', isCommonExclusion: true },
  { id: 'ot-chuong', name: 'Ớt chuông', category: 'root_fruit', icon: '🫑', desc: 'Ớt chuông đa sắc dáng méo', isCommonExclusion: true },
  { id: 'ca-rot', name: 'Cà rốt', category: 'root_fruit', icon: '🥕', desc: 'Cà rốt hai chân giòn ngọt' },
  { id: 'ca-chua', name: 'Cà chua', category: 'root_fruit', icon: '🍅', desc: 'Cà chua bi rám nắng mọng nước' },
  { id: 'dua-leo', name: 'Dưa leo', category: 'root_fruit', icon: '🥒', desc: 'Dưa leo vườn vỏ sần giòn mát' },
  { id: 'khoai-tay', name: 'Khoai tây', category: 'root_fruit', icon: '🥔', desc: 'Khoai tây đất đỏ bùi thơm' },
  { id: 'bap-ngot', name: 'Bắp non', category: 'root_fruit', icon: '🌽', desc: 'Bắp ngọt hai hàng hạt tự nhiên' },
  { id: 'xa-lach', name: 'Xà lách mộc', category: 'leaf', icon: '🥬', desc: 'Xà lách thủy canh xanh giòn' },
  { id: 'rau-cai', name: 'Rau cải xanh', category: 'leaf', icon: '🌿', desc: 'Cải ngọt, cải thìa lá cong', isCommonExclusion: true },
  { id: 'dua', name: 'Dứa vườn', category: 'root_fruit', icon: '🍍', desc: 'Dứa mật quả nhỏ ngọt sắc', isCommonExclusion: true },
  { id: 'nam-huong', name: 'Nấm tươi', category: 'leaf', icon: '🍄', desc: 'Nấm sò, nấm đùi gà dáng tự nhiên', allergenNote: 'Cần lưu ý nếu có tiền sử dị ứng nấm' },
  { id: 'cu-den', name: 'Củ dền đỏ', category: 'root_fruit', icon: '🍠', desc: 'Củ dền đậm màu giàu dưỡng chất' },
]

export const EXCLUSION_OPTIONS = [
  { id: 'hanh-tay', label: 'Hành tây', icon: '🧅' },
  { id: 'ot-chuong', label: 'Ớt chuông', icon: '🫑' },
  { id: 'dua', label: 'Dứa (Thơm)', icon: '🍍' },
  { id: 'rau-cai', label: 'Rau cải đắng', icon: '🌿' },
  { id: 'nam-huong', label: 'Nấm các loại', icon: '🍄', isAllergy: true },
]
