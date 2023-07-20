

export class ImgTextConfig {
    private 'black_glossary_names'?: Array<string>;
    private 'white_glossary_names'?: Array<string>;
    public constructor() { 
    }
    public withBlackGlossaryNames(blackGlossaryNames: Array<string>): ImgTextConfig {
        this['black_glossary_names'] = blackGlossaryNames;
        return this;
    }
    public set blackGlossaryNames(blackGlossaryNames: Array<string>  | undefined) {
        this['black_glossary_names'] = blackGlossaryNames;
    }
    public get blackGlossaryNames(): Array<string> | undefined {
        return this['black_glossary_names'];
    }
    public withWhiteGlossaryNames(whiteGlossaryNames: Array<string>): ImgTextConfig {
        this['white_glossary_names'] = whiteGlossaryNames;
        return this;
    }
    public set whiteGlossaryNames(whiteGlossaryNames: Array<string>  | undefined) {
        this['white_glossary_names'] = whiteGlossaryNames;
    }
    public get whiteGlossaryNames(): Array<string> | undefined {
        return this['white_glossary_names'];
    }
}