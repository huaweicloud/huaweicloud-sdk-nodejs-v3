
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHomeRegionResponse extends SdkResponse {
    private 'home_region'?: string;
    public constructor() { 
        super();
    }
    public withHomeRegion(homeRegion: string): ShowHomeRegionResponse {
        this['home_region'] = homeRegion;
        return this;
    }
    public set homeRegion(homeRegion: string  | undefined) {
        this['home_region'] = homeRegion;
    }
    public get homeRegion(): string | undefined {
        return this['home_region'];
    }
}