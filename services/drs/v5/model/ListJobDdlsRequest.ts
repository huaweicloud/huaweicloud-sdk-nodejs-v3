

export class ListJobDdlsRequest {
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    private 'start_seq_no'?: number;
    private 'end_seq_no'?: number;
    public status?: ListJobDdlsRequestStatusEnum | number;
    private 'job_id'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: string): ListJobDdlsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListJobDdlsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobDdlsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartSeqNo(startSeqNo: number): ListJobDdlsRequest {
        this['start_seq_no'] = startSeqNo;
        return this;
    }
    public set startSeqNo(startSeqNo: number  | undefined) {
        this['start_seq_no'] = startSeqNo;
    }
    public get startSeqNo(): number | undefined {
        return this['start_seq_no'];
    }
    public withEndSeqNo(endSeqNo: number): ListJobDdlsRequest {
        this['end_seq_no'] = endSeqNo;
        return this;
    }
    public set endSeqNo(endSeqNo: number  | undefined) {
        this['end_seq_no'] = endSeqNo;
    }
    public get endSeqNo(): number | undefined {
        return this['end_seq_no'];
    }
    public withStatus(status: ListJobDdlsRequestStatusEnum | number): ListJobDdlsRequest {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ListJobDdlsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListJobDdlsRequestStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
