import { AuthModel } from './AuthModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionsResponse extends SdkResponse {
    public body?: { [key: string]: AuthModel; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: AuthModel; }): ListPermissionsResponse {
        this['body'] = body;
        return this;
    }
}