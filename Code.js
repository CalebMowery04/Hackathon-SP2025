async function addSubmitListener() {
    var prompt = document.getElementById("prompt").value;
    document.getElementById("output").innerText = prompt
    document.getElementById("submit").addEventListener("click", async function(event) {
    document.getElementById("output").innerText = "thinking...";
    try {
      text = await testing();
      document.getElementById("output").innerText = text
    }
    catch (error) {
      document.getElementById("output").innerText = error;
    }
    });
}
      // document.getElementById("prompt").addEventListener("keydown", function(event) {
      //   if (event.key === "Enter") {
      //     document.getElementById("output").innerText = promptAI("HELLO");
      //   }
      // });
async function testing() {
    const prompt = 'The most important aspects of a persuasive presentation are:';
    
    text = await promptAI(prompt);
    return text;
}

async function promptAI(prompt) {
    const gemini = new GeminiApp('AIzaSyBh0INs-TpAoxwRLPIEQy2IZLrcgimpDqI');
    const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

}

function onOpen() {
    var ui = DocumentApp.getUi();
    ui.createMenu('My Add-on')
      .addItem('use ReWrite', 'openSideBar')
      .addToUi();
}
function openSideBar() {
      DocumentApp.getUi().showSidebar(html);
}

async function rateOutOfTen() {
  
}
addSubmitListener();
