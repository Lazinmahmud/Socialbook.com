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
    if (textarea.value.split(' ').length >= 1) {
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
    document.querySelector('nav').style.display = 'none'
});
// create story page close 
document.getElementById("storyPageClose").addEventListener("click", function() {
    
    document.querySelector('.create-story-page-opachity').style.display = 'none'
    document.getElementById("storyTextContent").value = "";
    document.querySelector('nav').style.display = 'block'
});





 

// share button click and display story
document.getElementById("shareBtn").addEventListener("click", function() {
    var storyDiv = document.createElement("div");
    storyDiv.className = "user-story";

    // Random background color
    var gradients = [
        "linear-gradient(#FF0D90, #FF910E)",
        "linear-gradient(#013BFF, #FF0194)",
        "linear-gradient(#07CC81, #0BAAEA)"
    ];
    var randomIndex = Math.floor(Math.random() * gradients.length);
    var randomGradient = gradients[randomIndex];
    storyDiv.style.background = randomGradient;

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
    var randomTextColor = Math.random() > 0.5 ? "#FFF" : "#fff";
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
                // Insert new story div at the beginning of all-user-story-container
                var allUserStoryContainer = document.querySelector('.all-user-story-container');
                allUserStoryContainer.insertBefore(storyDiv, allUserStoryContainer.firstChild);
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
            document.querySelector('nav').style.display = 'block'
        }
    }, 0500);
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



document.getElementById("profilePageOpen").addEventListener("click", function(){
  
  document.getElementById("profile-page").style.display = "block"
  
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  
  document.getElementById('underline').style.display ='none'
});




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

    

// post create page open and close


var inputContainer = document.querySelector('.input-container');
var opacityBlack = document.querySelector('.opacity-black');

