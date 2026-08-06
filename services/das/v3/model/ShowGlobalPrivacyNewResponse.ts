
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGlobalPrivacyNewResponse extends SdkResponse {
    public policy?: boolean;
    public constructor() { 
        super();
    }
    public withPolicy(policy: boolean): ShowGlobalPrivacyNewResponse {
        this['policy'] = policy;
        return this;
    }
}