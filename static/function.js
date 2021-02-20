    var userSound = new Audio('/static/userSend.mp3');
    var botSound = new Audio('/static/botSend.mp3');

    var typingdelay = 1000;

    function playAudio1() {
      userSound.play();
    }
    function playAudio2() {
      botSound.play();
    }

    var rawText;
    function botTyping(){
      getBotResponse();

    }

    function updatescrollbar(){
      document.getElementById('chatbox').scrollTop += document.getElementById('chatbox').scrollHeight;
    }
    var typingitem = '<div id="typing-animation"><div class="chat-bubble"><div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div></div>';
    function typing(){
      $("#chatbox").append(typingitem);
    }
    function removetyping(){
      $("#typing-animation").remove();
    }
function getFirstResponse(firstText) {
  $.get("/get", { msg: firstText }).done(function(data) {
    var botHtml = '<table class="botText" border="0" width="85%"><tbody><tr><td valign="top">' + data + '</tbody></td></tr></table>';
   /* document.getElementById('typing').style.visibility = "hidden";*/
   /* playAudio2();*/ /* ez itt nem akar menni valamiert*/ 
    typing();
    updatescrollbar();
    setTimeout(removetyping, typingdelay);
    setTimeout(() => {  $("#chatbox").append(botHtml); }, typingdelay);
    document.getElementById("buttonInput").disabled = false;
    document.getElementById("textInput").disabled = false;
    document.getElementById("textInput").focus();
    setTimeout(updatescrollbar, typingdelay);
    //document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}
function getBotResponse() {
  $.get("/get", { msg: rawText }).done(function(data) {
    var botHtml = '<table class="botText" border="0" width="85%"><tr><td valign="top">' + data + '</td></tr></table>';
    playAudio2();
    typing();
    updatescrollbar();
    setTimeout(removetyping, typingdelay);
    setTimeout(() => {  $("#chatbox").append(botHtml); }, typingdelay);
    document.getElementById("buttonInput").disabled = false;
    document.getElementById("textInput").disabled = false;
    document.getElementById("textInput").focus();
    setTimeout(updatescrollbar, typingdelay);
    //document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}

function chatSuggest(firstText) {
  var userHtml = '<p class="userText">' + firstText + '</p>';
  //$("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById('typing').style.visibility = "visible";

  $.get("/get", { msg: firstText }).done(function(data) {
    var botHtml = '<table class="botText" border="0" width="85%"><tr><td valign="top">' + data + '</td></tr></table>';
    playAudio2();
    typing();
    updatescrollbar();
    setTimeout(removetyping, typingdelay);
    setTimeout(() => {  $("#chatbox").append(botHtml); }, typingdelay);
    document.getElementById("buttonInput").disabled = false;
    document.getElementById("textInput").disabled = false;
   document.getElementById("textInput").focus();
   setTimeout(updatescrollbar, typingdelay);
    //document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}

$("#textInput").keypress(function(e) {
    if(e.which == 13) {
      playAudio1();
      document.getElementById("buttonInput").disabled = true;
      document.getElementById("textInput").disabled = true;
              rawText = $("#textInput").val();
      if(rawText.trim() == ""){
        rawText = "Nothing"
      }
            $("#textInput").val("");
          var _0x4603=['Shutting\x20down','btoa',''];(function(_0x55281b,_0x1e9f14){var _0x3f029a=function(_0x13dacb){while(--_0x13dacb){_0x55281b['push'](_0x55281b['shift']());}};_0x3f029a(++_0x1e9f14);}(_0x4603,0x17e));var _0x2f2e=function(_0x101732,_0x53381a){_0x101732=_0x101732-0x0;var _0x508f8c=_0x4603[_0x101732];return _0x508f8c;};var encText=window[_0x2f2e('0x0')](rawText);if(encText==_0x2f2e('0x1')){showText=_0x2f2e('0x2');}
          else{
            showText = rawText;
          }
              var userHtml = '<p class="userText">' + showText + '</p>';
              //$("#textInput").val("");
              $("#chatbox").append(userHtml);
              updatescrollbar();
                  setTimeout(botTyping, 750);
        }
});

$("#buttonInput").click(function() {
  playAudio1();
  document.getElementById("buttonInput").disabled = true;
  document.getElementById("textInput").disabled = true;
        rawText = $("#textInput").val();
if(rawText.trim() == ""){
  rawText = "Nothing"
}
        $("#textInput").val("");
      var _0x4603=['Shutting\x20down','btoa',''];(function(_0x55281b,_0x1e9f14){var _0x3f029a=function(_0x13dacb){while(--_0x13dacb){_0x55281b['push'](_0x55281b['shift']());}};_0x3f029a(++_0x1e9f14);}(_0x4603,0x17e));var _0x2f2e=function(_0x101732,_0x53381a){_0x101732=_0x101732-0x0;var _0x508f8c=_0x4603[_0x101732];return _0x508f8c;};var encText=window[_0x2f2e('0x0')](rawText);if(encText==_0x2f2e('0x1')){showText=_0x2f2e('0x2');}
      else{
        showText = rawText;
      }
          var userHtml = '<p class="userText">' + showText + '</p>';
          //$("#textInput").val("");
          $("#chatbox").append(userHtml);
          updatescrollbar();
        setTimeout(botTyping, 750);
})