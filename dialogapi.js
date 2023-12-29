// Include this script in your HTML file
// Replace 'YOUR_DIALOGFLOW_API_KEY' with your Dialogflow API key
const dialogflowApiKey = 'VF.DM.658c8a86d7bebc00071bb49d.yIjB40nkdnfWVk5Y';
const apiUrl = `https://api.dialogflow.com/v1/query?v=20150910`;

// Function to send a user message to Dialogflow and receive a response
async function sendMessageToDialogflow(message) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dialogflowApiKey}`,
      },
      body: JSON.stringify({
        query: message,
        lang: 'en', // Change to your desired language
      }),
    });

    const data = await response.json();
    const reply = data.result.fulfillment.speech;

    // Handle the response from Dialogflow (e.g., display it in the chat interface)
    displayMessage(reply);
  } catch (error) {
    console.error('Error sending message to Dialogflow:', error);
  }
}

// Function to display a message in the chat interface
function displayMessage(message) {
  // Implement code to display the message in your chat interface here
  // This could involve manipulating the DOM to add a new chat bubble, for example
  console.log('Dialogflow Response:', message);
}

// Example usage: sending a message to Dialogflow
sendMessageToDialogflow('Hello, chatbot!');
