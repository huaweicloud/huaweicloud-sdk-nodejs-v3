
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateDomainResponse extends SdkResponse {
    public body?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: string; }): MigrateDomainResponse {
        this['body'] = body;
        return this;
    }
}