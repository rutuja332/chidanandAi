document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const goToSignup = document.getElementById('goToSignup');
    const goToLogin = document.getElementById('goToLogin');
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    const chatSection = document.getElementById('chatSection');
    const openChat = document.getElementById('openChat');
    const logout = document.getElementById('logout');

    goToSignup.addEventListener('click', function() {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    goToLogin.addEventListener('click', function() {
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        loginSection.style.display = 'none';
        chatSection.style.display = 'block';
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    openChat.addEventListener('click', function() {
        window.open('https://mediafiles.botpress.cloud/d2fbba76-8a2b-451c-ad0f-e1b8564eb0f0/webchat/bot.html', '_blank');
    });

    logout.addEventListener('click', function() {
        chatSection.style.display = 'none';
        loginSection.style.display = 'block';
    });
});
