

export class LinkAttributeAndElementVO {
    public ids?: Array<string>;
    private 'stand_row_id'?: string;
    private 'table_id'?: string;
    private 'biz_type'?: LinkAttributeAndElementVOBizTypeEnum | string;
    public constructor(ids?: Array<string>, standRowId?: string, tableId?: string, bizType?: string) { 
        this['ids'] = ids;
        this['stand_row_id'] = standRowId;
        this['table_id'] = tableId;
        this['biz_type'] = bizType;
    }
    public withIds(ids: Array<string>): LinkAttributeAndElementVO {
        this['ids'] = ids;
        return this;
    }
    public withStandRowId(standRowId: string): LinkAttributeAndElementVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: string  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): string | undefined {
        return this['stand_row_id'];
    }
    public withTableId(tableId: string): LinkAttributeAndElementVO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withBizType(bizType: LinkAttributeAndElementVOBizTypeEnum | string): LinkAttributeAndElementVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: LinkAttributeAndElementVOBizTypeEnum | string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): LinkAttributeAndElementVOBizTypeEnum | string | undefined {
        return this['biz_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LinkAttributeAndElementVOBizTypeEnum {
    TABLE_MODEL = 'TABLE_MODEL',
    AGGREGATION_LOGIC_TABLE = 'AGGREGATION_LOGIC_TABLE',
    FACT_LOGIC_TABLE = 'FACT_LOGIC_TABLE',
    DIMENSION = 'DIMENSION',
    DIMENSION_LOGIC_TABLE = 'DIMENSION_LOGIC_TABLE'
}
