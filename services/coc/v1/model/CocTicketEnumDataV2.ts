

export class CocTicketEnumDataV2 {
    private 'prop_id'?: string;
    private 'biz_id'?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    public constructor() { 
    }
    public withPropId(propId: string): CocTicketEnumDataV2 {
        this['prop_id'] = propId;
        return this;
    }
    public set propId(propId: string  | undefined) {
        this['prop_id'] = propId;
    }
    public get propId(): string | undefined {
        return this['prop_id'];
    }
    public withBizId(bizId: string): CocTicketEnumDataV2 {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withNameZh(nameZh: string): CocTicketEnumDataV2 {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): CocTicketEnumDataV2 {
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