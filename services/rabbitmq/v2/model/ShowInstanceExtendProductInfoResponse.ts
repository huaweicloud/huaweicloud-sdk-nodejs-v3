import { ListProductsRespHourly } from './ListProductsRespHourly';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceExtendProductInfoResponse extends SdkResponse {
    public hourly?: Array<ListProductsRespHourly>;
    public monthly?: Array<ListProductsRespHourly>;
    public constructor() { 
        super();
    }
    public withHourly(hourly: Array<ListProductsRespHourly>): ShowInstanceExtendProductInfoResponse {
        this['hourly'] = hourly;
        return this;
    }
    public withMonthly(monthly: Array<ListProductsRespHourly>): ShowInstanceExtendProductInfoResponse {
        this['monthly'] = monthly;
        return this;
    }
}