
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaShowFlavorExtraSpecsResponse extends SdkResponse {
    private 'extra_specs'?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withExtraSpecs(extraSpecs: { [key: string]: string; }): NovaShowFlavorExtraSpecsResponse {
        this['extra_specs'] = extraSpecs;
        return this;
    }
    public set extraSpecs(extraSpecs: { [key: string]: string; }  | undefined) {
        this['extra_specs'] = extraSpecs;
    }
    public get extraSpecs(): { [key: string]: string; } | undefined {
        return this['extra_specs'];
    }
}