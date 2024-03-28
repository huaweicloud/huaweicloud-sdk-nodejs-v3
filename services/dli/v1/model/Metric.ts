import { FlinkJobMetricInfo } from './FlinkJobMetricInfo';


export class Metric {
    public sources?: Array<FlinkJobMetricInfo>;
    public sinks?: Array<FlinkJobMetricInfo>;
    private 'total_read_rate'?: number;
    private 'total_write_rate'?: number;
    public constructor() { 
    }
    public withSources(sources: Array<FlinkJobMetricInfo>): Metric {
        this['sources'] = sources;
        return this;
    }
    public withSinks(sinks: Array<FlinkJobMetricInfo>): Metric {
        this['sinks'] = sinks;
        return this;
    }
    public withTotalReadRate(totalReadRate: number): Metric {
        this['total_read_rate'] = totalReadRate;
        return this;
    }
    public set totalReadRate(totalReadRate: number  | undefined) {
        this['total_read_rate'] = totalReadRate;
    }
    public get totalReadRate(): number | undefined {
        return this['total_read_rate'];
    }
    public withTotalWriteRate(totalWriteRate: number): Metric {
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