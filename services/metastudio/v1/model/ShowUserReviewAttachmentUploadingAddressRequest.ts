

export class ShowUserReviewAttachmentUploadingAddressRequest {
    private 'job_id'?: string;
    private 'start_number'?: number;
    private 'end_number'?: number;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowUserReviewAttachmentUploadingAddressRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStartNumber(startNumber: number): ShowUserReviewAttachmentUploadingAddressRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withEndNumber(endNumber: number): ShowUserReviewAttachmentUploadingAddressRequest {
        this['end_number'] = endNumber;
        return this;
    }
    public set endNumber(endNumber: number  | undefined) {
        this['end_number'] = endNumber;
    }
    public get endNumber(): number | undefined {
        return this['end_number'];
    }
}