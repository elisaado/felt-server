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

It notifies the user of the room number, and the user takes action, maybe by opening a controller app.
A controller connects to the server, and joins the room, it can then instruct the Presentation to go to the next slide (RIGHT), previous slide (LEFT), up, or to go down.

## Commands

|Command|Who|Description|Arguments|Returns|
|---|---|---|---|---|
|IDENT|_Any_|Identify as a certain client|The client `String`|`None`|
|INIT|Presentation|Initialize a new room|`None`|A new room number `Int`|
|KILL|Presentation|Kill the current room|`None`|`None`|
|JOIN|Controller|Join a room|A room number `Int`|`None`|
|QUIT|Controller|Quit the current room|`None`|`None`|
|LEFT|Controller|Go to left|`None`|`None`|
|RIGHT|Controller|Go to right|`None`|`None`|
|UP|Controller|Go up|`None`|`None`|
|DOWN|Controller|Go down|`None`|`None`|
