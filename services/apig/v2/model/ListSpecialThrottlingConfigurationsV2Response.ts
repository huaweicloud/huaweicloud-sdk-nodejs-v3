import { BasePage } from './BasePage';
import { ThrottleSpecialInfo } from './ThrottleSpecialInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpecialThrottlingConfigurationsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'throttle_specials'?: Array<ThrottleSpecialInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListSpecialThrottlingConfigurationsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListSpecialThrottlingConfigurationsV2Response {
        this['total'] = total;
        return this;
    }
    public withThrottleSpecials(throttleSpecials: Array<ThrottleSpecialInfo>): ListSpecialThrottlingConfigurationsV2Response {
        this['throttle_specials'] = throttleSpecials;
        return this;
    }
    public set throttleSpecials(throttleSpecials: Array<ThrottleSpecialInfo>  | undefined) {
        this['throttle_specials'] = throttleSpecials;
    }
    public get throttleSpecials(): Array<ThrottleSpecialInfo> | undefined {
        return this['throttle_specials'];
    }
}