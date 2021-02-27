import * as native from 'natives';

const gas_patrol_list = [
    {
        x: -525.12,
        y: -1210.95,
        z: 18.17
    },
    {
        x: -724.5758056640625,
        y: -935.98681640625,
        z: 19.20361328125
    },
    {
        x: -70.37802124023438,
        y: -1762.03515625,
        z: 29.5325927734375
    },
    {
        x: 265.054931640625,
        y: -1262.16259765625,
        z: 29.2799072265625
    },
    {
        x: -1436.7164306640625,
        y: -276.5670166015625,
        z: 46.197021484375
    },
    {
        x: -1800.1318359375,
        y: 803.5911865234375,
        z: 138.6351318359375
    },
    {
        x: 620.8351440429688,
        y: 268.79998779296875,
        z: 103.08203125
    },
    {
        x: 819.032958984375,
        y: -1028.00439453125,
        z: 26.3985595703125
    },
    {
        x: 175.2923126220703,
        y: -1562.05712890625,
        z: 29.2630615234375
    },
    {
        x: 1181.4989013671875,
        y: -330.1054992675781,
        z: 69.3150634765625
    },
    {
        x: 2581.318603515625,
        y: 361.8725280761719,
        z: 108.4571533203125
    },
    {
        x: 1785.6131591796875,
        y: 3330.38232421875,
        z: 41.3780517578125
    },
    {
        x: 2004.949462890625,
        y: 3774.25048828125,
        z: 32.3970947265625
    },
    {
        x: 1687.7010498046875,
        y: 4930.25927734375,
        z: 42.06884765625
    },
    {
        x: 1702.10107421875,
        y: 6416.9404296875,
        z: 32.7509765625
    },
    {
        x: 180.10549926757812,
        y: 6603.033203125,
        z: 31.85791015625
    },
    {
        x: -2554.984619140625,
        y: 2334.17138671875,
        z: 33.071044921875
    },
    {
        x: 49.410987854003906,
        y: 2778.791259765625,
        z: 58.04248046875
    },
    {
        x: 264.1054992675781,
        y: 2607.468017578125,
        z: 44.967041015625
    },
    {
        x: 1207.5955810546875,
        y: 2660.637451171875,
        z: 37.89013671875
    },
    {
        x: -2097.309814453125,
        y: -320.0703430175781,
        z: 13.154541015625
    }
];

for (let i = 0; i < gas_patrol_list.length; i++) {
    let gas_partol = native.addBlipForCoord(gas_patrol_list[i].x, gas_patrol_list[i].y, gas_patrol_list[i].z);
    native.setBlipSprite(gas_partol, 361);
    native.setBlipColour(gas_partol, 81);
    native.setBlipDisplay(gas_partol, 3);
    native.setBlipCategory(gas_partol, 1);
    native.beginTextCommandSetBlipName('STRING');
    native.addTextComponentSubstringPlayerName('Gas Patrol');
    native.endTextCommandSetBlipName(gas_partol);
}