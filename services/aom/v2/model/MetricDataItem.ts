import { MetricItemInfo } from './MetricItemInfo';
import { ValueData } from './ValueData';


export class MetricDataItem {
    private 'collect_time'?: number;
    public metric?: MetricItemInfo;
    public values?: Array<ValueData>;
    public constructor(collectTime?: number, metric?: MetricItemInfo, values?: Array<ValueData>) { 
        this['collect_time'] = collectTime;
        this['metric'] = metric;
        this['values'] = values;
    }
    public withCollectTime(collectTime: number): MetricDataItem {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withMetric(metric: MetricItemInfo): MetricDataItem {
        this['metric'] = metric;
        return this;
    }
    public withValues(values: Array<ValueData>): MetricDataItem {
        this['values'] = values;
        return this;
    }
}