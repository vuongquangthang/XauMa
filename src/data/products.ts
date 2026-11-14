import { ASSETS } from '../constants/assets'

export interface Product {
  id: string
  name: string
  tagline: string
  price: number
  weight: string
  positioning: string
  targetAudience: string
  description: string
  image: string
  isFeatured?: boolean
  sampleItems: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'hop-sinh-vien',
    name: 'HỘP SINH VIÊN',
    tagline: 'Gọn gàng vừa đủ – Tiết kiệm tối đa',
    price: 49000,
    weight: '1,5 – 2kg',
    positioning: 'Sản phẩm dùng thử',
    targetAudience: 'Sinh viên, người sống một mình',
    description: 'Chiếc hộp hoàn hảo để trải nghiệm lần đầu nông sản xấu mã với mức giá cực kỳ dễ tiếp cận. Đủ cho 3-4 bữa ăn tươi ngon.',
    image: ASSETS.setSinhVien,
    isFeatured: true, // Ưu tiên thị giác và CTA dùng thử
    sampleItems: [
      'Cà rốt Đà Lạt dáng lạ (500g)',
      'Cà chua bi chín cây (300g)',
      'Xà lách thủy canh xanh (300g)',
      'Dưa leo vườn giòn ngọt (400g)',
    ],
  },
  {
    id: 'hop-gia-dinh',
    name: 'HỘP GIA ĐÌNH',
    tagline: 'Cân bằng dưỡng chất – Bữa cơm gia đình ấm cúng',
    price: 99000,
    weight: '4kg',
    positioning: 'Sản phẩm cốt lõi',
    targetAudience: 'Cặp đôi, nhân viên văn phòng, hộ gia đình nhỏ',
    description: 'Dòng sản phẩm được yêu thích nhất với tỷ lệ hài hòa giữa rau ăn lá và củ quả tươi sạch cho cả tuần nấu nướng tiện lợi.',
    image: ASSETS.setGiaDinh,
    sampleItems: [
      'Cà rốt dáng tự nhiên (800g)',
      'Cà chua quả không đều (700g)',
      'Xà lách & rau thơm hữu cơ (600g)',
      'Khoai tây / khoai lang mật (800g)',
      'Dưa leo vườn giòn (600g)',
      'Bắp ngọt non (500g)',
    ],
  },
  {
    id: 'hop-tiec-xanh',
    name: 'HỘP TIỆC XANH',
    tagline: 'Đủ đầy sum vầy – Trọn vẹn tươi xanh',
    price: 169000,
    weight: '7kg',
    positioning: 'Sản phẩm giá trị đơn hàng cao',
    targetAudience: 'Gia đình đông người và nhóm bạn',
    description: 'Thùng nông sản dồi dào, đa dạng chủng loại rau củ cho gia đình lớn hoặc những buổi sum họp nấu lẩu, nướng xanh lành mạnh.',
    image: ASSETS.setTiecXanh,
    sampleItems: [
      'Cà rốt & củ dền đỏ (1.5kg)',
      'Cà chua bi & cà chua thường (1.2kg)',
      'Các loại rau ăn lá đa dạng (1.5kg)',
      'Lê xanh Sa Pa / táo vườn (1.0kg)',
      'Dưa leo & ớt chuông (1.0kg)',
      'Bắp ngọt & khoai tây đất đỏ (800g)',
    ],
  },
]
