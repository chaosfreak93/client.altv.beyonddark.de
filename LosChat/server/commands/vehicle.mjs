/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import { registerCmd } from '../systems/chat.mjs';
import { getForwardVectorServer } from '../utility/vector';

registerCmd(
    'vehicle',
    '/vehicle <name> | Summons a vehicle in front of a player.',
    handleAddVehicle
);

function handleAddVehicle(player, args) {
    if (!args || !args[0]) {
        player.send(`/vehicle <name>`);
        return;
    }

    if (player.getMeta('lastVehicle') && player.getMeta('lastVehicle').valid) {
        player.getMeta('lastVehicle').destroy();
    }

    const vehicleName = args[0];
    const fwdVector = getForwardVectorServer(player.rot);
    const positionInFront = {
        x: player.pos.x + fwdVector.x * 4,
        y: player.pos.y + fwdVector.y * 4,
        z: player.pos.z,
    };

    try {
        let vehicle = new alt.Vehicle(
            vehicleName,
            positionInFront.x,
            positionInFront.y,
            positionInFront.z,
            0,
            0,
            0
        );
        player.setMeta('lastVehicle', vehicle); 

        vehicle.deleteSyncedMeta('tank');
        alt.emit('setTank', vehicle, 100);
        vehicle.setSyncedMeta('engine', true);
        vehicle.setSyncedMeta('toggleVehicleLock', false);
        vehicle.lockState = 1;
        vehicle.numberPlateText = makeNumberPlate(8); 
        player.send(`{00FF00}${vehicleName} wurde erfolgreich gespawnt.`);
    } catch (err) {
        player.send(`{FF0000}${vehicleName} ist kein gültiger Fahrzeug Name.`);
    }
}

function makeNumberPlate(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
