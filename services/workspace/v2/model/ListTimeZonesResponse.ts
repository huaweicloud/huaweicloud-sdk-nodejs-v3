import { Timezones } from './Timezones';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTimeZonesResponse extends SdkResponse {
    private 'time_zones'?: Array<Timezones>;
    public constructor() { 
        super();
    }
    public withTimeZones(timeZones: Array<Timezones>): ListTimeZonesResponse {
        this['time_zones'] = timeZones;
        return this;
    }
    public set timeZones(timeZones: Array<Timezones>  | undefined) {
        this['time_zones'] = timeZones;
    }
    public get timeZones(): Array<Timezones> | undefined {
        return this['time_zones'];
    }
}