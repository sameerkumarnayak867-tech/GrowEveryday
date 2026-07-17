console.log("GrowEveryday Loaded Successfully 🌱");

window.onload = function(){

    let savedJournal =
    localStorage.getItem("journal");

    if(savedJournal){

        document.getElementById("journalText").value =
        savedJournal;
        
    }
    document.getElementById("habit1").checked =
    localStorage.getItem("habit1") === "true";

    document.getElementById("habit2").checked =
    localStorage.getItem("habit2") === "true";

    document.getElementById("habit3").checked =
    localStorage.getItem("habit3") === "true";

    document.getElementById("habit4").checked =
    localStorage.getItem("habit4") === "true";

    

let savedTheme =
localStorage.getItem("theme");

if(savedTheme){

    document.body.className =
    savedTheme;

    let themeBtn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){
        themeBtn.innerText = "☀️ Light Mode";
    }
}
updateProgress();

let today = new Date();

document.getElementById("todayDate").innerText =
today.toDateString();

showTime();
};
function welcomeUser() {
    alert("Welcome to GrowEveryday 🌱");
}
let water = 0;
function drinkWater() {

    if (water < 8) {

        water++;
        
        document.getElementById("waterCount").innerText =
        water + " / 8 Glass";

        document.getElementById("progressFill").style.width =
        (water / 8) * 100 + "%";
    }
    if (water === 8) {
        alert("  🎉 Amazing Sameer! You completed today's water goal.");
    }
}
function toggleTheme(){
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.className
    );
    let themeBtn = document.getElementById("themeBtn")

    if(document.body.classList.contains("dark")){

        themeBtn.innerText = "☀️ Light Mode";

    }else{

        themeBtn.innerText = "🌙 Dark Mode";
    }

}

function saveJournal(){

    let text =
    document.getElementById("journalText").value;

    localStorage.setItem(
        "journal",
        text
    );

    alert("Journal Saved ✅");
}
let quotes = [
"तुम कल से बेहतर हो।",

"सफलता रोज़ की मेहनत से बनती है।",

"हार मत मानो।",

"हर दिन एक नई शुरुआत है।",

"छोटे कदम बड़ी मंज़िल तक ले जाते हैं।",

"हे पार्थ, आज अपने मन से नहीं, अपने धर्म से निर्णय लो।",

"हे पार्थ, कर्म करते रहो, फल अपने समय पर आएगा।",

"हे पार्थ, आज का छोटा प्रयास भी कल की बड़ी जीत बन सकता है।",

"हे पार्थ, गिरना हार नहीं, गिरकर वहीं पड़े रहना हार है।",

"हे पार्थ, अपने कल वाले स्वरूप से बेहतर बनो, किसी और से नहीं।",

"हे पार्थ, आलस तुम्हारा मित्र नहीं, तुम्हारे सपनों का चोर है।",

"हे पार्थ, जो काम कठिन लगता है, वही तुम्हें मजबूत बनाएगा।",

"हे पार्थ, मन बहाने बनाएगा, विवेक मार्ग दिखाएगा।",

"हे पार्थ, अनुशासन वह करता है जो मन नहीं करना चाहता।",

"हे पार्थ, तुम्हारा चरित्र तुम्हारी सबसे बड़ी संपत्ति है।",

"हे पार्थ, एक समय में केवल एक ही कर्म करो।",

"हे पार्थ, आज का कर्तव्य ही तुम्हारा सबसे बड़ा तप है।",

"हे पार्थ, अपने समय की रक्षा करो, यही जीवन की रक्षा है।",

"हे पार्थ, सफलता पहले आदतों में जन्म लेती है, फिर परिणामों में।",

"हे पार्थ, अपने भय का सामना करो, उससे भागो मत।",

"हे पार्थ, तुलना मत करो, अपना स्वधर्म पहचानो।",

"हे पार्थ, हर सुबह ईश्वर तुम्हें एक नया अवसर देते हैं।",

"हे पार्थ, अपने शरीर का सम्मान करो, यही तुम्हारे कर्म का साधन है।",

"हे पार्थ, मन को आदेश दो, उससे आदेश मत लो।",

"हे पार्थ, धैर्य रखो, महान वृक्ष भी एक दिन में नहीं बनते।",

"हे पार्थ, आज की सच्ची जीत अपने मन पर विजय है।",

"हे पार्थ, जो सीखता रहता है, वही आगे बढ़ता रहता है।",

"हे पार्थ, मोबाइल तुम्हारा साधन है, स्वामी नहीं।",

"हे पार्थ, अपने लक्ष्य को प्रतिदिन याद करो, तभी मन स्थिर रहेगा।",

"हे पार्थ, सच्चा ब्रह्मचर्य अपनी ऊर्जा को श्रेष्ठ कर्मों में लगाना है।",

"हे पार्थ, ईमानदारी से किया गया छोटा कर्म भी महान होता है।",

"हे पार्थ, कठिनाइयाँ तुम्हें रोकने नहीं, मजबूत बनाने आती हैं।",

"हे पार्थ, आज का अनुशासन ही कल की स्वतंत्रता है।",

"हे पार्थ, हर निर्णय से पहले पूछो—क्या यह मेरे धर्म के अनुकूल है?",

"हे पार्थ, तुम्हारी यात्रा अभी शुरू हुई है, साहस के साथ आगे बढ़ो।",

];

