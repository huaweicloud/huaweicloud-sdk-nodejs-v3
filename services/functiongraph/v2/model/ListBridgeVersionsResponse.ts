import { ServiceBridgeVersion } from './ServiceBridgeVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBridgeVersionsResponse extends SdkResponse {
    public body?: Array<ServiceBridgeVersion>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ServiceBridgeVersion>): ListBridgeVersionsResponse {
        this['body'] = body;
        return this;
    }
}