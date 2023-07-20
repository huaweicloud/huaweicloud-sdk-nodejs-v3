

export class CloneJobReq {
    private 'job_id'?: string;
    public name?: string;
    private 'task_version'?: CloneJobReqTaskVersionEnum | string;
    public constructor(jobId?: string, name?: string) { 
        this['job_id'] = jobId;
        this['name'] = name;
    }
    public withJobId(jobId: string): CloneJobReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): CloneJobReq {
        this['name'] = name;
        return this;
    }
    public withTaskVersion(taskVersion: CloneJobReqTaskVersionEnum | string): CloneJobReq {
        this['task_version'] = taskVersion;
        return this;
    }
    public set taskVersion(taskVersion: CloneJobReqTaskVersionEnum | string  | undefined) {
        this['task_version'] = taskVersion;
    }
    public get taskVersion(): CloneJobReqTaskVersionEnum | string | undefined {
        return this['task_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloneJobReqTaskVersionEnum {
    E_2_0 = '2.0'
}
