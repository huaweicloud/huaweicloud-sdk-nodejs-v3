import { ShowJobBuildTimeResultChart } from './ShowJobBuildTimeResultChart';


export class ShowJobBuildTimeResult {
    private 'job_id'?: string;
    private 'avg_build_time'?: number;
    private 'max_build_time'?: number;
    private 'min_build_time'?: number;
    public chart?: Array<ShowJobBuildTimeResultChart>;
    public constructor() { 
    }
    public withJobId(jobId: string): ShowJobBuildTimeResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAvgBuildTime(avgBuildTime: number): ShowJobBuildTimeResult {
        this['avg_build_time'] = avgBuildTime;
        return this;
    }
    public set avgBuildTime(avgBuildTime: number  | undefined) {
        this['avg_build_time'] = avgBuildTime;
    }
    public get avgBuildTime(): number | undefined {
        return this['avg_build_time'];
    }
    public withMaxBuildTime(maxBuildTime: number): ShowJobBuildTimeResult {
        this['max_build_time'] = maxBuildTime;
        return this;
    }
    public set maxBuildTime(maxBuildTime: number  | undefined) {
        this['max_build_time'] = maxBuildTime;
    }
    public get maxBuildTime(): number | undefined {
        return this['max_build_time'];
    }
    public withMinBuildTime(minBuildTime: number): ShowJobBuildTimeResult {
        this['min_build_time'] = minBuildTime;
        return this;
    }
    public set minBuildTime(minBuildTime: number  | undefined) {
        this['min_build_time'] = minBuildTime;
    }
    public get minBuildTime(): number | undefined {
        return this['min_build_time'];
    }
    public withChart(chart: Array<ShowJobBuildTimeResultChart>): ShowJobBuildTimeResult {
        this['chart'] = chart;
        return this;
    }
}