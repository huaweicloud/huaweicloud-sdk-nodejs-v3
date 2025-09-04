import { FullDeadLockListRespFullDeadlockList } from './FullDeadLockListRespFullDeadlockList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFullDeadLockListResponse extends SdkResponse {
    public total?: number;
    private 'full_deadlock_list'?: Array<FullDeadLockListRespFullDeadlockList>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowFullDeadLockListResponse {
        this['total'] = total;
        return this;
    }
    public withFullDeadlockList(fullDeadlockList: Array<FullDeadLockListRespFullDeadlockList>): ShowFullDeadLockListResponse {
        this['full_deadlock_list'] = fullDeadlockList;
        return this;
    }
    public set fullDeadlockList(fullDeadlockList: Array<FullDeadLockListRespFullDeadlockList>  | undefined) {
        this['full_deadlock_list'] = fullDeadlockList;
    }
    public get fullDeadlockList(): Array<FullDeadLockListRespFullDeadlockList> | undefined {
        return this['full_deadlock_list'];
    }
}