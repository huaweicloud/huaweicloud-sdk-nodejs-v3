
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeAgentStatusResponse extends SdkResponse {
    public flag?: string;
    public constructor() { 
        super();
    }
    public withFlag(flag: string): ChangeAgentStatusResponse {
        this['flag'] = flag;
        return this;
    }
}