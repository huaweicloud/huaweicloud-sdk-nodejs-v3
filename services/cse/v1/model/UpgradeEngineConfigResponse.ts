
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeEngineConfigResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public jobId?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpgradeEngineConfigResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpgradeEngineConfigResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): UpgradeEngineConfigResponse {
        this['jobId'] = jobId;
        return this;
    }
}