const sum=(...numbers)=>{
   let sum=0;
   for (let i=0;i<numbers.length;i++){
    sum+=numbers[i];
   }
   return sum;
}

//  rest parameter dùng khi không thẻ xác định trước số lượng đối số truyền vào trong hàm và sẽ gom các tham số thành 1 mảng