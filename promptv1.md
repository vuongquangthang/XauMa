# Role & Objective
Build a complete, production-ready, single-page React + Vite + TypeScript + Tailwind CSS e-commerce landing page for **"Nâng Niu Nông Sản Việt"** featuring their flagship product **"Hộp Nông Sản Xấu Mã"** under the campaign **"Nông Sản Đúng Chất – Không Cần Đúng Chuẩn"**.

The visual aesthetic combines **organic, warm agricultural storytelling** with a **cinematic dark-moss "Liquid Glass" morphism UI** and **smooth Framer Motion blur/fade choreography**.

**CRITICAL LANGUAGE RULE:** All visible UI copy, headings, labels, badges, cards, comparisons, testimonials, and footer text MUST be written in natural, inspiring, modern **Vietnamese** (using proper Vietnamese diacritics).

---

# Tech Stack & Dependencies
- `react`, `react-dom`
- `framer-motion` (for all scroll reveals, staggered blur-ins, and interactive animations)
- `tailwindcss`, `postcss`, `autoprefixer`
- `vite`, `@vitejs/plugin-react`, `typescript`
- Custom inline SVG icons (no external icon library needed).

---

# Typography & Color System

### 1. Google Fonts (`index.html`)
Load Vietnamese-compatible editorial serif and clean geometric sans-serif fonts:
- **Playfair Display** (italic, weights 600, 700) — used for all display headings (`font-heading`)
- **Be Vietnam Pro** (weights 300, 400, 500, 600, 700) — used for body text and UI controls (`font-body`)

Tailwind config `fontFamily`:
```js
heading: ["'Playfair Display'", 'serif'],
body: ["'Be Vietnam Pro'", 'sans-serif'],
```

### 2. Color Palette (Agricultural Cinematic Dark-Moss)
- **Primary Background:** `#0E1F14` (Deep Forest Moss) with radial subtle glows of `#162B1E`
- **Primary Accent:** `#A3D95B` (Fresh Sprout Green — used for primary CTAs, key metrics, highlights)
- **Secondary Warm Accent:** `#D2B48C` (Kraft Paper Beige) & `#E86A33` (Organic Carrot Orange — subtle badges/highlights)
- **Text Primary:** `#F9FBF7` (Warm Cream White)
- **Text Secondary:** `rgba(249, 251, 247, 0.8)`

Base CSS (`index.css`):
```css
html, body {
  background-color: #0E1F14;
  color: #F9FBF7;
  font-family: 'Be Vietnam Pro', sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
```

---

# Liquid Glass CSS Architecture (`index.css`)

Define two glassmorphism classes tailored with a subtle dew-green rim light:

