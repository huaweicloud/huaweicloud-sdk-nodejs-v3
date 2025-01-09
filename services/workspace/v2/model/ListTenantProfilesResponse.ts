
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantProfilesResponse extends SdkResponse {
    public body?: { [key: string]: boolean; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: boolean; }): ListTenantProfilesResponse {
        this['body'] = body;
        return this;
    }
}