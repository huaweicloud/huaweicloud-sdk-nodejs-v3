

export class Throughput {
    private 'resource_spec_code'?: string;
    public min?: number;
    public max?: number;
    private 'range_by_iops'?: number;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): Throughput {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withMin(min: number): Throughput {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): Throughput {
        this['max'] = max;
        return this;
    }
    public withRangeByIops(rangeByIops: number): Throughput {
        this['range_by_iops'] = rangeByIops;
        return this;
    }
    public set rangeByIops(rangeByIops: number  | undefined) {
        this['range_by_iops'] = rangeByIops;
    }
    public get rangeByIops(): number | undefined {
        return this['range_by_iops'];
    }
}