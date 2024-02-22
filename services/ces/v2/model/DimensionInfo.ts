

export class DimensionInfo {
    public name?: string;
    private 'filter_type'?: DimensionInfoFilterTypeEnum | string;
    public values?: Array<string>;
    public constructor(name?: string, filterType?: string) { 
        this['name'] = name;
        this['filter_type'] = filterType;
    }
    public withName(name: string): DimensionInfo {
        this['name'] = name;
        return this;
    }
    public withFilterType(filterType: DimensionInfoFilterTypeEnum | string): DimensionInfo {
        this['filter_type'] = filterType;
        return this;
    }
    public set filterType(filterType: DimensionInfoFilterTypeEnum | string  | undefined) {
        this['filter_type'] = filterType;
    }
    public get filterType(): DimensionInfoFilterTypeEnum | string | undefined {
        return this['filter_type'];
    }
    public withValues(values: Array<string>): DimensionInfo {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DimensionInfoFilterTypeEnum {
    ALL_INSTANCES = 'all_instances',
    SPECIFIC_INSTANCES = 'specific_instances'
}
