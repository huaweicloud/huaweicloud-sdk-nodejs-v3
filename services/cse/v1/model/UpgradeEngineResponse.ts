
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public jobId?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpgradeEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpgradeEngineResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): UpgradeEngineResponse {
        this['jobId'] = jobId;
        return this;
    }
}