
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePromInstanceResponse extends SdkResponse {
    public body?: { [key: string]: boolean; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: boolean; }): DeletePromInstanceResponse {
        this['body'] = body;
        return this;
    }
}