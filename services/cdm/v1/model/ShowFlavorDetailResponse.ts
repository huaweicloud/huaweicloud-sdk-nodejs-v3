import { FlavorAttribute } from './FlavorAttribute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlavorDetailResponse extends SdkResponse {
    public name?: string;
    private 'str_id'?: string;
    private 'flavor_detail'?: Array<FlavorAttribute>;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowFlavorDetailResponse {
        this['name'] = name;
        return this;
    }
    public withStrId(strId: string): ShowFlavorDetailResponse {
        this['str_id'] = strId;
        return this;
    }
    public set strId(strId: string  | undefined) {
        this['str_id'] = strId;
    }
    public get strId(): string | undefined {
        return this['str_id'];
    }
    public withFlavorDetail(flavorDetail: Array<FlavorAttribute>): ShowFlavorDetailResponse {
        this['flavor_detail'] = flavorDetail;
        return this;
    }
    public set flavorDetail(flavorDetail: Array<FlavorAttribute>  | undefined) {
        this['flavor_detail'] = flavorDetail;
    }
    public get flavorDetail(): Array<FlavorAttribute> | undefined {
        return this['flavor_detail'];
    }
}