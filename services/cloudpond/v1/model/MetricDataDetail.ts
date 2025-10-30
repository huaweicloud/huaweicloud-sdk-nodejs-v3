import { MetricDataDetailDimension } from './MetricDataDetailDimension';


export class MetricDataDetail {
    public name?: string;
    public value?: number;
    private 'read_at'?: Date;
    public dimension?: MetricDataDetailDimension;
    public constructor() { 
    }
    public withName(name: string): MetricDataDetail {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): MetricDataDetail {
        this['value'] = value;
        return this;
    }
    public withReadAt(readAt: Date): MetricDataDetail {
        this['read_at'] = readAt;
        return this;
    }
    public set readAt(readAt: Date  | undefined) {
        this['read_at'] = readAt;
    }
    public get readAt(): Date | undefined {
        return this['read_at'];
    }
    public withDimension(dimension: MetricDataDetailDimension): MetricDataDetail {
        this['dimension'] = dimension;
        return this;
    }
}