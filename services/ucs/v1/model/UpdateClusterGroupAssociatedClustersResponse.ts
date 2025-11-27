
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterGroupAssociatedClustersResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateClusterGroupAssociatedClustersResponse {
        this['body'] = body;
        return this;
    }
}