

export class Job {
    public id?: number;
    private 'policy_id'?: number;
    private 'event_type'?: string;
    private 'notify_type'?: string;
    public status?: string;
    private 'status_text'?: string;
    private 'job_detail'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(id?: number, policyId?: number, eventType?: string, notifyType?: string, status?: string, statusText?: string, jobDetail?: string, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['policy_id'] = policyId;
        this['event_type'] = eventType;
        this['notify_type'] = notifyType;
        this['status'] = status;
        this['status_text'] = statusText;
        this['job_detail'] = jobDetail;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: number): Job {
        this['id'] = id;
        return this;
    }
    public withPolicyId(policyId: number): Job {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withEventType(eventType: string): Job {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withNotifyType(notifyType: string): Job {
        this['notify_type'] = notifyType;
        return this;
    }
    public set notifyType(notifyType: string  | undefined) {
        this['notify_type'] = notifyType;
    }
    public get notifyType(): string | undefined {
        return this['notify_type'];
    }
    public withStatus(status: string): Job {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): Job {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withJobDetail(jobDetail: string): Job {
        this['job_detail'] = jobDetail;
        return this;
    }
    public set jobDetail(jobDetail: string  | undefined) {
        this['job_detail'] = jobDetail;
    }
    public get jobDetail(): string | undefined {
        return this['job_detail'];
    }
    public withCreatedAt(createdAt: string): Job {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Job {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}