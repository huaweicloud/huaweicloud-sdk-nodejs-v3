

export class CheckWebhookUrlRequestBody {
    private 'job_id'?: string;
    private 'notice_type'?: string;
    private 'webhook_url'?: string;
    public constructor(jobId?: string, noticeType?: string, webhookUrl?: string) { 
        this['job_id'] = jobId;
        this['notice_type'] = noticeType;
        this['webhook_url'] = webhookUrl;
    }
    public withJobId(jobId: string): CheckWebhookUrlRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withNoticeType(noticeType: string): CheckWebhookUrlRequestBody {
        this['notice_type'] = noticeType;
        return this;
    }
    public set noticeType(noticeType: string  | undefined) {
        this['notice_type'] = noticeType;
    }
    public get noticeType(): string | undefined {
        return this['notice_type'];
    }
    public withWebhookUrl(webhookUrl: string): CheckWebhookUrlRequestBody {
        this['webhook_url'] = webhookUrl;
        return this;
    }
    public set webhookUrl(webhookUrl: string  | undefined) {
        this['webhook_url'] = webhookUrl;
    }
    public get webhookUrl(): string | undefined {
        return this['webhook_url'];
    }
}