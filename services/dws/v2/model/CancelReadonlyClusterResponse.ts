
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelReadonlyClusterResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): CancelReadonlyClusterResponse {
        this['body'] = body;
        return this;
    }
}