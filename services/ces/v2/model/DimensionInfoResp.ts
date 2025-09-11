

export class DimensionInfoResp {
    public name?: string;
    private 'filter_type'?: DimensionInfoRespFilterTypeEnum | string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): DimensionInfoResp {
        this['name'] = name;
        return this;
    }
    public withFilterType(filterType: DimensionInfoRespFilterTypeEnum | string): DimensionInfoResp {
        this['filter_type'] = filterType;
        return this;
    }
    public set filterType(filterType: DimensionInfoRespFilterTypeEnum | string  | undefined) {
        this['filter_type'] = filterType;
    }
    public get filterType(): DimensionInfoRespFilterTypeEnum | string | undefined {
        return this['filter_type'];
    }
    public withValues(values: Array<string>): DimensionInfoResp {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DimensionInfoRespFilterTypeEnum {
    ALL_INSTANCES = 'all_instances',
    SPECIFIC_INSTANCES = 'specific_instances'
}
