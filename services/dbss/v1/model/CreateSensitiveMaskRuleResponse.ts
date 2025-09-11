
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSensitiveMaskRuleResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateSensitiveMaskRuleResponse {
        this['status'] = status;
        return this;
    }
}