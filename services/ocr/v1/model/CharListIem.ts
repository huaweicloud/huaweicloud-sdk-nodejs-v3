

export class CharListIem {
    private 'char'?: string | undefined;
    private 'char_confidence'?: number | undefined;
    private 'char_location'?: Array<Array<number>> | undefined;
    public constructor() { 
    }
    public withChar(_char: string): CharListIem {
        this['char'] = _char;
        return this;
    }
    public set _char(_char: string | undefined) {
        this['char'] = _char;
    }
    public get _char() {
        return this['char'];
    }
    public withCharConfidence(charConfidence: number): CharListIem {
        this['char_confidence'] = charConfidence;
        return this;
    }
    public set charConfidence(charConfidence: number | undefined) {
        this['char_confidence'] = charConfidence;
    }
    public get charConfidence() {
        return this['char_confidence'];
    }
    public withCharLocation(charLocation: Array<Array<number>>): CharListIem {
        this['char_location'] = charLocation;
        return this;
    }
    public set charLocation(charLocation: Array<Array<number>> | undefined) {
        this['char_location'] = charLocation;
    }
    public get charLocation() {
        return this['char_location'];
    }
}