import { ShowInstanceExtendProductInfoRespHourly } from './ShowInstanceExtendProductInfoRespHourly';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceExtendProductInfoResponse extends SdkResponse {
    public hourly?: Array<ShowInstanceExtendProductInfoRespHourly>;
    public monthly?: Array<ShowInstanceExtendProductInfoRespHourly>;
    public constructor() { 
        super();
    }
    public withHourly(hourly: Array<ShowInstanceExtendProductInfoRespHourly>): ShowInstanceExtendProductInfoResponse {
        this['hourly'] = hourly;
        return this;
    }
    public withMonthly(monthly: Array<ShowInstanceExtendProductInfoRespHourly>): ShowInstanceExtendProductInfoResponse {
        this['monthly'] = monthly;
        return this;
    }
}