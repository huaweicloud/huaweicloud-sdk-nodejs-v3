import { MetricFormat } from './MetricFormat';
import { ShowMetricResultResponseBodyResult } from './ShowMetricResultResponseBodyResult';


export class ShowMetricResultResponseBody {
    private 'metric_id'?: string;
    public result?: ShowMetricResultResponseBodyResult;
    private 'metric_format'?: Array<MetricFormat>;
    private 'log_msg'?: string;
    public status?: ShowMetricResultResponseBodyStatusEnum | string;
    public constructor(metricId?: string, result?: ShowMetricResultResponseBodyResult) { 
        this['metric_id'] = metricId;
        this['result'] = result;
    }
    public withMetricId(metricId: string): ShowMetricResultResponseBody {
        this['metric_id'] = metricId;
        return this;
    }
    public set metricId(metricId: string  | undefined) {
        this['metric_id'] = metricId;
    }
    public get metricId(): string | undefined {
        return this['metric_id'];
    }
    public withResult(result: ShowMetricResultResponseBodyResult): ShowMetricResultResponseBody {
        this['result'] = result;
        return this;
    }
    public withMetricFormat(metricFormat: Array<MetricFormat>): ShowMetricResultResponseBody {
        this['metric_format'] = metricFormat;
        return this;
    }
    public set metricFormat(metricFormat: Array<MetricFormat>  | undefined) {
        this['metric_format'] = metricFormat;
    }
    public get metricFormat(): Array<MetricFormat> | undefined {
        return this['metric_format'];
    }
    public withLogMsg(logMsg: string): ShowMetricResultResponseBody {
        this['log_msg'] = logMsg;
        return this;
    }
    public set logMsg(logMsg: string  | undefined) {
        this['log_msg'] = logMsg;
    }
    public get logMsg(): string | undefined {
        return this['log_msg'];
    }
    public withStatus(status: ShowMetricResultResponseBodyStatusEnum | string): ShowMetricResultResponseBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMetricResultResponseBodyStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    FALLBACK = 'FALLBACK'
}
