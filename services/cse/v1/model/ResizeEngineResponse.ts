
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'job_id'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ResizeEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResizeEngineResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): ResizeEngineResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
}