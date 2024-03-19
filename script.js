document.getElementById("friendIcon").addEventListener("click", function() {
  // Your code here
  document.getElementById("homeGray").style.display  = "block";
  document.getElementById("homeBlue").style.display  = "none"
  document.getElementById("friendsBlue").style.display  = "block"
  document.getElementById("friendsGray").style.display  = "none"
  document.getElementById("nBlue").style.display  = "none"
  document.getElementById("nGray").style.display  = "block"
  document.getElementById("videoBlue").style.display  = "none"
  document.getElementById("videoGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "52%"
  document.getElementById("friendPage").style.top = "3rem"
  document.querySelector(".main-video-container").style.display ="flex"
  document.querySelector(".main-feed-container").style.display ="none"
});

document.getElementById("homeIcon").addEventListener("click", function() {
  // Your code here
  document.getElementById("homeBlue").style.display  = "block"
  document.getElementById("homeGray").style.display  = "none"
  document.getElementById("friendsGray").style.display  = "block"
  document.getElementById("friendsBlue").style.display  = "none"
  document.getElementById("nBlue").style.display  = "none"
  document.getElementById("nGray").style.display  = "block"
  document.getElementById("videoBlue").style.display  = "none"
  document.getElementById("videoGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "4%"
  document.getElementById("friendPage").style.left = "100%"
  document.getElementById("friendPage").style.top = "6rem"
  document.getElementById("profile-page").style.display = "none"
  document.getElementById('underline').style.display ='block'
 document.querySelector(".main-video-container").style.display ="none"
 document.querySelector(".main-feed-container").style.display ="flex"
});



document.getElementById("notificationIcon").addEventListener("click", function() {
  // Your code here
  document.getElementById("nBlue").style.display  = "block"
  document.getElementById("nGray").style.display  = "none"
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  document.getElementById("friendsGray").style.display  = "block"
  document.getElementById("friendsBlue").style.display  = "none"
  document.getElementById("videoBlue").style.display  = "none"
  document.getElementById("videoGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "75%"

});



document.getElementById("videoIcon").addEventListener("click", function() {
  // Your code here
  
  document.getElementById("videoBlue").style.display  = "block"
  document.getElementById("videoGray").style.display  = "none"
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  document.getElementById("nBlue").style.display  = "none"
  document.getElementById("nGray").style.display  = "block"
  document.getElementById("friendsBlue").style.display  = "none"
  document.getElementById("friendsGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "28%"
  
});




document.getElementById("cTwo").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "linear-gradient(#FF0D90, #FF910E)";
    document.getElementById("cTwo").style.border = "3px solid #000"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("storyTextContent").style.color = "#fff"
});

document.getElementById("cOne").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "#FFF9C4";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "3px solid #000"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("storyTextContent").style.color = "#000"
});

document.getElementById("cThree").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "linear-gradient(#013BFF,#FF0194)";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cThree").style.border = "3px solid #000"
    document.getElementById("storyTextContent").style.color = "#fff"
});

document.getElementById("cFour").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "#FF2B7F";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cFour").style.border = "3px solid #000"
    document.getElementById("storyTextContent").style.color = "#fff"
});

document.getElementById("cFive").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "linear-gradient(#07CC81,#0BAAEA)";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("cFive").style.border = "3px solid #000"
    document.getElementById("storyTextContent").style.color = "#fff"
});



// typing and shar now button color change

const textarea = document.getElementById('storyTextContent');
const shareBtn = document.getElementById('shareBtn');

textarea.addEventListener('input', function() {
    if (textarea.value.split(' ').length >= 6) {
        shareBtn.style.display = 'block';
    } else {
        shareBtn.style.display = 'none';
    }
});

textarea.addEventListener('blur', function() {
    if (textarea.value.length === 0) {
        shareBtn.style.display = 'none';
    }
});
    
    
// create story page open 
document.getElementById("CreateStory").addEventListener("click", function() {
    document.querySelector('.create-story-page-opachity').style.display = 'flex'
});
// create story page close 
document.getElementById("storyPageClose").addEventListener("click", function() {
    
    document.querySelector('.create-story-page-opachity').style.display = 'none'
    document.getElementById("storyTextContent").value = "";
});







