

export class JobBatchDelete {
    private 'job_id_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withJobIdList(jobIdList: Array<string>): JobBatchDelete {
        this['job_id_list'] = jobIdList;
        return this;
    }
    public set jobIdList(jobIdList: Array<string> | undefined) {
        this['job_id_list'] = jobIdList;
    }
    public get jobIdList() {
        return this['job_id_list'];
    }
}