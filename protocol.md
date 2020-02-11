# Protocol
The protocol that the Felt clients and server use to interact with each other.

Transport layer protocol: [WebSocket](https://en.wikipedia.org/wiki/WebSocket).

## Clients

* Presentation (PRN)

   The plugin running in the Reveal.JS presentation that is getting controlled.
* Server (SRV)

   The back-end server that manages the rooms.
* Controller (CTL)

   The mobile app that controls the presentation remotely.

## Description
A Presentation connects to the Server. It identifies as a presentation and initializes a new room.
A room is a place where the Controller(s) can talk to the Presentation.

It notifies the user of the room number, and the user takes action, for example, by opening a controller app.
The controller connects to the server, and joins the room. The presentation is notified of this and may take action (for example, by hiding the room number). The controller can then instruct the Presentation to go to the next slide (RIGHT), previous slide (LEFT), up, or to go down.

## Commands

|Command|Who|Description|Arguments|Returns|
|---|---|---|---|---|
|IDENT|_Any_|Identify as a certain client|The client `String`|`OK` if OK|
|INIT|Presentation|Initialize a new room|`None`|A new room number `Int`|
|KILL|Presentation|Kill the current room and notify any Controllers in the room that the room was killed|`None`|`OK` if OK|
|JOIN|Controller|Join a room and notify the Presentation that a controller has joined|A room number `Int`|`OK` if OK|
|QUIT|Controller|Quit the current room|`None`|`OK` if OK|
|MOVE|Controller|Go in a direction|`LEFT`, `RIGHT`, `UP`, `DOWN` `Direction`|`OK` if OK|

## Errors
// todo
