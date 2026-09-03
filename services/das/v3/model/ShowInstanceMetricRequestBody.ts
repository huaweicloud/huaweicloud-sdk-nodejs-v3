import { InstanceInfoForMetric } from './InstanceInfoForMetric';


export class ShowInstanceMetricRequestBody {
    private 'engine_type'?: string;
    public infos?: Array<InstanceInfoForMetric>;
    private 'metric_names'?: Array<string>;
    public constructor(engineType?: string, infos?: Array<InstanceInfoForMetric>, metricNames?: Array<string>) { 
        this['engine_type'] = engineType;
        this['infos'] = infos;
        this['metric_names'] = metricNames;
    }
    public withEngineType(engineType: string): ShowInstanceMetricRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInfos(infos: Array<InstanceInfoForMetric>): ShowInstanceMetricRequestBody {
        this['infos'] = infos;
        return this;
    }
    public withMetricNames(metricNames: Array<string>): ShowInstanceMetricRequestBody {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
}