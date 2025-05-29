

export class ShowJobConfigDiffRequest {
    private 'job_id'?: string;
    private 'revisedl_no'?: string;
    private 'original_no'?: string;
    public constructor(jobId?: string, revisedlNo?: string, originalNo?: string) { 
        this['job_id'] = jobId;
        this['revisedl_no'] = revisedlNo;
        this['original_no'] = originalNo;
    }
    public withJobId(jobId: string): ShowJobConfigDiffRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRevisedlNo(revisedlNo: string): ShowJobConfigDiffRequest {
        this['revisedl_no'] = revisedlNo;
        return this;
    }
    public set revisedlNo(revisedlNo: string  | undefined) {
        this['revisedl_no'] = revisedlNo;
    }
    public get revisedlNo(): string | undefined {
        return this['revisedl_no'];
    }
    public withOriginalNo(originalNo: string): ShowJobConfigDiffRequest {
        this['original_no'] = originalNo;
        return this;
    }
    public set originalNo(originalNo: string  | undefined) {
        this['original_no'] = originalNo;
    }
    public get originalNo(): string | undefined {
        return this['original_no'];
    }
}