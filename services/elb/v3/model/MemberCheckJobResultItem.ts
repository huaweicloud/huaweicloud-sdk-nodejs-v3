

export class MemberCheckJobResultItem {
    public name?: string;
    public reason?: string;
    public severity?: string;
    public subject?: string;
    private 'job_id'?: string;
    private 'reason_template'?: string;
    private 'reason_params'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): MemberCheckJobResultItem {
        this['name'] = name;
        return this;
    }
    public withReason(reason: string): MemberCheckJobResultItem {
        this['reason'] = reason;
        return this;
    }
    public withSeverity(severity: string): MemberCheckJobResultItem {
        this['severity'] = severity;
        return this;
    }
    public withSubject(subject: string): MemberCheckJobResultItem {
        this['subject'] = subject;
        return this;
    }
    public withJobId(jobId: string): MemberCheckJobResultItem {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withReasonTemplate(reasonTemplate: string): MemberCheckJobResultItem {
        this['reason_template'] = reasonTemplate;
        return this;
    }
    public set reasonTemplate(reasonTemplate: string  | undefined) {
        this['reason_template'] = reasonTemplate;
    }
    public get reasonTemplate(): string | undefined {
        return this['reason_template'];
    }
    public withReasonParams(reasonParams: Array<string>): MemberCheckJobResultItem {
        this['reason_params'] = reasonParams;
        return this;
    }
    public set reasonParams(reasonParams: Array<string>  | undefined) {
        this['reason_params'] = reasonParams;
    }
    public get reasonParams(): Array<string> | undefined {
        return this['reason_params'];
    }
}