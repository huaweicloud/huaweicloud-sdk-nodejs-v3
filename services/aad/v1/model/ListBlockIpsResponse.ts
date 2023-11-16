import { BlockListBlockingList } from './BlockListBlockingList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBlockIpsResponse extends SdkResponse {
    private 'blocking_list'?: Array<BlockListBlockingList>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withBlockingList(blockingList: Array<BlockListBlockingList>): ListBlockIpsResponse {
        this['blocking_list'] = blockingList;
        return this;
    }
    public set blockingList(blockingList: Array<BlockListBlockingList>  | undefined) {
        this['blocking_list'] = blockingList;
    }
    public get blockingList(): Array<BlockListBlockingList> | undefined {
        return this['blocking_list'];
    }
    public withTotal(total: number): ListBlockIpsResponse {
        this['total'] = total;
        return this;
    }
}