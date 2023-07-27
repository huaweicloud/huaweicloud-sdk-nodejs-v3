import { ResponseInfoResp } from './ResponseInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfGatewayResponseTypeV2Response extends SdkResponse {
    public body?: { [key: string]: ResponseInfoResp; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: ResponseInfoResp; }): ShowDetailsOfGatewayResponseTypeV2Response {
        this['body'] = body;
        return this;
    }
}