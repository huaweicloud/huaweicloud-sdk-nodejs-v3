
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentAutoUpgradeStatusResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ListAgentAutoUpgradeStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}