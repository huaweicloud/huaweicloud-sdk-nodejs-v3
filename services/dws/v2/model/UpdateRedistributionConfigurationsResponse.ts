
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRedistributionConfigurationsResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateRedistributionConfigurationsResponse {
        this['body'] = body;
        return this;
    }
}