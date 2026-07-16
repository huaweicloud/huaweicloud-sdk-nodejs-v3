

export class ServerJobDeleteRequest {
    private 'job_ids'?: Array<string>;
    public constructor() { 
    }
    public withJobIds(jobIds: Array<string>): ServerJobDeleteRequest {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
}