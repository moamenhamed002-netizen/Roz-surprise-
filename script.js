// دالة فحص كلمة السر وبدء الموقع
function checkPassword() {
    const pass = document.getElementById("password").value;
    
    // كلمة السر المعتمدة للدخول
    if (pass.toLowerCase() === "247") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        
        // تشغيل الموسيقى المرفقة تلقائياً بعد فتح القفل
        document.getElementById("bg-music").play();
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// ضبط عداد الارتباط ليوم 18 فبراير 2026
const startDate = new Date(2026, 1, 18); 

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // لو كان التاريخ قد بدأ بالفعل يعرض الحساب التصاعدي، وإلا يصفر العداد
    if (diff > 0) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
    } else {
        document.getElementById("days").innerText = 0;
        document.getElementById("hours").innerText = 0;
        document.getElementById("minutes").innerText = 0;
    }
}

// تحديث الوقت تلقائياً كل دقيقة
setInterval(updateCounter, 60000);
updateCounter();
