import * as alt from 'alt';
import game from 'natives';
import Color from "../utils/Color";
import Screen from "../utils/Screen";
export default class Sprite {
    constructor(textureDict, textureName, pos, size, heading = 0, color = new Color(255, 255, 255)) {
        this.TextureDict = textureDict;
        this.TextureName = textureName;
        this.Pos = pos;
        this.Size = size;
        this.Heading = heading;
        this.Color = color;
        this.Visible = true;
    }
    LoadTextureDictionary() {
        this.requestTextureDictPromise(this._textureDict).then((succ) => { });
    }
    requestTextureDictPromise(textureDict) {
        return new Promise((resolve, reject) => {
            game.requestStreamedTextureDict(textureDict, true);
            let inter = alt.setInterval(() => {
                if (game.hasStreamedTextureDictLoaded(textureDict)) {
                    alt.clearInterval(inter);
                    return resolve(true);
                }
            }, 10);
        });
    }
    set TextureDict(v) {
        this._textureDict = v;
        if (!this.IsTextureDictionaryLoaded)
            this.LoadTextureDictionary();
    }
    get TextureDict() {
        return this._textureDict;
    }
    get IsTextureDictionaryLoaded() {
        return game.hasStreamedTextureDictLoaded(this._textureDict);
    }
    Draw(textureDictionary, textureName, pos, size, heading, color, loadTexture) {
        textureDictionary = textureDictionary || this.TextureDict;
        textureName = textureName || this.TextureName;
        pos = pos || this.Pos;
        size = size || this.Size;
        heading = heading || this.Heading;
        color = color || this.Color;
        loadTexture = loadTexture || true;
        if (loadTexture) {
            if (!game.hasStreamedTextureDictLoaded(textureDictionary))
                game.requestStreamedTextureDict(textureDictionary, true);
        }
        const screenw = Screen.Width;
        const screenh = Screen.Height;
        const height = 1080.0;
        const ratio = screenw / screenh;
        const width = height * ratio;
        const w = this.Size.Width / width;
        const h = this.Size.Height / height;
        const x = this.Pos.X / width + w * 0.5;
        const y = this.Pos.Y / height + h * 0.5;
        game.drawSprite(textureDictionary, textureName, x, y, w, h, heading, color.R, color.G, color.B, color.A, true);
    }
}
