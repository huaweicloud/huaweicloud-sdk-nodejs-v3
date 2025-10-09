import { GetAvailableZoneResponseBody } from './GetAvailableZoneResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAvaliableZoneResponse extends SdkResponse {
    public body?: Array<GetAvailableZoneResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GetAvailableZoneResponseBody>): GetAvaliableZoneResponse {
        this['body'] = body;
        return this;
    }
}