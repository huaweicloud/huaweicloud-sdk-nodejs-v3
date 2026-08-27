
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTenantUpgradeStrategyResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): CreateTenantUpgradeStrategyResponse {
        this['body'] = body;
        return this;
    }
}