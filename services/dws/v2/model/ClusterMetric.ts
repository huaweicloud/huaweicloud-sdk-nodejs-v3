import { SimpleFieldDto } from './SimpleFieldDto';


export class ClusterMetric {
    public scope?: string;
    public fields?: Array<SimpleFieldDto>;
    private 'metric_name'?: string;
    private 'collect_rate'?: number;
    private 'collect_range'?: Array<string>;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withScope(scope: string): ClusterMetric {
        this['scope'] = scope;
        return this;
    }
    public withFields(fields: Array<SimpleFieldDto>): ClusterMetric {
        this['fields'] = fields;
        return this;
    }
    public withMetricName(metricName: string): ClusterMetric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withCollectRate(collectRate: number): ClusterMetric {
        this['collect_rate'] = collectRate;
        return this;
    }
    public set collectRate(collectRate: number  | undefined) {
        this['collect_rate'] = collectRate;
    }
    public get collectRate(): number | undefined {
        return this['collect_rate'];
    }
    public withCollectRange(collectRange: Array<string>): ClusterMetric {
        this['collect_range'] = collectRange;
        return this;
    }
    public set collectRange(collectRange: Array<string>  | undefined) {
        this['collect_range'] = collectRange;
    }
    public get collectRange(): Array<string> | undefined {
        return this['collect_range'];
    }
    public withCreateTime(createTime: string): ClusterMetric {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}