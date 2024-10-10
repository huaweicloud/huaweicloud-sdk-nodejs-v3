import { Point } from './Point';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWafQpsResponse extends SdkResponse {
    public curve?: Array<Point>;
    public constructor() { 
        super();
    }
    public withCurve(curve: Array<Point>): ListWafQpsResponse {
        this['curve'] = curve;
        return this;
    }
}