inputContainer.addEventListener('click', function(){
  opacityBlack.style.display = 'flex'
  document.querySelector(".feed-post-create-container").style.display = "block"
  document.getElementById('postInpFocus').focus();
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
  document.getElementById('user-input').focus();
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
   document.querySelector("nav").style.marginTop = "0rem"
   document.querySelector(".nav-media-underline").style.marginLeft = "0%"
   document.querySelector('.main-video-container').style.display = 'none'
   
 var loaderBox = document.querySelector('.loader-box');
   loaderBox.style.top = '8rem';
  

  // Set a timeout to hide the loader box and refresh the page after 2 seconds
  setTimeout(function() {
    loaderBox.style.display = 'none';
    location.reload();
  }, 1500);
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
   document.querySelector("nav").style.marginTop = "-3rem"
   document.querySelector(".nav-media-underline").style.marginLeft = "20%"
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
   document.querySelector("nav").style.marginTop = "-3rem"
   document.querySelector(".nav-media-underline").style.marginLeft = "41%"
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
   document.querySelector("nav").style.marginTop = "-3rem"
   document.querySelector(".nav-media-underline").style.marginLeft = "62%"
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
   document.querySelector("nav").style.marginTop = "-3rem"
   document.querySelector(".nav-media-underline").style.marginLeft = "81%"
   document.querySelector('.main-video-container').style.display = 'flex'
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
        var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Dhaka' };
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


// comment system making
// পেজ লোড হলে কমেন্ট সংখ্যা আপডেট করা
window.addEventListener('load', function() {
    // প্রথমে কমেন্টের সংখ্যা 0 হবে
    document.querySelector('.comment-and-share p:first-child').textContent = "0 Comments";
});

// বাটন নিয়ে ক্লিক ইভেন্ট হ্যান্ডলার
// বাটন নিয়ে ক্লিক ইভেন্ট হ্যান্ডলার
document.querySelector('.comment-send-btn').addEventListener('click', function() {
    // ইনপুট এলিমেন্ট থেকে ইউজারের কমেন্ট টেক্সট নিতে
    var userComment = document.querySelector('.comment-input input').value;
    
    // নতুন কমেন্ট কন্টেন্ট এলিমেন্ট তৈরি করে ইউজারের কমেন্ট এড করা
    var newCommentContent = document.createElement('div');
    newCommentContent.classList.add('comment-content');
    var paragraph = document.createElement('p');
    paragraph.textContent = userComment;
    newCommentContent.appendChild(paragraph);
    
    // নতুন ইউজার কমেন্ট কন্টেন্টেই ছবি ও অন্য সব এলিমেন্ট যুক্ত করা
    var newUserCommentContainer = document.createElement('div');
    newUserCommentContainer.classList.add('user-comment-container');
    var profileContainer = document.createElement('div');
    profileContainer.classList.add('user-comment-profile-container');
    var profile = document.createElement('div');
    profile.classList.add('user-comment-profile');
    var img = document.createElement('img');
    img.src = 'profile.jpg';
    
    profile.appendChild(img);
    profileContainer.appendChild(profile);
    newUserCommentContainer.appendChild(profileContainer);
    newUserCommentContainer.appendChild(newCommentContent);
    
    // নতুন কমেন্ট কন্টেন্ট কন্টেনার যুক্ত করা
    var commentDisplayContainer = document.querySelector('.comment-display-container');
    // প্রথমে এই নতুন কমেন্টকে সংখ্যার প্রথমে যোগ করে তারপরে সংখ্যার নতুন মানটি আপডেট করে
    commentDisplayContainer.insertBefore(newUserCommentContainer, commentDisplayContainer.firstChild);
    
    // comment-display-container এর ডিসপ্লে প্রপার্টি পরিবর্তন করা
    commentDisplayContainer.style.display = "block";
    
    // কমেন্ট সংখ্যা আপডেট করা
    var commentsLength = document.querySelectorAll('.user-comment-container').length;
    document.querySelector('.comment-and-share p:first-child').textContent = commentsLength + " Comments";
    
    // <button class="viewAllComment">View all comments <i class='bx bx-chevron-down'></i></button> এর টেক্সট পরিবর্তন করা
    var viewAllCommentsButton = document.querySelector('.viewAllComment');
    viewAllCommentsButton.innerHTML = "Hide all comments <i class='bx bx-chevron-up'></i>";
    
    // ইনপুট এলিমেন্টের মান মুছে ফেলা
    document.querySelector('.comment-input input').value = "";
});


//comment button click and comment input focus

document.getElementById("commentBtn").addEventListener('click', function(){
  
  document.getElementById('commentInputFocus').focus();
})


// বাটনের এলিমেন্টকে সিলেক্ট করুন
// বাটনের এলিমেন্টকে সিলেক্ট করুন
var viewAllCommentsButton = document.querySelector('.viewAllComment');

// বাটনের উপরে ক্লিক ইভেন্ট যোগ করুন
viewAllCommentsButton.addEventListener('click', function() {
    // comment-display-container এর ডিসপ্লে প্রপার্টি পরিবর্তন করুন
    var commentDisplayContainer = document.querySelector('.comment-display-container');
    if (commentDisplayContainer.style.display === "none" || commentDisplayContainer.style.display === "") {
        commentDisplayContainer.style.display = "block";
        viewAllCommentsButton.innerHTML = "Hide all comments <i class='bx bx-chevron-up'></i>";
    } else {
        commentDisplayContainer.style.display = "none";
        viewAllCommentsButton.innerHTML = "View all comments <i class='bx bx-chevron-down'></i>";
    }
});





// mobail screen dark mode apply

const switchElement = document.querySelector('.dark-toggle-switch');
const switchButton1 = switchElement.querySelector('.switch');

let isSwitched1 = localStorage.getItem('isSwitched1') === 'true';

switchButton1.style.marginLeft = isSwitched1 ? 'auto' : '0';
document.body.classList.toggle('dark-theme', isSwitched1);
document.querySelector('meta[name="theme-color"]').setAttribute('content', isSwitched1 ? '#000' : '#fff');

switchElement.addEventListener('click', function toggleSwitch1() {
  isSwitched1 = !isSwitched1;
  localStorage.setItem('isSwitched1', isSwitched1);
  switchButton1.style.marginLeft = isSwitched1 ? 'auto' : '0';
  document.body.classList.toggle('dark-theme', isSwitched1);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isSwitched1 ? '#000' : '#fff');
});

const darkBtnContainer = document.querySelector('.dark-btn-container');
const switchButton2 = darkBtnContainer.querySelector('.switch');

let isSwitched2 = localStorage.getItem('isSwitched2') === 'true';

switchButton2.style.marginLeft = isSwitched2 ? 'auto' : '0';
document.body.classList.toggle('dark-theme', isSwitched2);
document.querySelector('meta[name="theme-color"]').setAttribute('content', isSwitched2 ? '#212121' : '#fff');

// Inside the event listener where the dark theme is applied
darkBtnContainer.addEventListener('click', function toggleSwitch2() {
  // Set a timeout for 2 seconds
  setTimeout(function() {
    isSwitched2 = !isSwitched2;
    localStorage.setItem('isSwitched2', isSwitched2);
    switchButton2.style.marginLeft = isSwitched2 ? 'auto' : '0';
    document.body.classList.toggle('dark-theme', isSwitched2);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isSwitched2 ? '#212121' : '#fff');
    
    // Change the logo image based on the dark theme status
    const logoImage = document.querySelector('.nav-logo-media-query img');
    const newLogoPath = isSwitched2 ? 'logo-white.png' : 'logo-blue.png';
    logoImage.src = newLogoPath;
    
    // Save the new logo path to local storage
    localStorage.setItem('logoPath', newLogoPath);
    
    
  }, 0100); // 2000 milliseconds = 2 seconds
});