// share button click and display story
document.getElementById("shareBtn").addEventListener("click", function() {
    var storyDiv = document.createElement("div");
    storyDiv.className = "user-story";

    // Random background color
    var colors = ["#1876f2", "#F4426A", "#EA002E", "#880E4F"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    storyDiv.style.backgroundColor = randomColor;

    var profileDiv = document.createElement("div");
    profileDiv.className = "story-profile";

    var profileImg = document.createElement("img");
    profileImg.src = "profile.jpg";

    profileDiv.appendChild(profileImg);
    storyDiv.appendChild(profileDiv);

    var storyText = document.getElementById("storyTextContent").value;
    var storyTextContainer = document.createElement("div");
    storyTextContainer.className = "story-text-content";

    // Check if text has more than 6 words
    var words = storyText.split(" ");
    var textElement = document.createElement("h4");
    if (words.length > 5) {
        var truncatedText = words.slice(0, 5).join(" ") + " ..."; // Truncate text
        textElement.innerHTML = truncatedText.replace(/\s+/g, "<br>");
    } else {
        textElement.innerHTML = storyText;
    }

    // Random text color: black or white
    var randomTextColor = Math.random() > 0.5 ? "#FFF" : "#FFF";
    textElement.style.color = randomTextColor;

    storyTextContainer.appendChild(textElement);

    storyDiv.appendChild(storyTextContainer);

    setTimeout(function() {
        document.querySelector('.create-story-page-opachity').style.display ='none'
        document.getElementById("storyTextContent").value = "";
        document.getElementById('shareBtn').style.display = "none";

        // Progress bar height adjustment function
        function updateProgress(progress) {
            document.getElementById("progress").style.width = progress + "%";
            if (progress === 100) {
                // Create user-story container after progress completion
                document.querySelector(".story-scroll-container").appendChild(storyDiv);
                document.querySelector(".upload-story-container").style.display = "none";
            } else {
                document.querySelector(".upload-story-container").style.display = "block";
                
            }
        }

        // Update progress example (from 0% to 100%)
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => {
                updateProgress(i);
            }, i * 50); // Update every 50 milliseconds
        }
    }, 1000);
});




// socialbook like button making 

// ক্লাস "activity-btn-like" ধরে আইটেমগুলির নির্দেশক
var items = document.getElementsByClassName("activity-btn-like");

// প্রতিটি আইটেমের জন্য ইভেন্ট লিস্টনার যুক্ত করুন
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        toggleLike(this); // ক্লিক করা আইটেম পাঠানো
    });
}

// টগল ফাংশন ডিফাইন করুন
function toggleLike(item) {
    var likeBlue = item.querySelector("#likeBlue");
    var likeGray = item.querySelector("#likeGray");
    var likeCounts = item.querySelectorAll(".like-count");

    if (likeBlue.style.display === "none" || likeBlue.style.display === "") {
        likeBlue.style.display = "block";
        likeGray.style.display = "none";
        likeBlue.style.color = "red";
        likeCounts.forEach(function(likeCount) {
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    } else {
        likeBlue.style.display = "none";
        likeGray.style.display = "block";
        likeBlue.style.color = "#808080";
        likeCounts.forEach(function(likeCount) {
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        });
    }
}

// প্রোফাইল পেজ থেকে ক্রিয়েট স্টোরি পেজ ওপেন

document.getElementById("profilePageCreateStory").addEventListener("click", function() {
    setTimeout(function(){
        document.getElementById("createStorypage").style.top = "0";
    }, 100);
});

document.getElementById("profilePageOpen").addEventListener("click", function(){
  
  document.getElementById("profile-page").style.display = "block"
  
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  
  document.getElementById('underline').style.display ='none'
});


document.getElementById("coverCameraClick").addEventListener('click', function(){
  
  document.querySelector(".cover-upload-bottom-bar-container").style.top = "0"
  document.querySelector(".cover-upload-bottom-bar").style.bottom = "0"
  
})









// ড্রপডাউন মেনু এক্সপোজ করার ফাংশন
function toggleDropdownMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  var computedStyle = window.getComputedStyle(dropdownMenu);
  
  document.getElementById("searchContainer").style.display = 'none'
  if (computedStyle.display === "none" || computedStyle.display === "") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
    document.querySelector(".display-accessibility").style.display = "none"
    document.querySelector(".menu-home").style.display = "block"
  }
}

