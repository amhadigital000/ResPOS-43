**Mục lục**

[TOC]

# 1. Yêu cầu chức năng

## 1.0. Truy cập

1. **Tính năng mã QR** dẫn tới WebApp này (cụ thể là homepage): chỉ cần 1 mã, không phân biệt giữa khách, quản lí hay nhân viên. Vì việc đó dành cho tài khoản.
2. **Hiển thị Homepage có:**
   - Banner của nhà hàng, giới thiệu, nút đăng kí, đăng nhập
   - Special deals 
   - Một số phản hồi của khách đã mua hàng
   - Footer của trang web

## 1.1. Chức năng về tài khoản

1. **Đăng kí/ đăng nhập theo 3 loại tài khoản:**

| Tài khoản               | Quyền                                                        |
| ----------------------- | ------------------------------------------------------------ |
| `manager`               | Thực hiện chức năng của quản lý                              |
| `clerk`                 | Thực hiện chức năng của nhân viên                            |
| `customer` <br> `guest` | Cả 2 đều có thể thực hiện xem menu - đặt hàng / thanh toán / phản hồi <br>guest: là khách vãng lai, không cần đăng nhập, hệ thống tự đăng nhập theo default <br>customer: là tài khoản riêng của khách hàng tạo, chỉ customer mới có những ưu đãi special deals ở homepage. |

​	Sau khi đăng nhập/đăng kí:

- customer và guest: được chuyển hướng về lại homepage.

- manager và clerk: được chuyển hướng sang giao diện chức năng của họ.



2. **Khôi phục mật khẩu (quên mật khẩu)**

## 1.2. Chức năng của quản lý

1. **Xem dữ liệu thống kê:** 
   - tất cả các tài khoản
   - các khoản giao dịch, các đơn hàng trong 1 tuần/ tháng, lượng người mua, sản phẩm bán chạy
   - thống kê kho hàng, stock, sản phẩm
   - các phản hồi
2. **Sửa đổi dữ liệu:** 
   - các tài khoản: 
     - thay đổi loại tài khoản (đổi quyền): manager - clerk - customer
     - sửa, xóa thông tin trên tài khoản
     - khóa tài khoản
   - cập nhật menu, stock, special deal

## 1.3. Chức năng của nhân viên

- Xác nhận đơn hàng của khách
- Phản hồi không có hàng

## 1.4. Chức năng xem menu, đặt hàng

1. **Chức năng xem thực đơn (menu)**
   
   - Trình bày sản phẩm theo dạng lưới ô vuông: tên sản phẩm - hình minh họa - giá - nút thêm vào giỏ
     - Những sản phẩm hết hàng thì sẽ được đánh dấu OUT OF STOCK
     - Có popup xem chi tiết của sản phẩm trước khi thêm vào giỏ hàng
       - Tên  / Ảnh minh họa / Mô tả / Giá / Số lượng / Option thêm
       - Các đánh giá, reveiw
       - Nút thêm vào giỏ hàng
   - Lọc theo loại sản phẩm (category)
   - Xắp xếp theo: `giá tăng dần`  `giá giảm dần`  `a-z`
   - Thanh tìm kiếm
   
2. **Chức năng special deals ở homepage**

   Chức năng này chỉ dành cho loại tài khoản `customer`

   - Mỗi một special deal thực chất là một giỏ hàng (cart) sẵn:
      - Đã lựa sẵn 1 số sản phẩm có liên quan tới nhau, với số lượng nhất định (combo đồ ăn vặt, combo món cho tiệc sinh nhật,...).
      - Nếu khách tạo đơn hàng cho giỏ hàng sẵn đó, khách sẽ được ưu đãi giảm giá của nhà hàng.
   - Cách thức: 
      - Khách nhấp vào special deal ở homepage thì sẽ được chuyển hướng tới giỏ hàng đã chọn món sẵn > Khách tạo order và thanh toán như các order bình thường khác (khác ở chỗ nó được giảm giá)
      - Nếu khách thay đổi dữ liệu trong giỏ hàng theo ý mình (thay đổi số lượng sản phẩm), special deal sẽ không còn hiệu lực. Order đó được tính như order bình thường.

3. **Chức năng giỏ hàng (cart)   **
   Thêm/Xóa/Sửa số lượng sản phẩm trong giỏ hàng đã lựa từ menu.
   Xem Total price ở dưới cùng

4. **Tạo đơn hàng (order): **
   Chỉ có 2 lựa chọn -  đặt bàn sẵn **HOẶC** mang về

   - Nếu đặt bàn sẵn - ăn tại chỗ `dine in`, phải nhập:

      - Số bàn: 1-10

      - Số người dùng một bàn: 1-5

      - Thời gian có thể dùng bữa tại chỗ trong 1 ngày: 7am - 11pm (16 tiếng)

         - Hệ thống recommend khung giờ còn trống của nhà hàng

         - Thời lượng dùng bữa tối đa: 

            | Nếu khách           | Max Duration |
            | ------------------- | ------------ |
            | Đặt ít hơn 2 bàn    | 2 tiếng      |
            | Đặt 3 - 5 bàn       | 3 tiếng      |
            | Đặt nhiều hơn 6 bàn | 4 tiếng      |

   - Nếu Mang về `take away`, phải nhập:
     - Họ tên / SĐT / Địa chỉ 
     - Thời gian dự tính cần nhận sản phẩm (ngày - giờ): hệ thống recommend
     - Ghi chú thêm cho đơn hàng: tối đa 2000 kí tự

## 1.5. Chức năng thu thập phản hồi

Mỗi **một khách** chỉ được để lại **một đánh giá / phản hồi** trên **mỗi sản phẩm** của nhà hàng mà khách **đã mua:**

- Đánh giá: từ 1-5 sao
- Phản hồi: tối đa 1500 kí tự

## 1.6. Chức năng thanh toán

Chức năng này chỉ có sẵn khi trong giỏ hàng của khách có ít nhất 1 sản phẩm

1. **Liệt kê bảng thông tin mua hàng**
   - Tên hàng / Số lượng / Giá
   - Tổng
2. **Phương thức thanh toán**

- Thẻ thanh toán quốc tế
  - Visa/Mastercard
- Ví điện tử
  - Quét mã QR (MoMo)
- Tiền mặt (hệ thống tự ghi nhận nếu khách chọn `dine in`, nên không có trong giao diện thanh toán)

# 2. Yêu cầu phi chức năng

## 2.1. Nền tảng, phụ thuộc

1. Thiết bị sử dụng: hệ thống phải hiển thị và thao tác tốt trên máy tính bảng, điện thoại, laptop, máy tính để bàn



Đáp ứng ít nhất 300 đơn / ngày
