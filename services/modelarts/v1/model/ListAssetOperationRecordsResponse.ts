import { AssetOperationRecordRsp } from './AssetOperationRecordRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetOperationRecordsResponse extends SdkResponse {
    private 'total_count'?: number;
    public data?: Array<AssetOperationRecordRsp>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListAssetOperationRecordsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withData(data: Array<AssetOperationRecordRsp>): ListAssetOperationRecordsResponse {
        this['data'] = data;
        return this;
    }
}