/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';

alt.on('playerConnect', playerConnect);

function playerConnect(player) {
    if (!player || !player.valid) {
        return;
    }

    if (player.name === 'Player') {
        setTimeout(() => {
            player.kick('Bitte ändere deinen Nutzernamen unter Einstellungen->Nutzername');
        }, 1000);
        return;
    }
    //alt.emit('PlayerLoggedIn', player, player.name);

    const currentDate = new Date();

    setDate(player, currentDate);

    alt.log(player.name + " hat den Staat beitreten!");

    player.spawn(402.9230651855469, -996.7911987304688, -99.0146484375, 0);
    player.rot = { x: 0, y: 0, z: 3.1168558597564697 };
    //Camera Position: 402.75, -999.65, -97.6
    player.dimension = player.id;
}

alt.setInterval(() => {
    if (alt.Player.all.length !== 0) {
        const currentDate = new Date();
        alt.Player.all.forEach((player) => {
            setDate(player, currentDate);
        });
    }
}, 500); // Sync Time all half Secconds

function setDate(player, currentDate) {
    player.setDateTime(currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
}

alt.onClient('backToReality', (player) => {
    player.dimension = 1;
    player.model = 'mp_m_freemode_01';
    alt.emitClient(player, 'chat:Init');
    alt.emitClient(player, 'teleportToLastPosition', {x: -1045.068115234375, y: -2750.05712890625, z: 22.3604736328125})
});
