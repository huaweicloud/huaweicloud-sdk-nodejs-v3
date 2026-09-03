import { DeadLockDetail } from './DeadLockDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeadLockDetailResponse extends SdkResponse {
    private 'detail_list'?: Array<DeadLockDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDetailList(detailList: Array<DeadLockDetail>): ListDeadLockDetailResponse {
        this['detail_list'] = detailList;
        return this;
    }
    public set detailList(detailList: Array<DeadLockDetail>  | undefined) {
        this['detail_list'] = detailList;
    }
    public get detailList(): Array<DeadLockDetail> | undefined {
        return this['detail_list'];
    }
    public withTotal(total: number): ListDeadLockDetailResponse {
        this['total'] = total;
        return this;
    }
}