

export class DisableNoticeRequest {
    private 'job_id'?: string;
    private 'notice_type'?: string;
    public constructor(jobId?: string, noticeType?: string) { 
        this['job_id'] = jobId;
        this['notice_type'] = noticeType;
    }
    public withJobId(jobId: string): DisableNoticeRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withNoticeType(noticeType: string): DisableNoticeRequest {
        this['notice_type'] = noticeType;
        return this;
    }
    public set noticeType(noticeType: string  | undefined) {
        this['notice_type'] = noticeType;
    }
    public get noticeType(): string | undefined {
        return this['notice_type'];
    }
}