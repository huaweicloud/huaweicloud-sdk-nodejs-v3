import { ShowInstanceExtendProductInfoRespHourly } from './ShowInstanceExtendProductInfoRespHourly';
import { ShowInstanceExtendProductInfoRespMonthly } from './ShowInstanceExtendProductInfoRespMonthly';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceExtendProductInfoResponse extends SdkResponse {
    public hourly?: Array<ShowInstanceExtendProductInfoRespHourly>;
    public monthly?: Array<ShowInstanceExtendProductInfoRespMonthly>;
    public constructor() { 
        super();
    }
    public withHourly(hourly: Array<ShowInstanceExtendProductInfoRespHourly>): ShowInstanceExtendProductInfoResponse {
        this['hourly'] = hourly;
        return this;
    }
    public withMonthly(monthly: Array<ShowInstanceExtendProductInfoRespMonthly>): ShowInstanceExtendProductInfoResponse {
        this['monthly'] = monthly;
        return this;
    }
}