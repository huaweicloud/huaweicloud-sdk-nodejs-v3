
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOperationalTaskResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): AddOperationalTaskResponse {
        this['body'] = body;
        return this;
    }
}