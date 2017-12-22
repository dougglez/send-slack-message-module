This package currently sends messages to a single channel in slack.
<br/>*Disclaimer: This uses classes, and is not compiled to work with older versions of node. Sorry, I'll do that soon.

I created it to send a notification to a dev channel for a specific event based api that I was building.
The issue stemmed form the developers of that event based system were frequently changing the structure of their messages, without notification or documentation.
Super frustrating, right? 
So, using this package, whenever I'm expecting a field in their message, and it comes in empty, null, undefined, etc. I get a notification.

I ended up separating all the other stuff out, 
and making this an independent module.

Use:

Install:
    `npm install slack-messenger`

Get a webhook from Slack: https://api.slack.com/apps
 1. Click "Create New App"
 2. Pick a name and choose a workspace.
 3. Click "Create App"
 4. Click "Incoming Webhooks"
 5. Switch to "On"
 6. Scroll down and click "Add New Webhook to Workspace"
 7. Choose a workspace and "Authorize"
 8. Copy your Webhook URL into a config or .env file
     
     

Require:<br/>
`const { slackHook } = require('./config')` <br/>
`const SlackMessenger = require('slack-messenger);`
    
Create a new instance:
`const slackInstance = SlackMessenger(slackHook);`

Send a message:

`slackInstance.sendMessage('Hello, World!);`


Thanks for checking this out, and I hope it helps!