
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetLinkAttributeAndStandardResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ResetLinkAttributeAndStandardResponse {
        this['data'] = data;
        return this;
    }
}