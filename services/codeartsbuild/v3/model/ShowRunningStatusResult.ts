

export class ShowRunningStatusResult {
    private 'last_job_id'?: string;
    private 'last_build_no'?: string;
    private 'last_build_status'?: string;
    private 'is_running'?: boolean;
    public constructor() { 
    }
    public withLastJobId(lastJobId: string): ShowRunningStatusResult {
        this['last_job_id'] = lastJobId;
        return this;
    }
    public set lastJobId(lastJobId: string  | undefined) {
        this['last_job_id'] = lastJobId;
    }
    public get lastJobId(): string | undefined {
        return this['last_job_id'];
    }
    public withLastBuildNo(lastBuildNo: string): ShowRunningStatusResult {
        this['last_build_no'] = lastBuildNo;
        return this;
    }
    public set lastBuildNo(lastBuildNo: string  | undefined) {
        this['last_build_no'] = lastBuildNo;
    }
    public get lastBuildNo(): string | undefined {
        return this['last_build_no'];
    }
    public withLastBuildStatus(lastBuildStatus: string): ShowRunningStatusResult {
        this['last_build_status'] = lastBuildStatus;
        return this;
    }
    public set lastBuildStatus(lastBuildStatus: string  | undefined) {
        this['last_build_status'] = lastBuildStatus;
    }
    public get lastBuildStatus(): string | undefined {
        return this['last_build_status'];
    }
    public withIsRunning(isRunning: boolean): ShowRunningStatusResult {
        this['is_running'] = isRunning;
        return this;
    }
    public set isRunning(isRunning: boolean  | undefined) {
        this['is_running'] = isRunning;
    }
    public get isRunning(): boolean | undefined {
        return this['is_running'];
    }
}