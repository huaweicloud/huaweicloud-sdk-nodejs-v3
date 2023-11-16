
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMicroserviceRouteRuleResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateMicroserviceRouteRuleResponse {
        this['result'] = result;
        return this;
    }
}