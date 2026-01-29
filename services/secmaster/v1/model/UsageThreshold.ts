

export class UsageThreshold {
    private 'resource_spec_code'?: string;
    private 'source_resource_spec_code'?: string;
    public threshold?: number;
    public unit?: UsageThresholdUnitEnum | string;
    public enable?: boolean;
    public constructor(threshold?: number, unit?: string) { 
        this['threshold'] = threshold;
        this['unit'] = unit;
    }
    public withResourceSpecCode(resourceSpecCode: string): UsageThreshold {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withSourceResourceSpecCode(sourceResourceSpecCode: string): UsageThreshold {
        this['source_resource_spec_code'] = sourceResourceSpecCode;
        return this;
    }
    public set sourceResourceSpecCode(sourceResourceSpecCode: string  | undefined) {
        this['source_resource_spec_code'] = sourceResourceSpecCode;
    }
    public get sourceResourceSpecCode(): string | undefined {
        return this['source_resource_spec_code'];
    }
    public withThreshold(threshold: number): UsageThreshold {
        this['threshold'] = threshold;
        return this;
    }
    public withUnit(unit: UsageThresholdUnitEnum | string): UsageThreshold {
        this['unit'] = unit;
        return this;
    }
    public withEnable(enable: boolean): UsageThreshold {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UsageThresholdUnitEnum {
    Percent = '%',
    MB = 'MB',
    GB = 'GB'
}
