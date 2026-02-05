

export class ResourceUsage {
    public unit?: ResourceUsageUnitEnum | string;
    private 'resource_type_name'?: string;
    private 'source_resource_spec_code'?: string;
    private 'resource_spec_code'?: string;
    private 'source_type'?: string;
    private 'used_percent'?: number;
    public quota?: number;
    public used?: number;
    public free?: number;
    public constructor() { 
    }
    public withUnit(unit: ResourceUsageUnitEnum | string): ResourceUsage {
        this['unit'] = unit;
        return this;
    }
    public withResourceTypeName(resourceTypeName: string): ResourceUsage {
        this['resource_type_name'] = resourceTypeName;
        return this;
    }
    public set resourceTypeName(resourceTypeName: string  | undefined) {
        this['resource_type_name'] = resourceTypeName;
    }
    public get resourceTypeName(): string | undefined {
        return this['resource_type_name'];
    }
    public withSourceResourceSpecCode(sourceResourceSpecCode: string): ResourceUsage {
        this['source_resource_spec_code'] = sourceResourceSpecCode;
        return this;
    }
    public set sourceResourceSpecCode(sourceResourceSpecCode: string  | undefined) {
        this['source_resource_spec_code'] = sourceResourceSpecCode;
    }
    public get sourceResourceSpecCode(): string | undefined {
        return this['source_resource_spec_code'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ResourceUsage {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withSourceType(sourceType: string): ResourceUsage {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withUsedPercent(usedPercent: number): ResourceUsage {
        this['used_percent'] = usedPercent;
        return this;
    }
    public set usedPercent(usedPercent: number  | undefined) {
        this['used_percent'] = usedPercent;
    }
    public get usedPercent(): number | undefined {
        return this['used_percent'];
    }
    public withQuota(quota: number): ResourceUsage {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ResourceUsage {
        this['used'] = used;
        return this;
    }
    public withFree(free: number): ResourceUsage {
        this['free'] = free;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceUsageUnitEnum {
    OPS = 'OPS',
    MB = 'MB',
    GB = 'GB'
}
