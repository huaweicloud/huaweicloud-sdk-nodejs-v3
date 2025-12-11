

export class SmartDocumentRecognizerCharList {
    private 'char'?: string;
    private 'char_confidence'?: number;
    private 'char_location'?: Array<Array<number>>;
    public constructor() { 
    }
    public withChar(_char: string): SmartDocumentRecognizerCharList {
        this['char'] = _char;
        return this;
    }
    public set _char(_char: string  | undefined) {
        this['char'] = _char;
    }
    public get _char(): string | undefined {
        return this['char'];
    }
    public withCharConfidence(charConfidence: number): SmartDocumentRecognizerCharList {
        this['char_confidence'] = charConfidence;
        return this;
    }
    public set charConfidence(charConfidence: number  | undefined) {
        this['char_confidence'] = charConfidence;
    }
    public get charConfidence(): number | undefined {
        return this['char_confidence'];
    }
    public withCharLocation(charLocation: Array<Array<number>>): SmartDocumentRecognizerCharList {
        this['char_location'] = charLocation;
        return this;
    }
    public set charLocation(charLocation: Array<Array<number>>  | undefined) {
        this['char_location'] = charLocation;
    }
    public get charLocation(): Array<Array<number>> | undefined {
        return this['char_location'];
    }
}