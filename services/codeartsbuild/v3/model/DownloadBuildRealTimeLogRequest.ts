

export class DownloadBuildRealTimeLogRequest {
    private 'job_id'?: string;
    private 'build_no'?: number;
    private 'start_offset'?: number;
    private 'end_offset'?: number;
    public sort?: string;
    public size?: string;
    public constructor(jobId?: string, buildNo?: number, size?: string) { 
        this['job_id'] = jobId;
        this['build_no'] = buildNo;
        this['size'] = size;
    }
    public withJobId(jobId: string): DownloadBuildRealTimeLogRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): DownloadBuildRealTimeLogRequest {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withStartOffset(startOffset: number): DownloadBuildRealTimeLogRequest {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: number  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): number | undefined {
        return this['start_offset'];
    }
    public withEndOffset(endOffset: number): DownloadBuildRealTimeLogRequest {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: number  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): number | undefined {
        return this['end_offset'];
    }
    public withSort(sort: string): DownloadBuildRealTimeLogRequest {
        this['sort'] = sort;
        return this;
    }
    public withSize(size: string): DownloadBuildRealTimeLogRequest {
        this['size'] = size;
        return this;
    }
}