

export class DeleteSubJobsReq {
    private 'job_ids'?: Array<string>;
    private 'delete_by_status'?: string;
    public constructor() { 
    }
    public withJobIds(jobIds: Array<string>): DeleteSubJobsReq {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
    public withDeleteByStatus(deleteByStatus: string): DeleteSubJobsReq {
        this['delete_by_status'] = deleteByStatus;
        return this;
    }
    public set deleteByStatus(deleteByStatus: string  | undefined) {
        this['delete_by_status'] = deleteByStatus;
    }
    public get deleteByStatus(): string | undefined {
        return this['delete_by_status'];
    }
}