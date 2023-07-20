import { ShowJobMonitorInfoRespPayloadJobsMetricsSources } from './ShowJobMonitorInfoRespPayloadJobsMetricsSources';


export class ShowJobMonitorInfoRespPayloadJobsMetrics {
    public sources?: Array<ShowJobMonitorInfoRespPayloadJobsMetricsSources>;
    public sinks?: Array<ShowJobMonitorInfoRespPayloadJobsMetricsSources>;
    private 'total_read_rate'?: number;
    private 'total_write_rate'?: number;
    public constructor() { 
    }
    public withSources(sources: Array<ShowJobMonitorInfoRespPayloadJobsMetricsSources>): ShowJobMonitorInfoRespPayloadJobsMetrics {
        this['sources'] = sources;
        return this;
    }
    public withSinks(sinks: Array<ShowJobMonitorInfoRespPayloadJobsMetricsSources>): ShowJobMonitorInfoRespPayloadJobsMetrics {
        this['sinks'] = sinks;
        return this;
    }
    public withTotalReadRate(totalReadRate: number): ShowJobMonitorInfoRespPayloadJobsMetrics {
        this['total_read_rate'] = totalReadRate;
        return this;
    }
    public set totalReadRate(totalReadRate: number  | undefined) {
        this['total_read_rate'] = totalReadRate;
    }
    public get totalReadRate(): number | undefined {
        return this['total_read_rate'];
    }
    public withTotalWriteRate(totalWriteRate: number): ShowJobMonitorInfoRespPayloadJobsMetrics {
        this['total_write_rate'] = totalWriteRate;
        return this;
    }
    public set totalWriteRate(totalWriteRate: number  | undefined) {
        this['total_write_rate'] = totalWriteRate;
    }
    public get totalWriteRate(): number | undefined {
        return this['total_write_rate'];
    }
}