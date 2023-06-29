
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBackup2Response extends SdkResponse {
    public body?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: string; }): DeleteBackup2Response {
        this['body'] = body;
        return this;
    }
}