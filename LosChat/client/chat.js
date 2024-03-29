/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';

let messagesToPushOnLoad = [];
let loaded = false;
let opened = false;
let view = null;

alt.onServer('chat:Init', initializeChat);
alt.on('keyup', handleKeyup);

function initializeChat() {
    if (!view) {
        view = new alt.WebView('http://resource/client/html/index.html');
        view.on('chatloaded', chatLoaded);
        view.on('chatmessage', chatMessage);
    }
}

function appendMessage(msg) {
    if (!loaded) {
        messagesToPushOnLoad.push(msg);
        return;
    }

    view.emit('appendMessage', msg);
}

function chatLoaded() {
    loaded = true;

    messagesToPushOnLoad.forEach((message) => {
        appendMessage(message);
    });

    messagesToPushOnLoad = [];
}

function chatMessage(message) {
    alt.emitServer('command', message);

    opened = false;
    alt.toggleGameControls(true);
}

function handleKeyup(key) {
    if (!loaded) {
        return;
    }

    if (!opened && key === 0x54 && alt.gameControlsEnabled()) {
        opened = true;
        view.emit('openChat', false);
        alt.toggleGameControls(false);
    } else if (!opened && key === 0xbf && alt.gameControlsEnabled()) {
        opened = true;
        view.emit('openChat', true);
        alt.toggleGameControls(false);
    } else if (opened && key === 0x1b) {
        opened = false;
        view.emit('closeChat');
        alt.toggleGameControls(true);
    }
}