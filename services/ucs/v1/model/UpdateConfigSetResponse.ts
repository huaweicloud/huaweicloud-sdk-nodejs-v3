
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConfigSetResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateConfigSetResponse {
        this['body'] = body;
        return this;
    }
}