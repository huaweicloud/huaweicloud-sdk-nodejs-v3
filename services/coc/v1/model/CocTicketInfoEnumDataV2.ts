

export class CocTicketInfoEnumDataV2 {
    private 'prop_id'?: string;
    private 'biz_id'?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    public constructor(nameZh?: string, nameEn?: string) { 
        this['name_zh'] = nameZh;
        this['name_en'] = nameEn;
    }
    public withPropId(propId: string): CocTicketInfoEnumDataV2 {
        this['prop_id'] = propId;
        return this;
    }
    public set propId(propId: string  | undefined) {
        this['prop_id'] = propId;
    }
    public get propId(): string | undefined {
        return this['prop_id'];
    }
    public withBizId(bizId: string): CocTicketInfoEnumDataV2 {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withNameZh(nameZh: string): CocTicketInfoEnumDataV2 {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): CocTicketInfoEnumDataV2 {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
}