console.log(quotes);
let currentQuote = 0;

function nextQuote(){

    currentQuote++;

    if(currentQuote >= quotes.length){

        currentQuote = 0;
    }

    document.getElementById("quoteText").innerText =
    quotes[currentQuote];
}

let time = 1500;

let timerRunning = false;

let timer;

function startTimer(){

   

    if(timerRunning){
        return;
    }

    timerRunning = true;

    timer = setInterval(function(){

        if(timerRunning){

            time--;

            if(time <= 0){

                timerRunning = false;
            }

            let minutes =
            Math.floor(time / 60);

            let seconds =
            time % 60;

            document.getElementById("timer").innerText =
            minutes + ":" + String(seconds).padStart(2,"0");
        }
    },1000);
    }

    function saveHabits(){
        let h1=document.getElementById("habit1").checked;
        let h2=document.getElementById("habit2").checked;
        let h3=document.getElementById("habit3").checked;
        let h4=document.getElementById("habit4").checked;

        localStorage.setItem("habit1",h1);
        localStorage.setItem("habit2",h2);
        localStorage.setItem("habit3",h3);
        localStorage.setItem("habit4",h4);
        alert("Habits Saved ✅");

        updateProgress();
    }

function updateProgress(){

    let completed = 0;

    if(document.getElementById("habit1").checked){

        completed++;
    }

    if(document.getElementById("habit2").checked){

        completed++;
    }
    if(document.getElementById("habit3").checked){

        completed++;
    }
    if(document.getElementById("habit4").checked){

        completed++;
    }
        let percent = (completed / 4) * 100;

document.getElementById("habitProgress").style.width =
percent + "%";

document.getElementById("progressText").innerText =
percent + "%";
   
    
}

 function pauseTimer(){
        timerRunning = false;
        clearInterval(timer);
    }

    function resetTimer(){
        clearInterval(timer);
        timerRunning = false;
        time = 1500;
        document.getElementById("timer").innerText = "25:00";
    }
function showTime() {

    let now = new Date();

    document.getElementById("liveClock").innerText =
    now.toLocaleTimeString();
}
setInterval(showTime, 1000);

function addTask(){

    let input =
    document.getElementById("taskInput");

    let task =
    input.value;

    if(task === ""){

        alert("Please Enter a Task");

        return;
    }

    let li =
    document.createElement("li");

    li.innerText = task;

    document.getElementById("taskList").appendChild(li);

    input.value = "";

}
