# Slack Messenger

This package currently sends messages to a single channel in slack.

I created it to send a notification to a dev channel for a specific event based api that I was building.
The issue stemmed form the developers of that event based system were frequently changing the structure of their messages, without notification or documentation.
Super frustrating, right? 
So, using this package, whenever I'm expecting a field in their message, and it comes in empty, null, undefined, etc. I get a notification.

I ended up separating all the other stuff out, 
and making this an independent module.



Use:
