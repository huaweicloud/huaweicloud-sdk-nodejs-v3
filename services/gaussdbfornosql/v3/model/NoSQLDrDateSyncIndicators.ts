

export class NoSQLDrDateSyncIndicators {
    private 'rsync_ops'?: number;
    private 'rsync_wal_size'?: number;
    private 'rsync_push_cost'?: number;
    private 'rsync_send_cost'?: number;
    private 'rsync_max_push_cost'?: number;
    private 'rsync_max_send_cost'?: number;
    private 'rsync_status'?: number;
    public constructor() { 
    }
    public withRsyncOps(rsyncOps: number): NoSQLDrDateSyncIndicators {
        this['rsync_ops'] = rsyncOps;
        return this;
    }
    public set rsyncOps(rsyncOps: number  | undefined) {
        this['rsync_ops'] = rsyncOps;
    }
    public get rsyncOps(): number | undefined {
        return this['rsync_ops'];
    }
    public withRsyncWalSize(rsyncWalSize: number): NoSQLDrDateSyncIndicators {
        this['rsync_wal_size'] = rsyncWalSize;
        return this;
    }
    public set rsyncWalSize(rsyncWalSize: number  | undefined) {
        this['rsync_wal_size'] = rsyncWalSize;
    }
    public get rsyncWalSize(): number | undefined {
        return this['rsync_wal_size'];
    }
    public withRsyncPushCost(rsyncPushCost: number): NoSQLDrDateSyncIndicators {
        this['rsync_push_cost'] = rsyncPushCost;
        return this;
    }
    public set rsyncPushCost(rsyncPushCost: number  | undefined) {
        this['rsync_push_cost'] = rsyncPushCost;
    }
    public get rsyncPushCost(): number | undefined {
        return this['rsync_push_cost'];
    }
    public withRsyncSendCost(rsyncSendCost: number): NoSQLDrDateSyncIndicators {
        this['rsync_send_cost'] = rsyncSendCost;
        return this;
    }
    public set rsyncSendCost(rsyncSendCost: number  | undefined) {
        this['rsync_send_cost'] = rsyncSendCost;
    }
    public get rsyncSendCost(): number | undefined {
        return this['rsync_send_cost'];
    }
    public withRsyncMaxPushCost(rsyncMaxPushCost: number): NoSQLDrDateSyncIndicators {
        this['rsync_max_push_cost'] = rsyncMaxPushCost;
        return this;
    }
    public set rsyncMaxPushCost(rsyncMaxPushCost: number  | undefined) {
        this['rsync_max_push_cost'] = rsyncMaxPushCost;
    }
    public get rsyncMaxPushCost(): number | undefined {
        return this['rsync_max_push_cost'];
    }
    public withRsyncMaxSendCost(rsyncMaxSendCost: number): NoSQLDrDateSyncIndicators {
        this['rsync_max_send_cost'] = rsyncMaxSendCost;
        return this;
    }
    public set rsyncMaxSendCost(rsyncMaxSendCost: number  | undefined) {
        this['rsync_max_send_cost'] = rsyncMaxSendCost;
    }
    public get rsyncMaxSendCost(): number | undefined {
        return this['rsync_max_send_cost'];
    }
    public withRsyncStatus(rsyncStatus: number): NoSQLDrDateSyncIndicators {
        this['rsync_status'] = rsyncStatus;
        return this;
    }
    public set rsyncStatus(rsyncStatus: number  | undefined) {
        this['rsync_status'] = rsyncStatus;
    }
    public get rsyncStatus(): number | undefined {
        return this['rsync_status'];
    }
}