
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTenantUpgradeStrategyResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateTenantUpgradeStrategyResponse {
        this['body'] = body;
        return this;
    }
}