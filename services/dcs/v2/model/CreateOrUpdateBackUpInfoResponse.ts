
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrUpdateBackUpInfoResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): CreateOrUpdateBackUpInfoResponse {
        this['body'] = body;
        return this;
    }
}