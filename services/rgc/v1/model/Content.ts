

export class Content {
    public en?: string;
    public ch?: string;
    public constructor() { 
    }
    public withEn(en: string): Content {
        this['en'] = en;
        return this;
    }
    public withCh(ch: string): Content {
        this['ch'] = ch;
        return this;
    }
}