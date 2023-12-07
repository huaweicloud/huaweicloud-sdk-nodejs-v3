
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class OfflineNodesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): OfflineNodesResponse {
        this['body'] = body;
        return this;
    }
}