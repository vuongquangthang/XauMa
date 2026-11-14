export interface FaqItem {
  id: number
  question: string
  answer: string
}

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Rau củ xấu mã có đảm bảo chất lượng và an toàn thực phẩm không?',
    answer:
      'Có. Xấu Mã chỉ chấp nhận các sản phẩm "xấu mã" về mặt ngoại hình (như kích thước không đồng đều, củ cong queo, quả có vết rám nắng tự nhiên), nhưng hoàn toàn đảm bảo độ tươi giòn, không dập úng, không sâu bệnh và được tuyển chọn từ các nông trại canh tác an toàn, minh bạch nguồn gốc.',
  },
  {
    id: 2,
    question: 'Mỗi hộp bao gồm những loại rau củ nào?',
    answer:
      'Mỗi hộp là một tổ hợp các loại rau củ thu hoạch tươi sớm theo mùa vụ (như cà rốt, cà chua, dưa leo, xà lách, khoai tây, bắp non...). Danh mục cụ thể phụ thuộc vào mùa thu hoạch thực tế trong ngày tại các nhà vườn đối tác để đảm bảo độ tươi mới cao nhất.',
  },
  {
    id: 3,
    question: 'Tôi có thể loại trừ thực phẩm không thích trước khi giao không?',
    answer:
      'Có. Bạn có thể sử dụng tính năng "AI Đi Chợ" trên website để chọn loại trừ các loại củ quả không hợp khẩu vị (như hành tây, ớt chuông, dứa...). Hệ thống sẽ tự động cân đối và đề xuất loại rau củ khác tương đương khối lượng trong gói.',
  },
  {
    id: 4,
    question: 'Nếu tôi bị dị ứng thực phẩm thì cần lưu ý gì?',
    answer:
      'Quý khách vui lòng đánh dấu loại thực phẩm gây dị ứng hoặc ghi chú rõ trong form đặt hàng. Xin lưu ý: Mặc dù Xấu Mã phân loại cẩn thận, toàn bộ rau củ được sơ chế và đóng gói tại cùng khu vực tập kết nông trại nên không thể loại trừ tuyệt đối nguy cơ tiếp xúc vi lượng.',
  },
  {
    id: 5,
    question: 'Phí vận chuyển được tính như thế nào?',
    answer:
      'Xấu Mã hỗ trợ giao hàng tận nơi tại khu vực nội thành Hà Nội và TP.HCM. Phí vận chuyển được thông báo cụ thể khi xác nhận địa chỉ thực tế (hiện áp dụng miễn phí vận chuyển cho các đơn hàng từ 149.000đ hoặc combo dùng thử theo chương trình).',
  },
  {
    id: 6,
    question: 'Làm thế nào để truy xuất nguồn gốc nông trại của chiếc hộp?',
    answer:
      'Mỗi hộp giao đến tay bạn đều có một thẻ tag gắn mã QR. Bạn chỉ cần dùng camera điện thoại hoặc Zalo để quét mã, hệ thống sẽ hiển thị thông tin về nông trại thu hoạch, ngày đóng gói và quy trình kiểm soát.',
  },
  {
    id: 7,
    question: 'Tôi có được đổi trả nếu nhận sản phẩm bị hư hỏng không?',
    answer:
      'Chắc chắn có. Bạn được quyền đồng kiểm cùng shipper khi nhận hàng. Nếu phát hiện bất kỳ củ quả nào bị dập hỏng do vận chuyển, Xấu Mã cam kết đổi trả hoặc hoàn tiền tương ứng trong vòng 24 giờ kể từ lúc nhận hàng.',
  },
]
