// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 현재 연도 업데이트
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // CTA 버튼 클릭 이벤트
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        alert('서비스 상세 정보는 준비 중입니다!');
    });

    // 특징 카드에 애니메이션 효과
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });

    // 네비게이션 스무스 스크롤
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
