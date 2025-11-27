
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterGroupAssociatedZonesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateClusterGroupAssociatedZonesResponse {
        this['body'] = body;
        return this;
    }
}