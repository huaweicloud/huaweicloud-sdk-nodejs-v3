

export class SubtaskDetail {
    public id?: number;
    private 'job_id'?: number;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public digest?: string;
    public status?: string;
    private 'status_text'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(id?: number, jobId?: number, namespace?: string, repository?: string, tag?: string, digest?: string, status?: string, statusText?: string, startTime?: string, endTime?: string) { 
        this['id'] = id;
        this['job_id'] = jobId;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
        this['digest'] = digest;
        this['status'] = status;
        this['status_text'] = statusText;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withId(id: number): SubtaskDetail {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: number): SubtaskDetail {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withNamespace(namespace: string): SubtaskDetail {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): SubtaskDetail {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): SubtaskDetail {
        this['tag'] = tag;
        return this;
    }
    public withDigest(digest: string): SubtaskDetail {
        this['digest'] = digest;
        return this;
    }
    public withStatus(status: string): SubtaskDetail {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): SubtaskDetail {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withStartTime(startTime: string): SubtaskDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): SubtaskDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}