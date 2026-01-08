

export class Iops {
    private 'resource_spec_code'?: string;
    public min?: number;
    public max?: number;
    private 'range_by_size'?: number;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): Iops {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withMin(min: number): Iops {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): Iops {
        this['max'] = max;
        return this;
    }
    public withRangeBySize(rangeBySize: number): Iops {
        this['range_by_size'] = rangeBySize;
        return this;
    }
    public set rangeBySize(rangeBySize: number  | undefined) {
        this['range_by_size'] = rangeBySize;
    }
    public get rangeBySize(): number | undefined {
        return this['range_by_size'];
    }
}