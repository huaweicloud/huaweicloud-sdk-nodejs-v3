import { GetUpgradeDetailInfo } from './GetUpgradeDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeDetailResponse extends SdkResponse {
    public totalSize?: number;
    public detailList?: Array<GetUpgradeDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalSize(totalSize: number): UpgradeDetailResponse {
        this['totalSize'] = totalSize;
        return this;
    }
    public withDetailList(detailList: Array<GetUpgradeDetailInfo>): UpgradeDetailResponse {
        this['detailList'] = detailList;
        return this;
    }
}