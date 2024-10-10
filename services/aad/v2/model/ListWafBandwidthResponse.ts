import { Curve } from './Curve';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWafBandwidthResponse extends SdkResponse {
    public curve?: Array<Curve>;
    public constructor() { 
        super();
    }
    public withCurve(curve: Array<Curve>): ListWafBandwidthResponse {
        this['curve'] = curve;
        return this;
    }
}