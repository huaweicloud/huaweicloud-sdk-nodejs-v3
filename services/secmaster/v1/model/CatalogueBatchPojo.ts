

export class CatalogueBatchPojo {
    private 'is_display'?: boolean;
    public id?: string;
    private 'second_alias_zh'?: string;
    private 'second_alias_en'?: string;
    public constructor() { 
    }
    public withIsDisplay(isDisplay: boolean): CatalogueBatchPojo {
        this['is_display'] = isDisplay;
        return this;
    }
    public set isDisplay(isDisplay: boolean  | undefined) {
        this['is_display'] = isDisplay;
    }
    public get isDisplay(): boolean | undefined {
        return this['is_display'];
    }
    public withId(id: string): CatalogueBatchPojo {
        this['id'] = id;
        return this;
    }
    public withSecondAliasZh(secondAliasZh: string): CatalogueBatchPojo {
        this['second_alias_zh'] = secondAliasZh;
        return this;
    }
    public set secondAliasZh(secondAliasZh: string  | undefined) {
        this['second_alias_zh'] = secondAliasZh;
    }
    public get secondAliasZh(): string | undefined {
        return this['second_alias_zh'];
    }
    public withSecondAliasEn(secondAliasEn: string): CatalogueBatchPojo {
        this['second_alias_en'] = secondAliasEn;
        return this;
    }
    public set secondAliasEn(secondAliasEn: string  | undefined) {
        this['second_alias_en'] = secondAliasEn;
    }
    public get secondAliasEn(): string | undefined {
        return this['second_alias_en'];
    }
}