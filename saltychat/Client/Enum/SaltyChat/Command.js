export var Command;
(function (Command) {
    Command[Command["pluginState"] = 0] = "pluginState";
    Command[Command["initiate"] = 1] = "initiate";
    Command[Command["reset"] = 2] = "reset";
    Command[Command["ping"] = 3] = "ping";
    Command[Command["pong"] = 4] = "pong";
    Command[Command["instanceState"] = 5] = "instanceState";
    Command[Command["soundState"] = 6] = "soundState";
    Command[Command["selfStateUpdate"] = 7] = "selfStateUpdate";
    Command[Command["playerStateUpdate"] = 8] = "playerStateUpdate";
    Command[Command["bulkUpdate"] = 9] = "bulkUpdate";
    Command[Command["removePlayer"] = 10] = "removePlayer";
    Command[Command["talkState"] = 11] = "talkState";
    Command[Command["playSound"] = 18] = "playSound";
    Command[Command["stopSound"] = 19] = "stopSound";
    Command[Command["phoneCommunicationUpdate"] = 20] = "phoneCommunicationUpdate";
    Command[Command["stopPhoneCommunication"] = 21] = "stopPhoneCommunication";
    Command[Command["radioCommunicationUpdate"] = 30] = "radioCommunicationUpdate";
    Command[Command["stopRadioCommunication"] = 31] = "stopRadioCommunication";
    Command[Command["radioTowerUpdate"] = 32] = "radioTowerUpdate";
    Command[Command["radioTrafficState"] = 33] = "radioTrafficState";
    Command[Command["megaphoneCommunicationUpdate"] = 40] = "megaphoneCommunicationUpdate";
    Command[Command["stopMegaphoneCommunication"] = 41] = "stopMegaphoneCommunication";
})(Command || (Command = {}));