// When the page loads, check if there's a saved logo path in local storage
window.addEventListener('load', function() {
  const savedLogoPath = localStorage.getItem('logoPath');
  if (savedLogoPath) {
    const logoImage = document.querySelector('.nav-logo-media-query img');
    logoImage.src = savedLogoPath;
  }
});




document.querySelector(".mobail-menu").addEventListener('click', function(){
  setTimeout(function(){
    document.querySelector(".app-menu-page").style.display = "block";
    document.querySelector("nav").style.display = "none";
    document.querySelector(".website-body").style.display = "none";
  }, 0100); // ১ সেকেন্ডের মধ্যে কাজ করবে
});

document.querySelector(".menuBack").addEventListener('click', function(){
  setTimeout(function(){
    document.querySelector(".app-menu-page").style.display = "none"
  document.querySelector("nav").style.display = "block"
  document.querySelector(".website-body").style.display = "block";
  }, 0100); // ১ সেকেন্ডের মধ্যে কাজ করবে
});



// internet connection on off popup


window.addEventListener('load', () => {
    let isFirstLogin = true; // প্রথম লগইন হিসাবে চিহ্নিত করা

    const noInternetPopup = document.querySelector('.no-internet-popup');
    const internetOnPopup = document.querySelector('.internet-on-popup');
    const myActiveStatus = document.querySelector('.myActiveStatus');

    function updateOnlineStatus() {
        if (!isLoggedIn()) {
            return; // ব্যবহারকারী লগইন না থাকলে কোন কাজ করা হবে না
        }

        if (navigator.onLine) {
            noInternetPopup.style.bottom = '-5rem';
            if (!isFirstLogin) {
                internetOnPopup.style.bottom = '2.5rem';
                setTimeout(() => {
                    internetOnPopup.style.bottom = '-5rem';
                }, 8000); // 3 সেকেন্ডের মধ্যে বন্ধ করা
            }
            myActiveStatus.style.display = 'block'; // ইন্টারনেট সংযোগ সার্ভিস সক্রিয় হলে ব্যাকগ্রাউন্ড রং পরিবর্তন করা
        } else {
            noInternetPopup.style.bottom = '2rem';
            internetOnPopup.style.bottom = '-5rem';
            myActiveStatus.style.display = 'none'; // ইন্টারনেট সংযোগ ছাড়া হলে ডিফল্ট ব্যাকগ্রাউন্ড রং পরিবর্তন করা
        }
        isFirstLogin = false; // প্রথম লগইন হিসাবে চিহ্নিত করা পরে আপডেট করা
    }

    function isLoggedIn() {
        // ব্যবহারকারী লগইন আছে কিনা তা পরীক্ষা করার লজিক এখানে লিখুন
        // উদাহরণস্বরূপ, আপনি সেশন বা টোকেন উপলব্ধ কিনা চেক করতে পারেন
        return true; // ব্যবহারকারী লগইন আছে এবং সত্য হলে ট্রু রিটার্ন করুন, অন্যথায় ফলস রিটার্ন করুন
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    updateOnlineStatus();

    const myActiveStatuses = document.querySelectorAll('.myActiveStatus');

    window.addEventListener('online', () => {
        myActiveStatuses.forEach(status => {
            status.style.display = 'block'; // ইন্টারনেট সংযোগ সার্ভিস সক্রিয় হলে ব্যাকগ্রাউন্ড রং পরিবর্তন করা
        });
    });

    window.addEventListener('offline', () => {
        myActiveStatuses.forEach(status => {
            status.style.display = 'none'; // ইন্টারনেট সংযোগ ছাড়া হলে ডিফল্ট ব্যাকগ্রাউন্ড রং পরিবর্তন করা
        });
    });
});


document.getElementById("interNetPopupCloseOfline").addEventListener('click', function(){
  document.querySelector('.no-internet-popup').style.bottom ='-5rem'
});

document.getElementById("onInternetPopupClose").addEventListener('click', function(){
  document.querySelector('.internet-on-popup').style.bottom ='-5rem'
});








//socialbook ai chat

const messageBar = document.querySelector(".ai-chat-bottom input");
const sendBtn = document.querySelector(".chatMassageSend");
const messageBox = document.querySelector(".message-box");

let API_URL = "https://api.openai.com/v1/chat/completions";
let API_KEY = "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";

sendBtn.onclick = async function () {
  if (messageBar.value.length > 0) {
    const UserTypedMessage = messageBar.value;
    messageBar.value = "";

    let userMessage =
      `<div id="userChat" class="chat userMassage">
        <span>${UserTypedMessage}</span>
      </div>`;

    let responseIndicator =
      `<div id="chat-response" class="chat response">
      <img src="logo.png">
      <span class="chatIndecator"</span>
      <div class="typing-dots">
        <div class="dots" style="--delay: 200ms"></div>
        <div class="dots" style="--delay: 300ms"></div>
        <div class="dots" style="--delay: 400ms"></div>
      </div>
    </div>`;

    messageBox.insertAdjacentHTML("beforeend", userMessage);
    messageBox.insertAdjacentHTML("beforeend", responseIndicator);

    // Scroll to bottom after sending user message
    messageBox.scrollTop = messageBox.scrollHeight;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": UserTypedMessage }]
      })
    };

    try {
      const res = await fetch(API_URL, requestOptions);
      const data = await res.json();
      
      const ChatBotResponse = document.querySelector(".response .typing-dots");
      ChatBotResponse.innerHTML = '';
      let index = 0;
      const typeWriter = () => {
        if (index < data.choices[0].message.content.length) {
          ChatBotResponse.innerHTML += data.choices[0].message.content.charAt(index);
          index++;
          setTimeout(typeWriter, 10);
        }
      };
      typeWriter();
      ChatBotResponse.classList.remove("typing-dots");
      
      // Scroll to bottom after receiving bot response
      messageBox.scrollTop = messageBox.scrollHeight;
    } catch (error) {
      const ChatBotResponse = document.querySelector(".response .typing-dots");
      ChatBotResponse.innerHTML = "Oops! An error occurred. Please try again";
    }
  }
};



