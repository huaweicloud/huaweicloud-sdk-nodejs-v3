
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAiAppResponse extends SdkResponse {
    public appId?: string;
    public name?: string;
    public description?: string;
    public updateTime?: number;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateAiAppResponse {
        this['appId'] = appId;
        return this;
    }
    public withName(name: string): UpdateAiAppResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAiAppResponse {
        this['description'] = description;
        return this;
    }
    public withUpdateTime(updateTime: number): UpdateAiAppResponse {
        this['updateTime'] = updateTime;
        return this;
    }
}