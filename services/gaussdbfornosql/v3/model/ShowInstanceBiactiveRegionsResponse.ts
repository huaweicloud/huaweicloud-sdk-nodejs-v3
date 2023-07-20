
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceBiactiveRegionsResponse extends SdkResponse {
    private 'region_codes'?: Array<string>;
    public constructor() { 
        super();
    }
    public withRegionCodes(regionCodes: Array<string>): ShowInstanceBiactiveRegionsResponse {
        this['region_codes'] = regionCodes;
        return this;
    }
    public set regionCodes(regionCodes: Array<string>  | undefined) {
        this['region_codes'] = regionCodes;
    }
    public get regionCodes(): Array<string> | undefined {
        return this['region_codes'];
    }
}