// ai chat click 

var AiChat = document.getElementById('AiChat');
var aiChatPage = document.querySelector('.ai-chat-page');

AiChat.addEventListener('click', function(){
  aiChatPage.style.display = 'block';
  aiChatPage.style.boxShadow = '0 0 20px var(--main-color)';

  setTimeout(function() {
    aiChatPage.style.boxShadow = '0 0 5px rgba(0,0,0,0.4)';
  }, 2000); // 1000 মিলিসেকেন্ড (1 সেকেন্ড)
  
  document.getElementById('firstAiMessage').style.display = 'flex';
});

//ai chat close 

var aiChatClose = document.getElementById('ai-chat-close');

aiChatClose.addEventListener('click', function(){
  aiChatPage.style.display = 'none'
  messageBox.innerHTML = ''; // সমস্ত চ্যাট মুছে ফেলা
  
});


// chat minimize click 
document.querySelector('.chat-minimize').addEventListener('click', function(){
  aiChatPage.style.display = 'none'
});



// profile-icom click and profile page open 

document.querySelector('.profile-img').addEventListener('click', function(){
  
  setTimeout(function(){
    document.getElementById('profile-page').style.top = '0'
    document.querySelector('nav').style.display = 'none'
    document.querySelector('.main-feed-container').style.display = 'none'
  }, 0200);
});

//profile page back button 
document.querySelector('.profile-back').addEventListener('click', function(){
  
  setTimeout(function(){
    document.getElementById('profile-page').style.top = '100%'
    document.querySelector('nav').style.display = 'block'
    document.querySelector('.main-feed-container').style.display = 'block'
  }, 0200);
});



// logout click popup open 

document.querySelector('.menu-lg').addEventListener('click', function(){
  document.querySelector('.lg-popup-opacity').style.display = 'flex'
})

// logout click popup close 
document.querySelector('.lg-cancel').addEventListener('click', function(){
  
  setTimeout(function() {
    document.querySelector('.lg-popup-opacity').style.display = 'none'
}, 0100);
})




document.getElementById("profileCameraClick").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function() {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imgElements = document.querySelectorAll('.selectedImg');
            imgElements.forEach(function(imgElement) {
                imgElement.src = e.target.result;
            });
        };
        reader.readAsDataURL(file);
    }
});


