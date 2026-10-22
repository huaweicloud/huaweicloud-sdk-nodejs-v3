import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAiAppPolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public createTime?: number;
    public protectStatus?: number;
    public policy?: Policy;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAiAppPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAiAppPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAiAppPolicyResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): UpdateAiAppPolicyResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withProtectStatus(protectStatus: number): UpdateAiAppPolicyResponse {
        this['protectStatus'] = protectStatus;
        return this;
    }
    public withPolicy(policy: Policy): UpdateAiAppPolicyResponse {
        this['policy'] = policy;
        return this;
    }
}