
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOperationalTaskConfigResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateOperationalTaskConfigResponse {
        this['body'] = body;
        return this;
    }
}