

export class LinkAttributeAndElementVO {
    public ids?: Array<number>;
    private 'stand_row_id'?: number;
    private 'table_id'?: number;
    private 'biz_type'?: LinkAttributeAndElementVOBizTypeEnum | string;
    public constructor(ids?: Array<number>, standRowId?: number, tableId?: number, bizType?: string) { 
        this['ids'] = ids;
        this['stand_row_id'] = standRowId;
        this['table_id'] = tableId;
        this['biz_type'] = bizType;
    }
    public withIds(ids: Array<number>): LinkAttributeAndElementVO {
        this['ids'] = ids;
        return this;
    }
    public withStandRowId(standRowId: number): LinkAttributeAndElementVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: number  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): number | undefined {
        return this['stand_row_id'];
    }
    public withTableId(tableId: number): LinkAttributeAndElementVO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: number  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): number | undefined {
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
