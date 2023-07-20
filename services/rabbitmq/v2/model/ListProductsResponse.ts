import { ListProductsRespHourly } from './ListProductsRespHourly';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductsResponse extends SdkResponse {
    private 'Hourly'?: Array<ListProductsRespHourly>;
    private 'Monthly'?: Array<ListProductsRespHourly>;
    public constructor() { 
        super();
    }
    public withHourly(hourly: Array<ListProductsRespHourly>): ListProductsResponse {
        this['Hourly'] = hourly;
        return this;
    }
    public set hourly(hourly: Array<ListProductsRespHourly>  | undefined) {
        this['Hourly'] = hourly;
    }
    public get hourly(): Array<ListProductsRespHourly> | undefined {
        return this['Hourly'];
    }
    public withMonthly(monthly: Array<ListProductsRespHourly>): ListProductsResponse {
        this['Monthly'] = monthly;
        return this;
    }
    public set monthly(monthly: Array<ListProductsRespHourly>  | undefined) {
        this['Monthly'] = monthly;
    }
    public get monthly(): Array<ListProductsRespHourly> | undefined {
        return this['Monthly'];
    }
}