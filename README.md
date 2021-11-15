---
Đại học Bách Khoa - ĐHQG TP.HCM (HCMUT)
Môn: Công nghệ phần mềm / HK211
Nhóm 43 - Bài tập lớn
---

# Danh sách thành viên

| STT  | Họ tên                | MSSV        |
| ---- | --------------------- | ----------- |
| 1    | Lê Tuấn Uy            | 1915865     |
| 2    | Huỳnh Đình Quang Khải | 1812612     |
| 3    | Thái Đình Khả         | 1913763     |
| 4    | Nguyễn Thành Đạt      | 2012938     |
| 5    | Hà Phương Điền        | 1913106     |
| 6    | Nguyễn Ngọc Hanh      | 1610851     |
| 7    | ~~Mai Huỳnh Hữu Tín~~ | ~~1713505~~ |

# POS 2.0

## Giới thiệu

Điểm bán hàng (Point of sale - POS) hoặc điểm mua hàng là thời gian và địa điểm diễn ra giao dịch bán lẻ
hoàn thành. Tại điểm bán hàng, người bán có thể tính số tiền khách hàng nợ,
có thể chuẩn bị hóa đơn cho khách hàng và cho biết các tùy chọn để khách hàng thực hiện thanh toán. 
Trong kinh doanh nhà hàng, hệ thống POS thường bao gồm bàn đặt chỗ, đặt đồ ăn, cảnh báo, thanh toán, 
xử lý thẻ tín dụng và quản lý khách hàng. Ngay cả trước cuộc khủng hoảng COVID-19, các hệ thống POS đã đạt 
được sức hút trong toàn ngành. Trong đại dịch coronavirus, các nhà hàng phải đối mặt với nguy
cơ phá sản lớn hơn bao giờ hết. Những hệ thống như vậy được kỳ vọng sẽ làm tăng trí tuệ kinh doanh, giảm 
thiểu những nỗ lực vô ích và tạo ra cơ hội mở rộng quy mô thành một doanh nghiệp lớn.
Hệ thống POS dựa trên web tốt cần được hiện thực ngoài những yêu cầu nêu trên phải hỗ trợ thêm các tùy chọn 
mang đi hay tại chỗ cho khách hàng, responsive, và dễ sử dụng.

## Cấu trúc repository

### Thiết kế hệ thống

Toàn bộ những mô tả và thiết kế về hệ thống được đặt trong thư mục [docs](./docs).
Bao gồm:

- Task 1: Lược đồ use-case, use-case scenario, yêu cầu chức năng, phi chức năng, và các mô tả khác về hệ thống.
- Task 2: Lược đồ hoạt động (activity diagram), lược đồ tuần tự (sequence diagram).
- Task 3: Lược đồ lớp (class diagram), lược đồ thành phần (component diagram).
- Task 4: Wireframe, phát triển MVP giai đoạn 1.
- Task 5: Phát triển MVP giai đoạn 2.

Ngoài ra, văn bản ghi lại các cuộc họp hàng tuần (meeting minutes) cũng được đặt trong thư mục này.

### Hiện thực code
Ứng dụng web được nhóm phát triển sử dụng framework Django.

+ Ngôn ngữ lập trình được sử dụng chính bên backend là python
+ Phần frontend sử dụng HTML, CSS và Javascript.

Toàn bộ phần code của ứng dụng được đặt trong thư mục [main](./main)

*Lưu ý: Folder Home và Cart là 2 folder riêng lẻ làm từ HTML, CSS, JS. Folder Django/pos là folder chính và được tổng hợp, chỉnh sửa từ 2 folder trên*


## Chạy ứng dụng trên web
Để có thể chạy được ứng dụng hiện tại trên trình duyệt, cần phải cài đặt môi trường python và framework Django:

- Việc cài đặt python trên máy và tạo môi trường ảo có thể xem tại [đây](https://www.python.org/) và [đây](https://docs.python.org/3/tutorial/venv.html).
Tạo môi trường ảo là tùy chọn, có thể không cần tạo cũng được.

- Cài đặt Django sau khi đã có python, mở command line hay terminal và gõ lệnh sau là hoàn thành.
```
pip install django
```

Sau khi đã cài đặt đủ mọi thứ, đi đến thư mục [pos](./main/Django/pos) nằm trong thư mục [main/Django](./main/Django) và gõ lệnh sau trên command line hay terminal.
```
py manage.py runserver
```
Cuối cùng, mở trình duyệt và truy cập vào `localhost:8000` hay `http://127.0.0.1:8000/`
