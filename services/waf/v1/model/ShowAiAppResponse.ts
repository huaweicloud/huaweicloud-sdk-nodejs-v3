import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiAppResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public createTime?: number;
    public protectStatus?: number;
    public policy?: Policy;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAiAppResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAiAppResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowAiAppResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): ShowAiAppResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withProtectStatus(protectStatus: number): ShowAiAppResponse {
        this['protectStatus'] = protectStatus;
        return this;
    }
    public withPolicy(policy: Policy): ShowAiAppResponse {
        this['policy'] = policy;
        return this;
    }
}