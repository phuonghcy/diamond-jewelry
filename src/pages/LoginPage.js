import { Link, useNavigate } from 'react-router-dom';
import localStorage from 'localStorage';
import OAuth2Login from 'react-simple-oauth2-login';
import styles from './LoginPage.module.css';

export default function Login() {
    const navigate = useNavigate();

    function onSuccess(response) {
        localStorage.setItem("access_token", response.access_token);
        navigate("/");
    }

    function onFailure(response) {
        console.log(response);
    }

    return (
        
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form>
                    <h1>Đăng nhập</h1>
                    <input type='text' placeholder='Số điện thoại hoặc email' />
                    <input type='password' placeholder='****************' />
                    <Link className={styles.forgot_password} to="/quen-mat-khau">Quên mật khẩu?</Link>
                    <br></br>
                    <button className={styles.login_button} type="submit">Đăng nhập</button>
                    <p>
                        Chưa có tài khoản?
                        <Link to="/dang-ki"> Đăng kí ngay</Link>
                    </p>
                    <div className={styles.third_party_wrapper}>
                        <OAuth2Login
                            className={styles.button}
                            authorizationUrl="https://accounts.google.com/o/oauth2/auth"
                            responseType="token"
                            clientId="633817129267-8ve3g3uk7mhsrdd0elci28as9g7389sr.apps.googleusercontent.com"
                            redirectUri="http://localhost:3000/auth/google/diamonjewelry"
                            scope="profile"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                        >
                            <img src={require("../assets/images/google.png")} alt="google-icon" />
                        </OAuth2Login>
                        <OAuth2Login
                            className={styles.button}
                            authorizationUrl="https://www.facebook.com/dialog/oauth"
                            responseType="token"
                            clientId="5374491585936093"
                            redirectUri="http://localhost:3000/auth/facebook/diamonjewelry"
                            scope="public_profile"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                        >
                            <img src={require("../assets/images/facebook.png")} alt="facebook-icon" />
                        </OAuth2Login>
                    </div>
                </form>
            </div>
        </div>
    );
}