
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public jobId?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateEngineResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): CreateEngineResponse {
        this['jobId'] = jobId;
        return this;
    }
}