

export class Subtask {
    public id?: number;
    private 'job_id'?: number;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public digest?: string;
    public action?: string;
    public status?: string;
    private 'status_text'?: string;
    private 'op_time'?: string;
    public constructor(id?: number, jobId?: number, namespace?: string, repository?: string, tag?: string, digest?: string, action?: string, status?: string, statusText?: string, opTime?: string) { 
        this['id'] = id;
        this['job_id'] = jobId;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
        this['digest'] = digest;
        this['action'] = action;
        this['status'] = status;
        this['status_text'] = statusText;
        this['op_time'] = opTime;
    }
    public withId(id: number): Subtask {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: number): Subtask {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withNamespace(namespace: string): Subtask {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): Subtask {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): Subtask {
        this['tag'] = tag;
        return this;
    }
    public withDigest(digest: string): Subtask {
        this['digest'] = digest;
        return this;
    }
    public withAction(action: string): Subtask {
        this['action'] = action;
        return this;
    }
    public withStatus(status: string): Subtask {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): Subtask {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withOpTime(opTime: string): Subtask {
        this['op_time'] = opTime;
        return this;
    }
    public set opTime(opTime: string  | undefined) {
        this['op_time'] = opTime;
    }
    public get opTime(): string | undefined {
        return this['op_time'];
    }
}