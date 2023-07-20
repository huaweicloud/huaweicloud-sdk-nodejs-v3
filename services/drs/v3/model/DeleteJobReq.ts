

export class DeleteJobReq {
    private 'delete_type'?: DeleteJobReqDeleteTypeEnum | string;
    private 'job_id'?: string;
    public constructor(deleteType?: string, jobId?: string) { 
        this['delete_type'] = deleteType;
        this['job_id'] = jobId;
    }
    public withDeleteType(deleteType: DeleteJobReqDeleteTypeEnum | string): DeleteJobReq {
        this['delete_type'] = deleteType;
        return this;
    }
    public set deleteType(deleteType: DeleteJobReqDeleteTypeEnum | string  | undefined) {
        this['delete_type'] = deleteType;
    }
    public get deleteType(): DeleteJobReqDeleteTypeEnum | string | undefined {
        return this['delete_type'];
    }
    public withJobId(jobId: string): DeleteJobReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
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