// post create image select 

document.getElementById('fileInput').addEventListener('change', function() {
        var file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('selectedImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    

// post create page open and close


var inputContainer = document.querySelector('.input-container');
var opacityBlack = document.querySelector('.opacity-black');

inputContainer.addEventListener('click', function(){
  opacityBlack.style.display = 'flex'
  document.querySelector(".feed-post-create-container").style.display = "block"
});


var crossBtn = document.querySelector('.close-btn');

crossBtn.addEventListener('click', function(){
  opacityBlack.style.display = 'none';
  document.querySelector(".feed-post-create-container").style.display = "none"
});

document.querySelector(".close-btn-blog-post").addEventListener('click', function(){
  opacityBlack.style.display = 'none';
  document.querySelector(".blog-post-create-container").style.display = "none"
})

//blogPost container open
document.getElementById("blogPost").addEventListener("click",function(){
  opacityBlack.style.display = 'flex';
  document.querySelector(".blog-post-create-container").style.display = "block"
});


  // নির্দিষ্ট সময় নির্ধারণ করুন যা থেকে কাউন্টডাউন শুরু হবে
function updatePostTimes() {
    let postTimes = document.querySelectorAll('.post-time .time-text');
    postTimes.forEach(function(postTime) {
        let counter = 0; // Remove localStorage.getItem('postTimeCounter') || 0;
        setInterval(function() {
            counter++;
            let timeString;
            if (counter >= 1440) {
                timeString = Math.floor(counter / 1440) + "d";
            } else if (counter >= 60) {
                timeString = Math.floor(counter / 60) + "h";
            } else {
                timeString = counter + "m";
            }
            postTime.innerHTML = timeString;
            // Remove localStorage.setItem('postTimeCounter', counter);
        }, 60000); // 1 minute in milliseconds
    });
}

window.onload = function() {
    updatePostTimes();
    // সময়টি লোড করা
    let counter = 0; // Remove localStorage.getItem('postTimeCounter');
    if (counter) {
        let postTimes = document.querySelectorAll('.post-time .time-text');
        postTimes.forEach(function(postTime) {
            let timeString;
            if (counter >= 1440) {
                timeString = Math.floor(counter / 1440) + "d";
            } else if (counter >= 60) {
                timeString = Math.floor(counter / 60) + "h";
            } else {
                timeString = counter + "m";
            }
            postTime.innerHTML = timeString;
        });
    }
}
 
 
 function toggleSearchBox() {
   var searchContainer = document.getElementById('searchContainer');
   dropdownMenu.style.display = "none";
   if (searchContainer.style.display === 'block') {
       searchContainer.style.display = 'none';
   } else {
       searchContainer.style.display = 'block';
       document.querySelector(".display-accessibility").style.display = "none"
    document.querySelector(".menu-home").style.display = "block"
   }
   document.querySelector('.searchBoxFocus').focus();
}


// radio button click ckecked and dark mode 

document.addEventListener("DOMContentLoaded", function() {
    var selectBtns = document.querySelectorAll('.select-btn-box');
    var selectedOption = localStorage.getItem("selectedOption");

    // Function to apply the appropriate logo based on theme
    function applyLogo(theme) {
        var logo = document.querySelector('.nav-logo-media-query img');
        if (theme === "dark") {
            logo.src = "logo-white.png";
        } else {
            logo.src = "logo-blue.png";
        }
    }

    // Check if there's a selected option in local storage
    if (selectedOption) {
        // Check the corresponding radio button
        document.getElementById(selectedOption).checked = true;
        
        // Apply dark theme if the selected option is "option2"
        if (selectedOption === "option2") {
            document.body.classList.add("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
            applyLogo("dark");
        } else {
            applyLogo("light");
        }
    }

    selectBtns.forEach(function(selectBtn) {
        selectBtn.addEventListener('click', function() {
            var radioBtn = this.querySelector('input[type="radio"]');
            radioBtn.checked = true;

            // Save selected option to local storage
            localStorage.setItem("selectedOption", radioBtn.id);

            // Check if the clicked button is the "On" button
            if (radioBtn.id === "option2") {
                document.body.classList.add("dark-theme");
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
                applyLogo("dark");
            } else {
                document.body.classList.remove("dark-theme");
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
                applyLogo("light");
            }

            // Check if the clicked button is the "Use system settings" button
            if (radioBtn.id === "option3") {
                // Check if system dark mode is enabled
                checkSystemDarkMode();
            }
        });
    });

    // Listen for changes in system dark mode setting
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // If system dark mode is turned on, apply dark theme to the website
        if (e.matches) {
            // Apply dark theme
            document.body.classList.add("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
            applyLogo("dark");
        } else {
            // Apply light theme
            document.body.classList.remove("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
            applyLogo("light");
        }
    });

    // Function to check system dark mode and apply theme accordingly
    function checkSystemDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Apply dark theme
            document.body.classList.add("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
            applyLogo("dark");
        } else {
            // Apply light theme
            document.body.classList.remove("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
            applyLogo("light");
        }
    }

    // Check system dark mode on page load if "Use system settings" is selected
    if (selectedOption === "option3") {
        checkSystemDarkMode();
    }
});
 
 
 // display and accessblity click 
 
 document.getElementById("theameClick").addEventListener('click', function(){
   
   document.querySelector(".display-accessibility").style.display = "block"
   document.querySelector(".menu-home").style.display = "none"
 });
 
 document.querySelector(".theme-title i").addEventListener('click', function(){
   
   document.querySelector(".display-accessibility").style.display = "none"
   document.querySelector(".menu-home").style.display = "block"
 });
 
 
 
 
 document.getElementById("homeNav").addEventListener('click', function(){
   document.getElementById("frindBlue").style.display = "none"
   document.getElementById("frindGray").style.display = "block"
   document.getElementById("home_Gray").style.display = "none"
   document.getElementById("home_Blue").style.display = "block"
   document.getElementById("msngerBlue").style.display = "none"
   document.getElementById("msngerGray").style.display = "block"
   document.getElementById("notifyBlue").style.display = "none"
   document.getElementById("notifyGray").style.display = "block"
   document.getElementById("vdoBlue").style.display = "none"
   document.getElementById("vdoGray").style.display = "block"
   document.querySelector(".natification-page").style.display = "none"
 });
 
 document.getElementById("friendNav").addEventListener('click', function(){
   
   document.getElementById("frindBlue").style.display = "block"
   document.getElementById("frindGray").style.display = "none"
   document.getElementById("home_Gray").style.display = "block"
   document.getElementById("home_Blue").style.display = "none"
   document.getElementById("msngerBlue").style.display = "none"
   document.getElementById("msngerGray").style.display = "block"
   document.getElementById("notifyBlue").style.display = "none"
   document.getElementById("notifyGray").style.display = "block"
   document.getElementById("vdoBlue").style.display = "none"
   document.getElementById("vdoGray").style.display = "block"
   document.querySelector(".natification-page").style.display = "none"
 });
 
 document.getElementById("msngerNav").addEventListener('click', function(){
   
   document.getElementById("msngerBlue").style.display = "block"
   document.getElementById("msngerGray").style.display = "none"
   document.getElementById("frindGray").style.display = "block"
   document.getElementById("frindBlue").style.display = "none"
   document.getElementById("home_Gray").style.display = "block"
   document.getElementById("home_Blue").style.display = "none"
   document.getElementById("notifyBlue").style.display = "none"
   document.getElementById("notifyGray").style.display = "block"
   document.getElementById("vdoBlue").style.display = "none"
   document.getElementById("vdoGray").style.display = "block"
   document.querySelector(".natification-page").style.display = "none"
 });
 
 document.getElementById("notifyNav").addEventListener('click', function(){
   
   document.getElementById("msngerBlue").style.display = "none"
   document.getElementById("msngerGray").style.display = "block"
   document.getElementById("frindGray").style.display = "block"
   document.getElementById("frindBlue").style.display = "none"
   document.getElementById("home_Gray").style.display = "block"
   document.getElementById("home_Blue").style.display = "none"
   document.getElementById("notifyBlue").style.display = "block"
   document.getElementById("notifyGray").style.display = "none"
   document.getElementById("vdoBlue").style.display = "none"
   document.getElementById("vdoGray").style.display = "block"
   document.querySelector(".natification-page").style.display = "block"
   document.querySelector(".natification-page").style.display = "block"
   document.querySelector("#newNotify").style.display = "none"
 });
 
 document.getElementById("vdoNav").addEventListener('click', function(){
   
   document.getElementById("msngerBlue").style.display = "none"
   document.getElementById("msngerGray").style.display = "block"
   document.getElementById("frindGray").style.display = "block"
   document.getElementById("frindBlue").style.display = "none"
   document.getElementById("home_Gray").style.display = "block"
   document.getElementById("home_Blue").style.display = "none"
   document.getElementById("notifyBlue").style.display = "none"
   document.getElementById("notifyGray").style.display = "block"
   document.getElementById("vdoBlue").style.display = "block"
   document.getElementById("vdoGray").style.display = "none"
   document.querySelector(".natification-page").style.display = "none"
 });
 
 
// লোডিং স্টেটমেন্ট ও ফিড কন্টেন্ট এর ক্লাস নেইম গুলি
var loadingFeedClass = '.loading-feed-container';
var allFeedClass = '.all-feed-container';

// ২ সেকেন্ড পরে ফিড কন্টেন্ট দেখান
setTimeout(function() {
    document.querySelector(loadingFeedClass).style.display = 'none'; // লোডিং স্টেটমেন্ট অনুপস্থিত করুন
    document.querySelector(allFeedClass).style.display = 'block'; // ফীড কন্টেন্ট দেখান
}, 2000); // ২ সেকেন্ডের পরে






var loadingUserStoryContainer = '.loading-story-container';
var allUserStoryContainer = '.all-user-story-container';

// ২ সেকেন্ড পরে ফিড কন্টেন্ট দেখান
setTimeout(function() {
    document.querySelector(loadingUserStoryContainer).style.display = 'none'; // লোডিং স্টেটমেন্ট অনুপস্থিত করুন
    document.querySelector(allUserStoryContainer).style.display = 'flex'; // ফীড কন্টেন্ট দেখান
}, 2000); // ২ সেকেন্ডের পরে



document.addEventListener("DOMContentLoaded", function() {
    var loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
        var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Dhaka' };
        var loginDate = new Date(parseInt(loginTime));
        var loginTimeString = loginDate.toLocaleString('en-US', options);
        document.getElementById('loging-time').innerText = loginTimeString;
    }
});
        
        
        
        
// লগইন সফলভাবে হোম পেজে পুনর্নির্দেশিত করার পরে

// হোম পেজের লোড হওয়ার পরে ক্লাস পরিবর্তন করুন
document.addEventListener("DOMContentLoaded", function() {
    // অ্যাপ নোটিফিকেশন কন্টেনার এলিমেন্ট নির্দিষ্ট করুন
    var appNotificationContainer = document.querySelector('.app-notification-container');
    
    // যদি অ্যাপ নোটিফিকেশন কন্টেনার এলিমেন্ট খুঁজে পাওয়া যায়
    if (appNotificationContainer) {
        // ক্লাস পরিবর্তন করুন
        appNotificationContainer.style.display = 'flex';
    }
});


