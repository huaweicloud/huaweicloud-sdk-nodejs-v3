
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyJobResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'is_clone_job'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CopyJobResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CopyJobResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CopyJobResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CopyJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withIsCloneJob(isCloneJob: string): CopyJobResponse {
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