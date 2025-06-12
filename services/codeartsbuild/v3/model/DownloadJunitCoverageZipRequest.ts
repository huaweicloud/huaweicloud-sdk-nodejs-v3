

export class DownloadJunitCoverageZipRequest {
    private 'job_id'?: string;
    private 'build_no'?: number;
    private 'root_id'?: string;
    public constructor(jobId?: string, buildNo?: number, rootId?: string) { 
        this['job_id'] = jobId;
        this['build_no'] = buildNo;
        this['root_id'] = rootId;
    }
    public withJobId(jobId: string): DownloadJunitCoverageZipRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): DownloadJunitCoverageZipRequest {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withRootId(rootId: string): DownloadJunitCoverageZipRequest {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
}