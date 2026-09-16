
## 🗓️ Tháng 9/2026

### ✅ Lesson #2: Git & JavaScript basic

**Ngày học**: 15/9/2026  
**Tình huống**: Tìm hiểu về git và JS basic
**Kiến thức về git**:
**1. Khởi tạo git:**
- Dùng lệnh git init: Khởi tạo git trong thư mục hiện tại
- Git add <tên_file> : Thêm file từ vùng Working directory vào vùng Staging 
    - Note: Muốn thêm nhiều file thì cách nhau bởi dấu cách. Ví dụ: git add <tên_file1> <tên_file2>
- Git add . : Thêm tất cả file có thay đổi trong thư mục hiện tại và thư mục con vào vùng Staging
- git commit -m "message" : Thêm file từ vùng Staging vào vùng Repository.
**2. Ba vùng trong git**
    1. Vùng working directory:
    - Gồm những file 
    2. Vùng Staging
    3. Vùng Repository
**3. Kiểm tra trạng thái của repo hiện tại:**
- **Cú pháp**: ``` Git status ```
- **Note**:
    - Nếu repo chưa khởi tạo --> báo lỗi 
    - Cách hiển thị:
        + Ở working directory: file sẽ hiển thị màu đỏ
        + Ở vùng Staging: file sẽ hiển thị màu xanh lá cây
        + Ở vùng Repository: Không còn file đã commit
**4. Kiểm tra danh sách commits:**
- **Cú pháp**: ``` git log ```
- **Note**: 
    - Hiện những commit đã commit lên
    - Commit sau sẽ nằm phía trên
**5. Git - Cấu hình:**
- **Cú pháp**: 
    ```
    - Git config --global user.name "Tên bạn"
    - Git config --global user.email "Email"
    ```
- **Note**:
    - Nói cho git biết bạn là ai và tên gì 
    - Set riêng cho 1 repo thì sử dụng CP: 
        ```
        + git config user.name "Tên bạn"
        + git config user.email "Email"
        ```
    - Thường sẽ dùng config mặc định, nếu yêu cầu cho từng repo thì dùng riêng
**6. Liệt kê những cấu hình:**
- **Cú pháp**: ``` git config --list ```
- **Note**: 
    - Hiện những cấu hình đang có 
**7. Git convention:**
- **Cú pháp**: <type>: <short_description>
- **Note**: 
    - Là bộ quy tắc
    - Gồm 3 loại commit:
        + fix: sửa lỗi 1 test trước đó
        + feat: thêm tính nnawg mới, test mới
        + chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới 
    - Vd: Thêm tính năng mới: git commit -m"feat: add code for TC2"
---
**JavaScript**
**1. Cú pháp:**
- In ra màn hình: Console.log ("Text");
- Lệnh chạy file: node <tên_file>
**2. Comment trong JS:**
- Comment 1 dòng: dùng // đầu dòng
- Comment nhiều dòng: dùng /* ...*/
- Phím tắt: Ctrl + /
**3. Biến và Hằng**
**Note:**
- Chỉ dùng let khi cần gán lại giá trị
3.1. Biến: Có thể thay đổi được
- Cú pháp: 
    ``` let <tên_biến> = <Giá_trị>; ```
    console.log(tên_biến);
3.2. Hằng: Không thể thay đổi 
- Cú pháp: 
    ``` 
    const <tên_biến> = <Giá_trị>; 
    console.log(tên_biến);
    ```
**4. Kiểu dữ liệu:**
- Kiểu nguyên thủy: gồm kiểu Number, String, Boolean, Undefined, Null, Symbol, BigInt
- Kiểu tham chiếu: Object
    4.1. Kiểu số: Số nguyên và số thực
    - Infinity --> Số bất kỳ /0
    - NaN --> phép tính giữa số và không phải số
    4.2. Kiểu String:
    - Dùng backtick. Ví dụ: const a = `Xin chào`;
    4.3. Kiểu Boolean: giá trị T/F
- Check loại biến: console.log(typeof <tên_biến>);
**5. Toán tử so sánh**
- So sánh giá trị của 2 đại lượng và trả về kết quả kiểu boolean (T/F)
**6. Toán tử toán học**: + - * /
**7. Toán tử logic**
- && (AND) : cả 2 điều kiện đều đúng --> Đúng
- || (OR) : 1 trong 2 điều kiện đúng 
**8. Toán tử một ngôi**
- Là toán tử chỉ cần 1 toán hạng để thực hiện.
VD: 
    ```
    let x=10;
    console.log(++x); //11
    console.log(x);  //11
    ```
- Có 2 loại:
    - Prefix: toán tử nằm phía trước - tăng trước trả về sau.
        ++x;
        --x;
    - Postfix: toán tử nằm ở phía sau, trả về trước tăng sau.
        x++
        x--
    VD: 
    ``` 
    let x = 100;
    console.log(x++); //100
    console.log(x);  // 101
    ```
---

**Markdown**
- Tiêu đề:  # (thể hiện cấp độ)
VD: ## (Cấp 2)
- Định dạng văn bản:
 **chữ đậm** hoặc __chữ đậm__
 *chữ nghiêng* hoặc _chữ nghiêng_
 `Code inline`
 ~~chữ gạch ngang~~
 - Danh sách không thứ tự:
 + Dùng - hoặc dùng * hoặc +
 - Danh sách có thứ tự:
    Thêm số ở phía trước
- Link và Images:
    - Link: [Text] (Điền link) --> hiển thị dạng hyperlink
    - Images: ![Text] (Link ảnh) hoặc ![Text] (đường dẫn đến ảnh tương đối hoặc tuyệt đối)
- Code Block: Dùng backtick: ``` code ```
- Block Quotes:
    - Dùng >, muốn lùi vào trong thì dùng >>
- Đường kẻ ngang: --- hoặc *** hoặc ---
- Bảng:
| TC ID | Description | Status | 
|-------|-------------|--------|
| TC1| Login test | Pass |


