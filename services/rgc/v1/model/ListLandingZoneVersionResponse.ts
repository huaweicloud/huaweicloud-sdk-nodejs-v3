import { LandingZoneVersionDetail } from './LandingZoneVersionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLandingZoneVersionResponse extends SdkResponse {
    public body?: Array<LandingZoneVersionDetail>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LandingZoneVersionDetail>): ListLandingZoneVersionResponse {
        this['body'] = body;
        return this;
    }
}