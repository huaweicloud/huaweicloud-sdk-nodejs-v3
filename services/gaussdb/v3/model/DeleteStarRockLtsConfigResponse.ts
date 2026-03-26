
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteStarRockLtsConfigResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): DeleteStarRockLtsConfigResponse {
        this['body'] = body;
        return this;
    }
}