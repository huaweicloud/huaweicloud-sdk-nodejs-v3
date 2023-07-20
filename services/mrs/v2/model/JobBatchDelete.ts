

export class JobBatchDelete {
    private 'job_id_list'?: Array<string>;
    public constructor() { 
    }
    public withJobIdList(jobIdList: Array<string>): JobBatchDelete {
        this['job_id_list'] = jobIdList;
        return this;
    }
    public set jobIdList(jobIdList: Array<string>  | undefined) {
        this['job_id_list'] = jobIdList;
    }
    public get jobIdList(): Array<string> | undefined {
        return this['job_id_list'];
    }
}