

export class DownloadRealTimeLogRequest {
    private 'job_id'?: string;
    private 'build_no'?: number;
    public offset?: number;
    public length?: number;
    public constructor(jobId?: string, buildNo?: number, offset?: number) { 
        this['job_id'] = jobId;
        this['build_no'] = buildNo;
        this['offset'] = offset;
    }
    public withJobId(jobId: string): DownloadRealTimeLogRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): DownloadRealTimeLogRequest {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withOffset(offset: number): DownloadRealTimeLogRequest {
        this['offset'] = offset;
        return this;
    }
    public withLength(length: number): DownloadRealTimeLogRequest {
        this['length'] = length;
        return this;
    }
}