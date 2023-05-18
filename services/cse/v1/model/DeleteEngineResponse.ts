
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public jobId?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteEngineResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): DeleteEngineResponse {
        this['jobId'] = jobId;
        return this;
    }
}