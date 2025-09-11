
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSensitiveMaskRuleSwitchResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetSensitiveMaskRuleSwitchResponse {
        this['status'] = status;
        return this;
    }
}