### `.liquid-glass` (Subtle Card/Pill)
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.02);
  background-blend-mode: luminosity;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: inset 0 1px 1px rgba(218, 245, 185, 0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(218, 245, 185, 0.45) 0%,
    rgba(218, 245, 185, 0.12) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(210, 180, 140, 0.15) 80%,
    rgba(218, 245, 185, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### `.liquid-glass-strong` (Elevated CTA / Featured Card)
```css
.liquid-glass-strong {
  background: rgba(163, 217, 91, 0.08);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(218, 245, 185, 0.3);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(
    180deg,
    rgba(163, 217, 91, 0.65) 0%,
    rgba(163, 217, 91, 0.2) 25%,
    rgba(255, 255, 255, 0) 50%,
    rgba(210, 180, 140, 0.25) 75%,
    rgba(163, 217, 91, 0.65) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

---

# Core Reusable Motion Components

### 1. `<FadingVideo />`
- Props: `src` (string | string[]), `className`, `style`, `poster` (optional fallback image).
- Behavior:
  1. Starts at `opacity: 0`.
  2. On `loadeddata`, smoothly fades in over `500ms` via `requestAnimationFrame`.
  3. On `timeupdate`, when `duration - currentTime <= 0.55`, smoothly fades out over `550ms`.
  4. On `ended`, resets `currentTime = 0` (or cycles to next video in array), replays, and fades back in.
  5. Attributes: `autoPlay`, `muted`, `playsInline`, `preload="auto"`.
  6. Use high-aesthetic nature/organic farm/morning sunlight agriculture stock video URLs (with a rich dark-moss gradient + high-res agricultural background fallback so it always looks stunning even offline).

### 2. `<BlurText />`
- Word-by-word staggered blur-in animation using Framer Motion (`whileInView`, `viewport={{ once: true, amount: 0.1 }}`).
- Splits `text` by spaces into `motion.span` elements (`display: inline-block`, `marginRight: 0.28em`).
- Initial: `{ filter: 'blur(10px)', opacity: 0, y: 40 }` -> Animate: `{ filter: 'blur(0px)', opacity: 1, y: 0 }`.
- Duration: `0.7s` per word, stagger delay `0.09s` per word index.

### 3. `<GlassReveal />`
- Wrapper component for cards, pills, and blocks.
- Initial: `{ filter: 'blur(10px)', opacity: 0, y: 24 }` -> WhileInView: `{ filter: 'blur(0px)', opacity: 1, y: 0 }`, `duration: 0.8s`, `ease: "easeOut"`, configurable `delay`.

---

# Page Architecture & Detailed Sections (7 Sections + Floating Navbar)

### Floating Navbar (Fixed `top-4 left-0 right-0 z-50`)
- **Left:** `liquid-glass` pill/circle featuring a custom SVG basket-vegetable logo mark + brand text `"Nâng Niu Nông Sản Việt"`.
- **Center (Desktop `md:flex`):** `liquid-glass rounded-full px-2 py-1.5` containing smooth-scroll anchor links:
  - `"Câu chuyện"` (`#problem`)
  - `"Hộp Xấu Mã"` (`#solution`)
  - `"So sánh"` (`#comparison`)
  - `"Tác động xanh"` (`#impact`)
  - `"Đánh giá"` (`#reviews`)
  - Plus a solid sprout-green (`bg-[#A3D95B] text-[#0E1F14] font-semibold`) CTA button: `"Đặt Hộp Ngay"` (`#order`).
- **Right:** Subtle `liquid-glass` cart/box counter badge (`0` or interactive quick-order trigger).

---

### Section 1: HERO SECTION (`min-h-screen`, id="hero")
- **Background:** `<FadingVideo>` showing morning sunlight over fresh organic vegetables/farm leaves, overlaid with a radial gradient `bg-gradient-to-b from-[#0E1F14]/75 via-[#0E1F14]/60 to-[#0E1F14]`.
- **Top Badge (`delay: 0.3`):** `liquid-glass rounded-full px-4 py-1.5` with a sprout-green pill `"Mùa vụ 2026"` + text `"Nông sản đúng chất – Không cần đúng chuẩn"`.
- **Main Headline (`<BlurText>`):**
  - Text: `"Hộp Nông Sản Xấu Mã – Vẻ Ngoài Lạ Mắt, Vị Ngon Nguyên Bản"`
  - Style: `font-heading italic text-4xl sm:text-6xl lg:text-[4.75rem] text-[#F9FBF7] leading-[1.05] tracking-[-1.5px] max-w-4xl text-center`
- **Sub-headline (`delay: 0.8`):**
  - `"Tươi sạch 100% thu hoạch trong ngày từ nông trại Việt. Tiết kiệm đến 30% chi phí và cùng chúng tôi giải cứu những rau củ lành lặn bị bỏ quên vì ngoại hình."`
- **CTA Buttons (`delay: 1.0`):**
  - Primary: `liquid-glass-strong bg-[#A3D95B]/20 hover:bg-[#A3D95B] hover:text-[#0E1F14] transition-all rounded-full px-7 py-3.5 font-semibold flex items-center gap-2` -> `"Đặt Hộp Xấu Mã Ngay"` + `ArrowUpRight` icon.
  - Secondary: `liquid-glass rounded-full px-6 py-3.5 text-sm font-medium flex items-center gap-2` -> `"Khám phá bên trong hộp"` + `Play` icon.
- **Visual Showcase & Quick Trust Stats (`delay: 1.2`):**
  - Centerpiece floating visual card (`liquid-glass rounded-[1.5rem] p-4 max-w-2xl w-full` with gentle continuous Framer Motion float `y: [-5, 5]`): Displays an illustrated/styled Kraft Eco-Box ("XẤU MÃ") bursting with quirky-shaped carrots, tomatoes, pears, and crisp lettuce, accompanied by a swaying QR traceability hang-tag (`"Quét QR truy xuất nguồn gốc nông trại"`).
  - Two flanking `liquid-glass` stat pills:
    - `"24 Giờ"` — `"Từ nông trại đến bàn ăn"`
    - `"-30% Chi Phí"` — `"So với rau củ chuẩn siêu thị"`

---

### Section 2: CÂU CHUYỆN CHIẾN DỊCH & VẤN ĐỀ (`#problem`)
- **Section Label:** `// Câu chuyện & Thực trạng`
- **Headline (`<BlurText>`):** `"Khi vẻ bề ngoài đánh cắp giá trị thật của nông sản"`
- **Layout:** Asymmetric 2-column grid:
  - **Left Column (Big Impact Stat Card in `liquid-glass-strong rounded-[1.5rem] p-8`):**
    - Animated count-up metric: **`30%`** (with sub-stat **`8,8 triệu tấn/năm`** food loss context).
    - Title: `"Rau củ tươi ngon bị bỏ lại trên đồng ruộng"`
    - Copy: `"Chỉ vì hơi cong, quá khổ, hay có vài vết rám nắng tự nhiên, hàng tấn nông sản đạt chuẩn an toàn vẫn bị các hệ thống siêu thị từ chối. Người nông dân chịu cảnh được mùa mất giá, còn thiên nhiên lãng phí nguồn tài nguyên quý giá."`
  - **Right Column (Consumer Insight & Staggered Pills):**
    - 3 staggered `liquid-glass` horizontal cards sliding in from right (`x: 30 -> 0`):
      1. **Định kiến ngoại hình:** `"Củ cà rốt hai chân hay quả cà chua méo mó vẫn giữ nguyên 100% vitamin và độ ngọt tự nhiên."`
      2. **Tiêu dùng thấu hiểu:** `"Bữa cơm ngon đến từ độ tươi và sự an toàn của thực phẩm, không nằm ở khuôn mẫu thẩm mỹ."`
      3. **Đồng hành bền vững:** `"Mỗi lựa chọn của bạn là một đầu ra ổn định, giúp nông dân Việt yên tâm canh tác sạch."`

---

### Section 3: GIẢI PHÁP & SẢN PHẨM TRỌNG TÂM (`#solution`)
- **Section Label:** `// Giải pháp từ Nâng Niu Nông Sản Việt`
- **Headline (`<BlurText>`):** `"Hộp Nông Sản Xấu Mã – Bất Ngờ Thú Vị Trong Từng Mùa Vụ"`
- **Interactive "Unboxing" Experience:**
  - Center interactive `liquid-glass-strong` product box showcase with a toggle/hover state (`"Mở nắp hộp khám phá"`): Users can toggle between box sizes (**Hộp Cá Nhân 3kg – 89.000đ** vs. **Hộp Gia Đình 5kg – 149.000đ**), dynamically updating the seasonal produce tags inside (`Cà rốt Đà Lạt dáng lạ`, `Cà chua bi rám nắng`, `Xà lách thủy canh`, `Lê xanh mộc mạc`, `Dưa leo vườn`).
- **3 Core Commitments Grid (`grid-cols-1 md:grid-cols-3 gap-6 mt-12`):**
  - Styled after the Capabilities cards (`liquid-glass rounded-[1.25rem] p-6 min-h-[300px] flex flex-col justify-between` with hover lift `y: -8`):
  1. **100% Tươi Sạch & An Toàn**
     - Icon: Leaf/Shield SVG in nested `liquid-glass` square.
     - Tags: `["Thuận tự nhiên", "Giao nhanh 24h", "QR Truy xuất"]`
     - Copy: `"Canh tác an toàn theo quy trình kiểm soát nghiêm ngặt. Thu hoạch sáng sớm và giao thẳng tới tay bạn trong 24 giờ kèm mã QR minh bạch từng nhà vườn."`
  2. **100% Vị Ngon Nguyên Bản**
     - Icon: Sparkle/Heart SVG.
     - Tags: `["Giữ trọn dưỡng chất", "Đậm vị tự nhiên", "Không chất bảo quản"]`
     - Copy: `"Ngoại hình độc bản nhưng ruột giòn ngọt, đậm đà hương vị đặc trưng của nông sản trồng đúng mùa, không ép chín, không hóa chất làm bóng."`
  3. **Tiết Kiệm 20% – 30% Chi Phí**
     - Icon: Piggy/Tag SVG.
     - Tags: `["Giá tốt mỗi ngày", "Tối ưu phân loại", "Trợ giá nông dân"]`
     - Copy: `"Cắt giảm chi phí tuyển chọn ngoại hình khắt khe và khâu trung gian, mang lại mức giá dễ tiếp cận cho sinh viên, gia đình trẻ và bếp ăn xanh."`

---

### Section 4: SO SÁNH TRỰC QUAN – "REAL VS. STANDARD" (`#comparison`)
- **Section Label:** `// Sự thật minh bạch`
- **Headline (`<BlurText>`):** `"Chuẩn Siêu Thị Hào Nhoáng vs. Hộp Nông Sản Xấu Mã"`
- **Layout:** Side-by-side 2-column comparison matrix wrapped in glass containers:
  - **Column 1 (`liquid-glass opacity-80 rounded-[1.5rem] p-7`):** **"Nông Sản Chuẩn Siêu Thị"**
    - **Hình thức:** Đều tăm tắp, bóng bẩy, loại bỏ 30% sản lượng đạt chất lượng chỉ vì lệch kích cỡ.
    - **Dinh dưỡng & Độ tươi:** Thường lưu kho lạnh dài ngày, bảo quản để giữ vẻ ngoài bắt mắt.
    - **Giá thành:** Cao hơn 25% – 35% do gánh chi phí phân loại, bao bì và chiết khấu chuỗi.
    - **Tác động môi trường:** Gia tăng rác thải thực phẩm và khí thải từ khâu loại bỏ nông sản.
  - **Column 2 (`liquid-glass-strong rounded-[1.5rem] p-7 border border-[#A3D95B]/40`):** **"Hộp Nông Sản Xấu Mã"** *(Badge: Khuyên dùng)*
    - **Hình thức:** Độc lạ, tự nhiên 100% – mỗi củ quả mang một dáng vẻ riêng không trùng lặp.
    - **Dinh dưỡng & Độ tươi:** Thu hoạch theo đơn, giao tươi trong 24h, giữ trọn vẹn vitamin nguyên bản.
    - **Giá thành:** **Tiết kiệm 20% – 30%**, tối ưu ngân sách đi chợ sạch hàng tuần.
    - **Tác động môi trường:** Cứu trợ nông sản, giảm phát thải $CO_2$ và hỗ trợ thu nhập bền vững cho nông dân.

---

### Section 5: TÁC ĐỘNG XÃ HỘI & BỀN VỮNG (`#impact`)
- **Background:** Subtle `<FadingVideo>` or glowing organic ambient mesh.
- **Section Label:** `// Cùng Xấu Mã lan tỏa lối sống xanh`
- **Headline (`<BlurText>`):** `"Những Con Số Biết Nói Từ Cộng Đồng Sống Xanh"`
- **3 Impact Metric Cards (`grid-cols-1 md:grid-cols-3 gap-6`):**
  1. **`142.500+ kg`** — **Nông sản được giải cứu** — `"Rau củ tươi ngon thoát khỏi cảnh bị bỏ phí trên ruộng vườn mỗi năm."`
  2. **`320+ Hộ`** — **Nông dân Việt đồng hành** — `"Có đầu ra ổn định với mức thu mua công bằng, không bị ép giá."`
  3. **`85.400 kg`** — **Khí thải $CO_2$ được cắt giảm** — `"Tích lũy điểm Eco-Card xanh cho mỗi hộp bạn đặt để đổi quà và ưu đãi."`

---

### Section 6: CẢM NHẬN KHÁCH HÀNG (`#reviews`)
- **Section Label:** `// Khách hàng nói gì về Xấu Mã?`
- **Headline (`<BlurText>`):** `"Yêu Từ Cái Nhìn Đầu Tiên… Vì Độ Độc Lạ!"`
- **3 Testimonial Cards (`liquid-glass rounded-[1.25rem] p-6`):**
  1. **Minh Anh (22 tuổi, Sinh viên ĐH Kinh Tế):** *"Mở hộp ra gặp củ cà rốt dáng đang chạy bộ cười xỉu luôn! Xào lên ngọt lịm, giá lại rẻ hơn siêu thị gần 30% nên cuối tháng vẫn ăn sạch ngon lành."*
  2. **Chị Thu Hà (34 tuổi, Nhân viên văn phòng):** *"Bé nhà mình trước lười ăn rau lắm, từ ngày đặt Hộp Xấu Mã tuần nào con cũng háo hức khui hộp xem hôm nay rau củ có hình thù gì đặc biệt."*
  3. **Hoàng Nam (27 tuổi, Content Creator):** *"Đóng gói hộp giấy kraft rất chỉn chu, quét mã QR thấy rõ vườn trồng ở Đà Lạt nên cực kỳ yên tâm. Ủng hộ nông dân Việt theo cách thiết thực nhất!"`

---

### Section 7: FINAL CTA & FOOTER (`#order`)
- **Interactive Order / Subscription Card (`liquid-glass-strong rounded-[2rem] p-8 md:p-12 max-w-4xl mx-auto`):**
  - Headline: `"Sẵn sàng đón nhận những điều không hoàn hảo đầy tươi ngon?"`
  - Subtext: `"Đặt thử Hộp Nông Sản Xấu Mã ngay hôm nay hoặc đăng ký gói định kỳ hàng tuần để nhận ưu đãi Freeship và bộ công thức nấu ăn xanh."`
  - **Interactive Quick-Order Form (Functional React state with instant confirmation toast/modal):**
    - Package selector pills: `Hộp Dùng Thử 3kg (89k)` | `Hộp Gia Đình 5kg (149k)` | `Gói Định Kỳ Tuần (-10%)`
    - Inputs: `Họ và tên`, `Số điện thoại / Zalo`, `Địa chỉ nhận hàng`
    - Submit button: `"Chốt Đơn Hộp Xấu Mã Ngay"` (shows a celebratory Vietnamese confirmation card with order summary & Eco-points earned).
- **Footer Bottom Bar:**
  - Brand: **NÂNG NIU NÔNG SẢN VIỆT** — *"Nông sản đúng chất – Không cần đúng chuẩn"*
  - Contact Info:
    - Hotline / Zalo OA: `1900 6868`
    - Email: `xin-chao@nangniunongsanviet.vn`
    - Trụ sở & Điểm tập kết: `Hà Nội & TP. Hồ Chí Minh`
  - Social Links: `Facebook` | `TikTok` | `Zalo Mini App` | `Instagram`
  - Copyright: `© 2026 Nâng Niu Nông Sản Việt. Cùng Xấu Mã lan tỏa lối sống xanh.`