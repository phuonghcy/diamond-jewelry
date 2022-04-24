import React from 'react'
import ContactForm from '../containers/ContactForm'
import './ContactPage.css'

export default function ContactPage() {
    return (
        <>
            <div className='contact'>
                <h2>CÁC CÂU HỎI THƯỜNG GẶP VÀ LIÊN HỆ</h2>
                <div className='hr' style={{height: "25px"}}></div>

                <h4>1. CÁC CÂU HỎI THƯỜNG GẶP</h4>
                <div className='question'>
                    <div className='item'>
                        <button >Trang trợ giúp </button>
                        <p>Để biết thông tin và được hỗ trợ với các câu hỏi về Fantasy League, vui lòng truy cập ....</p>
                    </div>
                </div>
                    <div className='item'>
                        <button >Thắc mắc chung</button>
                        <p>Vui lòng liên hệ .... nếu có bất kỳ thắc mắc nào liên quan đến sản phẩm và chất lượng đến từ công ty cổ phần trang sức DIAMOND JEWELRY. </p>
                    </div>
                
                    <div className='item'>
                        <button>Tôi không thể đăng nhập. Tôi cần làm gì?</button>
                        <p>Hãy đảm bảo rằng bạn đang sử dụng địa chỉ e-mail đã đăng ký và mật khẩu chính xác. Lưu ý rằng mật khẩu có phân biệt chữ hoa và chữ thường.</p>
                        <p>Mật khẩu tạm thời sẽ được gửi đến hộp thư của bạn. Vui lòng cập nhật mật khẩu của bạn sau khi đăng nhập.</p>
                        <p>Nếu bạn không nhận được lời nhắc mật khẩu, vui lòng kiểm tra thư mục Rác trong hộp thư đến của bạn và thêm noreply@mailout.users.diamondcity.com vào sổ địa chỉ của bạn.</p>
                    </div>

                    <div className='item'>
                        <button>Làm cách nào để cập nhật chi tiết tài khoản của tôi?</button>
                        <p>Bạn có thể cập nhật tài khoản của mình bất kỳ lúc nào sau khi bạn đã đăng nhập.</p>
                        <p>Chỉ cần truy cập tài khoản của bạn qua tiêu đề trang web hoặc menu khi sử dụng thiết bị di động. Từ đây, bạn có thể cập nhật thông tin cá nhân của mình, bao gồm địa chỉ email và mật khẩu, cũng như bất kỳ tùy chọn nào mà bạn đã chọn trước đó.</p>
                    </div>
                <div className='hr'></div>

                <h4>2. FORM LIÊN HỆ </h4>
                <ContactForm />
            </div>
           
        </>
  )
}
