

export class JobResp {
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'job_type'?: JobRespJobTypeEnum | string;
    private 'last_instance_end_time'?: number;
    private 'last_instance_status'?: string;
    private 'last_update_time'?: number;
    private 'last_update_user'?: string;
    public name?: string;
    public owner?: string;
    public path?: string;
    public priority?: number;
    private 'single_node_job_flag'?: boolean;
    private 'start_time'?: number;
    public status?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: number): JobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): JobResp {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withJobType(jobType: JobRespJobTypeEnum | string): JobResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobRespJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobRespJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withLastInstanceEndTime(lastInstanceEndTime: number): JobResp {
        this['last_instance_end_time'] = lastInstanceEndTime;
        return this;
    }
    public set lastInstanceEndTime(lastInstanceEndTime: number  | undefined) {
        this['last_instance_end_time'] = lastInstanceEndTime;
    }
    public get lastInstanceEndTime(): number | undefined {
        return this['last_instance_end_time'];
    }
    public withLastInstanceStatus(lastInstanceStatus: string): JobResp {
        this['last_instance_status'] = lastInstanceStatus;
        return this;
    }
    public set lastInstanceStatus(lastInstanceStatus: string  | undefined) {
        this['last_instance_status'] = lastInstanceStatus;
    }
    public get lastInstanceStatus(): string | undefined {
        return this['last_instance_status'];
    }
    public withLastUpdateTime(lastUpdateTime: number): JobResp {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withLastUpdateUser(lastUpdateUser: string): JobResp {
        this['last_update_user'] = lastUpdateUser;
        return this;
    }
    public set lastUpdateUser(lastUpdateUser: string  | undefined) {
        this['last_update_user'] = lastUpdateUser;
    }
    public get lastUpdateUser(): string | undefined {
        return this['last_update_user'];
    }
    public withName(name: string): JobResp {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): JobResp {
        this['owner'] = owner;
        return this;
    }
    public withPath(path: string): JobResp {
        this['path'] = path;
        return this;
    }
    public withPriority(priority: number): JobResp {
        this['priority'] = priority;
        return this;
    }
    public withSingleNodeJobFlag(singleNodeJobFlag: boolean): JobResp {
        this['single_node_job_flag'] = singleNodeJobFlag;
        return this;
    }
    public set singleNodeJobFlag(singleNodeJobFlag: boolean  | undefined) {
        this['single_node_job_flag'] = singleNodeJobFlag;
    }
    public get singleNodeJobFlag(): boolean | undefined {
        return this['single_node_job_flag'];
    }
    public withStartTime(startTime: number): JobResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withStatus(status: string): JobResp {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobRespJobTypeEnum {
    REAL_TIME = 'REAL_TIME',
    BATCH = 'BATCH'
}
