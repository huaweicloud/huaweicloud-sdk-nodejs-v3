
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PutGlobalPrivacyNewResponse extends SdkResponse {
    public policy?: boolean;
    public constructor() { 
        super();
    }
    public withPolicy(policy: boolean): PutGlobalPrivacyNewResponse {
        this['policy'] = policy;
        return this;
    }
}