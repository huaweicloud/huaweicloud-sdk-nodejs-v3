import { CompareUserInfo } from './CompareUserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompareUsersDetailResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'user_compare_info'?: Array<CompareUserInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowCompareUsersDetailResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withUserCompareInfo(userCompareInfo: Array<CompareUserInfo>): ShowCompareUsersDetailResponse {
        this['user_compare_info'] = userCompareInfo;
        return this;
    }
    public set userCompareInfo(userCompareInfo: Array<CompareUserInfo>  | undefined) {
        this['user_compare_info'] = userCompareInfo;
    }
    public get userCompareInfo(): Array<CompareUserInfo> | undefined {
        return this['user_compare_info'];
    }
}