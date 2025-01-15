// FooterComponent.js
export default {
  name: "FooterComponent",
  template: `
       <footer class="footer">
            <div class="footer-inner">
                <div class="footer-top">
                    <ul class="footer-link">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">고객서비스</a></li>
                    </ul>
                    <ul class="sns-list">
                        <li><a href="https://www.instagram.com/tamburinsofficial/" target="_blank" title="새창열림">INSTAGRAM</a></li>
                        <li><a href="https://www.facebook.com/tamburinsofficial/" target="_blank" title="새창열림">FACEBOOK</a></li>
                        <li><a href="https://pf.kakao.com/_RkqIj" target="_blank" title="새창열림">KAKAOTALK</a></li>
                        <li><a href="https://weibo.com/tamburinsofficial" target="_blank" title="새창열림">WEIBO</a></li>
                    </ul>
                </div>
                <div class="footer-btm">
                    <div class="footer-logo">
                        <img src="./img/main/logo.svg" alt="TAMBURINS">
                    </div>
                </div>
            </div>
        </footer>
  `,
};