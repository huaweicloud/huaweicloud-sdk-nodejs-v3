
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSwitchesStatusResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowSwitchesStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}