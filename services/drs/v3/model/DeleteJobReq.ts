

export class DeleteJobReq {
    private 'delete_type': DeleteJobReqDeleteTypeEnum | undefined;
    private 'job_id': string | undefined;
    public constructor(deleteType?: any, jobId?: any) { 
        this['delete_type'] = deleteType;
        this['job_id'] = jobId;
    }
    public withDeleteType(deleteType: DeleteJobReqDeleteTypeEnum): DeleteJobReq {
        this['delete_type'] = deleteType;
        return this;
    }
    public set deleteType(deleteType: DeleteJobReqDeleteTypeEnum | undefined) {
        this['delete_type'] = deleteType;
    }
    public get deleteType() {
        return this['delete_type'];
    }
    public withJobId(jobId: string): DeleteJobReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteJobReqDeleteTypeEnum {
    TERMINATE = 'terminate',
    FORCE_TERMINATE = 'force_terminate',
    DELETE = 'delete'
}
