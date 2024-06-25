// Từ khóa var, let và const
var userName ="ABC"; // khai báo
userName="NBC"; // gán lại giá trị
// Khi file js được chạy nó sẽ quét hết tất cả các biến được khai báo và từ khóa được khai báo với var đưa lên dầu nhưng có giá trị 
// undefined

// var có thể khai báo lại
// có thể gán lại giá trị
// có cơ chế hoisting
// phạm vi global

// let
// có thể gán lại giá trị
// không thể khai báo lại

// const
// không thể gán lại giá trị và khai báo lại

// Temperal Dead Zone: var không có tdz; let và const có hoisting nhưng giá trị nằm trong tdz nên khi sử dụng biến trước khi khởi tạo
// sẽ báo lỗi

