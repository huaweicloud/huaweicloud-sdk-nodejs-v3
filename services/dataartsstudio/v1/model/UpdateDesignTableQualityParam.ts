

export class UpdateDesignTableQualityParam {
    private 'biz_type'?: UpdateDesignTableQualityParamBizTypeEnum | string;
    private 'dirty_out_switch'?: boolean;
    private 'dirty_out_database'?: string;
    private 'dirty_out_prefix'?: string;
    private 'dirty_out_suffix'?: string;
    public constructor() { 
    }
    public withBizType(bizType: UpdateDesignTableQualityParamBizTypeEnum | string): UpdateDesignTableQualityParam {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: UpdateDesignTableQualityParamBizTypeEnum | string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): UpdateDesignTableQualityParamBizTypeEnum | string | undefined {
        return this['biz_type'];
    }
    public withDirtyOutSwitch(dirtyOutSwitch: boolean): UpdateDesignTableQualityParam {
        this['dirty_out_switch'] = dirtyOutSwitch;
        return this;
    }
    public set dirtyOutSwitch(dirtyOutSwitch: boolean  | undefined) {
        this['dirty_out_switch'] = dirtyOutSwitch;
    }
    public get dirtyOutSwitch(): boolean | undefined {
        return this['dirty_out_switch'];
    }
    public withDirtyOutDatabase(dirtyOutDatabase: string): UpdateDesignTableQualityParam {
        this['dirty_out_database'] = dirtyOutDatabase;
        return this;
    }
    public set dirtyOutDatabase(dirtyOutDatabase: string  | undefined) {
        this['dirty_out_database'] = dirtyOutDatabase;
    }
    public get dirtyOutDatabase(): string | undefined {
        return this['dirty_out_database'];
    }
    public withDirtyOutPrefix(dirtyOutPrefix: string): UpdateDesignTableQualityParam {
        this['dirty_out_prefix'] = dirtyOutPrefix;
        return this;
    }
    public set dirtyOutPrefix(dirtyOutPrefix: string  | undefined) {
        this['dirty_out_prefix'] = dirtyOutPrefix;
    }
    public get dirtyOutPrefix(): string | undefined {
        return this['dirty_out_prefix'];
    }
    public withDirtyOutSuffix(dirtyOutSuffix: string): UpdateDesignTableQualityParam {
        this['dirty_out_suffix'] = dirtyOutSuffix;
        return this;
    }
    public set dirtyOutSuffix(dirtyOutSuffix: string  | undefined) {
        this['dirty_out_suffix'] = dirtyOutSuffix;
    }
    public get dirtyOutSuffix(): string | undefined {
        return this['dirty_out_suffix'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDesignTableQualityParamBizTypeEnum {
    TABLE_MODEL = 'TABLE_MODEL',
    AGGREGATION_LOGIC_TABLE = 'AGGREGATION_LOGIC_TABLE',
    FACT_LOGIC_TABLE = 'FACT_LOGIC_TABLE',
    DIMENSION = 'DIMENSION',
    DIMENSION_LOGIC_TABLE = 'DIMENSION_LOGIC_TABLE'
}
