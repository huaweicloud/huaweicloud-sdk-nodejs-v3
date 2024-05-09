import { ObjectsCompareDetailInfo } from './ObjectsCompareDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObejectLevelCompareDetailResponse extends SdkResponse {
    public count?: number;
    private 'compare_detail'?: Array<ObjectsCompareDetailInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListObejectLevelCompareDetailResponse {
        this['count'] = count;
        return this;
    }
    public withCompareDetail(compareDetail: Array<ObjectsCompareDetailInfo>): ListObejectLevelCompareDetailResponse {
        this['compare_detail'] = compareDetail;
        return this;
    }
    public set compareDetail(compareDetail: Array<ObjectsCompareDetailInfo>  | undefined) {
        this['compare_detail'] = compareDetail;
    }
    public get compareDetail(): Array<ObjectsCompareDetailInfo> | undefined {
        return this['compare_detail'];
    }
}