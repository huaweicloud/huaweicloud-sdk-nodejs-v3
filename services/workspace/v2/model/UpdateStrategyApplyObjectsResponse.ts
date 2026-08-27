
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStrategyApplyObjectsResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateStrategyApplyObjectsResponse {
        this['body'] = body;
        return this;
    }
}