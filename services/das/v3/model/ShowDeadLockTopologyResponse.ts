import { ShowDeadLockTopologyGraphRespConflictGroups } from './ShowDeadLockTopologyGraphRespConflictGroups';
import { ShowDeadLockTopologyGraphRespEdges } from './ShowDeadLockTopologyGraphRespEdges';
import { ShowDeadLockTopologyGraphRespLocks } from './ShowDeadLockTopologyGraphRespLocks';
import { ShowDeadLockTopologyGraphRespMeta } from './ShowDeadLockTopologyGraphRespMeta';
import { ShowDeadLockTopologyGraphRespTransactions } from './ShowDeadLockTopologyGraphRespTransactions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeadLockTopologyResponse extends SdkResponse {
    public meta?: ShowDeadLockTopologyGraphRespMeta;
    public transactions?: Array<ShowDeadLockTopologyGraphRespTransactions>;
    public locks?: Array<ShowDeadLockTopologyGraphRespLocks>;
    public edges?: Array<ShowDeadLockTopologyGraphRespEdges>;
    private 'conflict_groups'?: Array<ShowDeadLockTopologyGraphRespConflictGroups>;
    public constructor() { 
        super();
    }
    public withMeta(meta: ShowDeadLockTopologyGraphRespMeta): ShowDeadLockTopologyResponse {
        this['meta'] = meta;
        return this;
    }
    public withTransactions(transactions: Array<ShowDeadLockTopologyGraphRespTransactions>): ShowDeadLockTopologyResponse {
        this['transactions'] = transactions;
        return this;
    }
    public withLocks(locks: Array<ShowDeadLockTopologyGraphRespLocks>): ShowDeadLockTopologyResponse {
        this['locks'] = locks;
        return this;
    }
    public withEdges(edges: Array<ShowDeadLockTopologyGraphRespEdges>): ShowDeadLockTopologyResponse {
        this['edges'] = edges;
        return this;
    }
    public withConflictGroups(conflictGroups: Array<ShowDeadLockTopologyGraphRespConflictGroups>): ShowDeadLockTopologyResponse {
        this['conflict_groups'] = conflictGroups;
        return this;
    }
    public set conflictGroups(conflictGroups: Array<ShowDeadLockTopologyGraphRespConflictGroups>  | undefined) {
        this['conflict_groups'] = conflictGroups;
    }
    public get conflictGroups(): Array<ShowDeadLockTopologyGraphRespConflictGroups> | undefined {
        return this['conflict_groups'];
    }
}