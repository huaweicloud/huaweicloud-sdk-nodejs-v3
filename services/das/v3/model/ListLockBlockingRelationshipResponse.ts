import { ListLockBlockingDetailRespDetailList } from './ListLockBlockingDetailRespDetailList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLockBlockingRelationshipResponse extends SdkResponse {
    public total?: number;
    private 'detail_list'?: Array<ListLockBlockingDetailRespDetailList>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListLockBlockingRelationshipResponse {
        this['total'] = total;
        return this;
    }
    public withDetailList(detailList: Array<ListLockBlockingDetailRespDetailList>): ListLockBlockingRelationshipResponse {
        this['detail_list'] = detailList;
        return this;
    }
    public set detailList(detailList: Array<ListLockBlockingDetailRespDetailList>  | undefined) {
        this['detail_list'] = detailList;
    }
    public get detailList(): Array<ListLockBlockingDetailRespDetailList> | undefined {
        return this['detail_list'];
    }
}