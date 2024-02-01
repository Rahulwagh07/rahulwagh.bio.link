 

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const copy = document.querySelector(".copy");

//function to open modal
const openModal = () => {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//function to close modal
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};

//function to copy url to clipboard
async function copyLink() {
    try {
      await navigator.clipboard.writeText("https://rahulwagh.bio.link");
      copy.innerText = "copied";
    }
    catch(e) {
        copy.innerText = "Failed";
    }
    setTimeout( () => {
        copy.innerText = 'Copy';
  
    } , 2000);
  }

  //function to share bio link on twitter
  function shareOnTwitter() {
    // Construct the tweet text
    var tweetText = encodeURIComponent("Checkout bio link of Rahul Wagh: https://rahulwagh.bio.link");

    // Open Twitter in a new window with the share URL
    window.open("https://twitter.com/intent/tweet?text=" + tweetText, "_blank");
  }
  

 //function to open gmail with subject, body
// function shareViaGmail() {
//     var recipientEmail = '';  
//     var subject = 'Chekout this Bio Link';
//     var body = 'Checkout bio link of Rahul Wagh: https://rahulwagh.bio.link';

//     var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1' +
//         '&to=' + recipientEmail +
//         '&su=' + encodeURIComponent(subject) +
//         '&body=' + encodeURIComponent(body);

//     window.open(gmailLink, '_blank');
// }

//function to share via Email
function shareViaEmail() {
    var recipientEmail = ''; 
    var subject = 'Check out this Bio Link';
    var body = 'Checkout this bio link of Rahul Wagh: https://rahulwagh.bio.link';

    var mailtoLink = 'mailto:' + recipientEmail +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
}

//function to share on whatsapp
function shareViaWhatsApp() {
    var text = 'Checkout this link: https://rahulwagh.bio.link';
    
    var whatsappLink = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
    
    window.open(whatsappLink, '_blank');
}


