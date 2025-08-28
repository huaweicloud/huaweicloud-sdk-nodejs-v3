import { InnodbLockWaits } from './InnodbLockWaits';
import { InnodbTrx } from './InnodbTrx';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInnodbLocksResponse extends SdkResponse {
    private 'innodb_trx'?: Array<InnodbTrx>;
    private 'innodb_lock_waits'?: Array<InnodbLockWaits>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withInnodbTrx(innodbTrx: Array<InnodbTrx>): ListInnodbLocksResponse {
        this['innodb_trx'] = innodbTrx;
        return this;
    }
    public set innodbTrx(innodbTrx: Array<InnodbTrx>  | undefined) {
        this['innodb_trx'] = innodbTrx;
    }
    public get innodbTrx(): Array<InnodbTrx> | undefined {
        return this['innodb_trx'];
    }
    public withInnodbLockWaits(innodbLockWaits: Array<InnodbLockWaits>): ListInnodbLocksResponse {
        this['innodb_lock_waits'] = innodbLockWaits;
        return this;
    }
    public set innodbLockWaits(innodbLockWaits: Array<InnodbLockWaits>  | undefined) {
        this['innodb_lock_waits'] = innodbLockWaits;
    }
    public get innodbLockWaits(): Array<InnodbLockWaits> | undefined {
        return this['innodb_lock_waits'];
    }
    public withCount(count: number): ListInnodbLocksResponse {
        this['count'] = count;
        return this;
    }
}