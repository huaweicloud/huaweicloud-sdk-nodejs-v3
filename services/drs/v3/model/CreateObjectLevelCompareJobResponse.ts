
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateObjectLevelCompareJobResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): CreateObjectLevelCompareJobResponse {
        this['body'] = body;
        return this;
    }
}