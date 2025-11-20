

export class CipherInfo {
    public name?: string;
    public algo?: string;
    private 'desc_cn'?: string;
    private 'desc_en'?: string;
    public constructor(name?: string, algo?: string, descCn?: string, descEn?: string) { 
        this['name'] = name;
        this['algo'] = algo;
        this['desc_cn'] = descCn;
        this['desc_en'] = descEn;
    }
    public withName(name: string): CipherInfo {
        this['name'] = name;
        return this;
    }
    public withAlgo(algo: string): CipherInfo {
        this['algo'] = algo;
        return this;
    }
    public withDescCn(descCn: string): CipherInfo {
        this['desc_cn'] = descCn;
        return this;
    }
    public set descCn(descCn: string  | undefined) {
        this['desc_cn'] = descCn;
    }
    public get descCn(): string | undefined {
        return this['desc_cn'];
    }
    public withDescEn(descEn: string): CipherInfo {
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