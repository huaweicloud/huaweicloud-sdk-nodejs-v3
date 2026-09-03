import { FullDeadLock } from './FullDeadLock';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFullDeadLocksResponse extends SdkResponse {
    private 'full_dead_lock_list'?: Array<FullDeadLock>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFullDeadLockList(fullDeadLockList: Array<FullDeadLock>): ListFullDeadLocksResponse {
        this['full_dead_lock_list'] = fullDeadLockList;
        return this;
    }
    public set fullDeadLockList(fullDeadLockList: Array<FullDeadLock>  | undefined) {
        this['full_dead_lock_list'] = fullDeadLockList;
    }
    public get fullDeadLockList(): Array<FullDeadLock> | undefined {
        return this['full_dead_lock_list'];
    }
    public withTotal(total: number): ListFullDeadLocksResponse {
        this['total'] = total;
        return this;
    }
}