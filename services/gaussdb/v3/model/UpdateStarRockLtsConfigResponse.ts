
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStarRockLtsConfigResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateStarRockLtsConfigResponse {
        this['body'] = body;
        return this;
    }
}