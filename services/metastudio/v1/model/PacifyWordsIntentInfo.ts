

export class PacifyWordsIntentInfo {
    public intent?: string;
    private 'desc_cn'?: string;
    private 'desc_en'?: string;
    public constructor() { 
    }
    public withIntent(intent: string): PacifyWordsIntentInfo {
        this['intent'] = intent;
        return this;
    }
    public withDescCn(descCn: string): PacifyWordsIntentInfo {
        this['desc_cn'] = descCn;
        return this;
    }
    public set descCn(descCn: string  | undefined) {
        this['desc_cn'] = descCn;
    }
    public get descCn(): string | undefined {
        return this['desc_cn'];
    }
    public withDescEn(descEn: string): PacifyWordsIntentInfo {
        this['desc_en'] = descEn;
        return this;
    }
    public set descEn(descEn: string  | undefined) {
        this['desc_en'] = descEn;
    }
    public get descEn(): string | undefined {
        return this['desc_en'];
    }
}