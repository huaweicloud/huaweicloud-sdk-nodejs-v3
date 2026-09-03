import { FtMetric } from './FtMetric';


export class FtMetricData {
    private 'format_version'?: string;
    public timestamp?: string;
    public metrics?: Array<FtMetric>;
    public constructor(formatVersion?: string, metrics?: Array<FtMetric>) { 
        this['format_version'] = formatVersion;
        this['metrics'] = metrics;
    }
    public withFormatVersion(formatVersion: string): FtMetricData {
        this['format_version'] = formatVersion;
        return this;
    }
    public set formatVersion(formatVersion: string  | undefined) {
        this['format_version'] = formatVersion;
    }
    public get formatVersion(): string | undefined {
        return this['format_version'];
    }
    public withTimestamp(timestamp: string): FtMetricData {
        this['timestamp'] = timestamp;
        return this;
    }
    public withMetrics(metrics: Array<FtMetric>): FtMetricData {
        this['metrics'] = metrics;
        return this;
    }
}