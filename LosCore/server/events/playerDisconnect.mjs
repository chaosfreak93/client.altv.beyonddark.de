import * as alt from 'alt';
import mysql from 'mysql2';

let pool = mysql.createPool({
    host: '127.0.0.1',
    user: '',
    password: '',
    database: '',
    waitForConnections: true,
    connectionLimit: 150,
    queueLimit: 0,
});

alt.on('playerDisconnect', playerDisconnect);

function playerDisconnect(player) {
    if (!player || !player.valid) {
        return;
    }

    if (player.name === 'Player' || player.getMeta('discord') === 'false') {
        return;
    }

    if (player.getMeta('lastVehicle') !== null && player.getMeta('lastVehicle') !== undefined) {
        player.getMeta('lastVehicle').destroy();
    }

    pool.execute(
        'UPDATE `character` SET position=? WHERE guid=?',
        [JSON.stringify(player.pos), player.data.id],
        function (err, res, fields) {
            if (err) throw err;
        }
    );

    alt.log(player.name + " hat den Staat verlassen!");
}
