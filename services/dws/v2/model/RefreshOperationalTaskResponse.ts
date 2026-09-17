
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RefreshOperationalTaskResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): RefreshOperationalTaskResponse {
        this['body'] = body;
        return this;
    }
}