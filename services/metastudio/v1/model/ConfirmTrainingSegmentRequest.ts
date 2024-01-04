

export class ConfirmTrainingSegmentRequest {
    private 'job_id'?: string;
    public index?: number;
    public constructor(jobId?: string, index?: number) { 
        this['job_id'] = jobId;
        this['index'] = index;
    }
    public withJobId(jobId: string): ConfirmTrainingSegmentRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withIndex(index: number): ConfirmTrainingSegmentRequest {
        this['index'] = index;
        return this;
    }
}