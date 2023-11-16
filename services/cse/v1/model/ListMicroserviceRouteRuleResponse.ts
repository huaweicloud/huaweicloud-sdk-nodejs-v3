
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMicroserviceRouteRuleResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ListMicroserviceRouteRuleResponse {
        this['result'] = result;
        return this;
    }
}