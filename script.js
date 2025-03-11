// Tạo một đoạn mã JS đơn giản để thêm chức năng nếu cần trong tương lai
console.log("Trang web du lịch đang hoạt động!");
// scripts.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng gửi form để xử lý qua JavaScript
    
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Thực hiện xử lý (ví dụ: gửi dữ liệu tới server hoặc hiển thị thông báo)
    alert(`Cảm ơn bạn đã đánh giá! Điểm: ${rating} sao\nNhận xét: ${comment}`);
    
    // Reset form sau khi gửi
    document.querySelector('form').reset();
});
