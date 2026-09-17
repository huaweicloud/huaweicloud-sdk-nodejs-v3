import { InstanceInfoDtoForMetric } from './InstanceInfoDtoForMetric';


export class ShowSingleMetricRequestBody {
    private 'metric_name'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'instance_infos'?: Array<InstanceInfoDtoForMetric>;
    public constructor(metricName?: string, startAt?: number, endAt?: number, instanceInfos?: Array<InstanceInfoDtoForMetric>) { 
        this['metric_name'] = metricName;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['instance_infos'] = instanceInfos;
    }
    public withMetricName(metricName: string): ShowSingleMetricRequestBody {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withStartAt(startAt: number): ShowSingleMetricRequestBody {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowSingleMetricRequestBody {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withInstanceInfos(instanceInfos: Array<InstanceInfoDtoForMetric>): ShowSingleMetricRequestBody {
        this['instance_infos'] = instanceInfos;
        return this;
    }
    public set instanceInfos(instanceInfos: Array<InstanceInfoDtoForMetric>  | undefined) {
        this['instance_infos'] = instanceInfos;
    }
    public get instanceInfos(): Array<InstanceInfoDtoForMetric> | undefined {
        return this['instance_infos'];
    }
}