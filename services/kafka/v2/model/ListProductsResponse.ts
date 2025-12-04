import { ListProductsRespHourly } from './ListProductsRespHourly';
import { ListProductsRespMonthly } from './ListProductsRespMonthly';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductsResponse extends SdkResponse {
    private 'Hourly'?: Array<ListProductsRespHourly>;
    private 'Monthly'?: Array<ListProductsRespMonthly>;
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
    public withMonthly(monthly: Array<ListProductsRespMonthly>): ListProductsResponse {
        this['Monthly'] = monthly;
        return this;
    }
    public set monthly(monthly: Array<ListProductsRespMonthly>  | undefined) {
        this['Monthly'] = monthly;
    }
    public get monthly(): Array<ListProductsRespMonthly> | undefined {
        return this['Monthly'];
    }
}