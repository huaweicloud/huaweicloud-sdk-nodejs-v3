

export class CreateJobResp {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'is_clone_job'?: string;
    public constructor(id?: string, name?: string, status?: string, createTime?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['create_time'] = createTime;
    }
    public withId(id: string): CreateJobResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateJobResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateJobResp {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CreateJobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withIsCloneJob(isCloneJob: string): CreateJobResp {
        this['is_clone_job'] = isCloneJob;
        return this;
    }
    public set isCloneJob(isCloneJob: string  | undefined) {
        this['is_clone_job'] = isCloneJob;
    }
    public get isCloneJob(): string | undefined {
        return this['is_clone_job'];
    }
}