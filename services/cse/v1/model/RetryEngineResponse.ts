
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public jobId?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): RetryEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RetryEngineResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): RetryEngineResponse {
        this['jobId'] = jobId;
        return this;
    }
}