import { NetResp } from './NetResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostNetResponse extends SdkResponse {
    public body?: Array<NetResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<NetResp>): ListHostNetResponse {
        this['body'] = body;
        return this;
    }
}