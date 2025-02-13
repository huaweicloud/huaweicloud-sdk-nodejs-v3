

export class AccessControl {
    public black?: Array<string>;
    public white?: Array<string>;
    public constructor() { 
    }
    public withBlack(black: Array<string>): AccessControl {
        this['black'] = black;
        return this;
    }
    public withWhite(white: Array<string>): AccessControl {
        this['white'] = white;
        return this;
    }
}