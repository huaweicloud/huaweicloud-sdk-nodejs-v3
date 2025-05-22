
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetRedistributionPriorityResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): SetRedistributionPriorityResponse {
        this['body'] = body;
        return this;
    }
}