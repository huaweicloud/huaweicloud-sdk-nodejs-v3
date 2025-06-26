

export class Task {
    public id?: number;
    private 'execution_id'?: number;
    public repository?: string;
    private 'job_id'?: string;
    public status?: string;
    private 'status_code'?: number;
    private 'status_revision'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public total?: number;
    public retained?: number;
    public constructor(id?: number, executionId?: number, repository?: string, jobId?: string, status?: string, statusCode?: number, statusRevision?: number, startTime?: string, endTime?: string, total?: number, retained?: number) { 
        this['id'] = id;
        this['execution_id'] = executionId;
        this['repository'] = repository;
        this['job_id'] = jobId;
        this['status'] = status;
        this['status_code'] = statusCode;
        this['status_revision'] = statusRevision;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['total'] = total;
        this['retained'] = retained;
    }
    public withId(id: number): Task {
        this['id'] = id;
        return this;
    }
    public withExecutionId(executionId: number): Task {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
    public withRepository(repository: string): Task {
        this['repository'] = repository;
        return this;
    }
    public withJobId(jobId: string): Task {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): Task {
        this['status'] = status;
        return this;
    }
    public withStatusCode(statusCode: number): Task {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withStatusRevision(statusRevision: number): Task {
        this['status_revision'] = statusRevision;
        return this;
    }
    public set statusRevision(statusRevision: number  | undefined) {
        this['status_revision'] = statusRevision;
    }
    public get statusRevision(): number | undefined {
        return this['status_revision'];
    }
    public withStartTime(startTime: string): Task {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): Task {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTotal(total: number): Task {
        this['total'] = total;
        return this;
    }
    public withRetained(retained: number): Task {
        this['retained'] = retained;
        return this;
    }
}