

export class ShowActionIInfoRequest {
    private 'job_id'?: string;
    private 'build_no'?: number;
    private 'start_offset'?: number;
    private 'end_offset'?: number;
    public sort?: string;
    public constructor(jobId?: string, buildNo?: number, startOffset?: number, endOffset?: number) { 
        this['job_id'] = jobId;
        this['build_no'] = buildNo;
        this['start_offset'] = startOffset;
        this['end_offset'] = endOffset;
    }
    public withJobId(jobId: string): ShowActionIInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): ShowActionIInfoRequest {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withStartOffset(startOffset: number): ShowActionIInfoRequest {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: number  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): number | undefined {
        return this['start_offset'];
    }
    public withEndOffset(endOffset: number): ShowActionIInfoRequest {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: number  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): number | undefined {
        return this['end_offset'];
    }
    public withSort(sort: string): ShowActionIInfoRequest {
        this['sort'] = sort;
        return this;
    }
}