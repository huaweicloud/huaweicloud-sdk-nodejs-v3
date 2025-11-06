import { ShowFlavorDetailRspFlavorDetail } from './ShowFlavorDetailRspFlavorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlavorDetailResponse extends SdkResponse {
    private 'str_id'?: string;
    public name?: string;
    public condOperationStatus?: string;
    public condOperationAz?: string;
    private 'flavor_detail'?: Array<ShowFlavorDetailRspFlavorDetail>;
    public constructor() { 
        super();
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
    public withName(name: string): ShowFlavorDetailResponse {
        this['name'] = name;
        return this;
    }
    public withCondOperationStatus(condOperationStatus: string): ShowFlavorDetailResponse {
        this['condOperationStatus'] = condOperationStatus;
        return this;
    }
    public withCondOperationAz(condOperationAz: string): ShowFlavorDetailResponse {
        this['condOperationAz'] = condOperationAz;
        return this;
    }
    public withFlavorDetail(flavorDetail: Array<ShowFlavorDetailRspFlavorDetail>): ShowFlavorDetailResponse {
        this['flavor_detail'] = flavorDetail;
        return this;
    }
    public set flavorDetail(flavorDetail: Array<ShowFlavorDetailRspFlavorDetail>  | undefined) {
        this['flavor_detail'] = flavorDetail;
    }
    public get flavorDetail(): Array<ShowFlavorDetailRspFlavorDetail> | undefined {
        return this['flavor_detail'];
    }
}