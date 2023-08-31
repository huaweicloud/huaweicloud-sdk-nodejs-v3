import { DimensionInfo } from './DimensionInfo';
import { ExtraInfo } from './ExtraInfo';


export class WidgetMetric {
    public namespace?: string;
    public dimensions?: DimensionInfo;
    private 'metric_name'?: string;
    public alias?: Array<string>;
    private 'extra_info'?: ExtraInfo;
    public constructor() { 
    }
    public withNamespace(namespace: string): WidgetMetric {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: DimensionInfo): WidgetMetric {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): WidgetMetric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withAlias(alias: Array<string>): WidgetMetric {
        this['alias'] = alias;
        return this;
    }
    public withExtraInfo(extraInfo: ExtraInfo): WidgetMetric {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ExtraInfo | undefined {
        return this['extra_info'];
    }
}