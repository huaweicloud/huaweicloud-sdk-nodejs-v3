
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigResponse extends SdkResponse {
    public config?: { [key: string]: string; };
    public regions?: Array<{ [key: string]: string; }>;
    public constructor() { 
        super();
    }
    public withConfig(config: { [key: string]: string; }): ShowConfigResponse {
        this['config'] = config;
        return this;
    }
    public withRegions(regions: Array<{ [key: string]: string; }>): ShowConfigResponse {
        this['regions'] = regions;
        return this;
    }
}