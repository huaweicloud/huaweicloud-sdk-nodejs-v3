
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateJobResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'is_clone_job'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateJobResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateJobResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateJobResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CreateJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withIsCloneJob(isCloneJob: string): CreateJobResponse {
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