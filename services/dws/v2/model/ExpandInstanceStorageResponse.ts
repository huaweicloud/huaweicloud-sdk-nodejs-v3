
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandInstanceStorageResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ExpandInstanceStorageResponse {
        this['body'] = body;
        return this;
    }
}