import { QueryLatestDeadLockRespMysqlDeadLock } from './QueryLatestDeadLockRespMysqlDeadLock';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLatestDeadLockSnapshotResponse extends SdkResponse {
    private 'mysql_dead_lock'?: QueryLatestDeadLockRespMysqlDeadLock;
    private 'find_lock'?: boolean;
    private 'happen_time'?: number;
    public constructor() { 
        super();
    }
    public withMysqlDeadLock(mysqlDeadLock: QueryLatestDeadLockRespMysqlDeadLock): ShowLatestDeadLockSnapshotResponse {
        this['mysql_dead_lock'] = mysqlDeadLock;
        return this;
    }
    public set mysqlDeadLock(mysqlDeadLock: QueryLatestDeadLockRespMysqlDeadLock  | undefined) {
        this['mysql_dead_lock'] = mysqlDeadLock;
    }
    public get mysqlDeadLock(): QueryLatestDeadLockRespMysqlDeadLock | undefined {
        return this['mysql_dead_lock'];
    }
    public withFindLock(findLock: boolean): ShowLatestDeadLockSnapshotResponse {
        this['find_lock'] = findLock;
        return this;
    }
    public set findLock(findLock: boolean  | undefined) {
        this['find_lock'] = findLock;
    }
    public get findLock(): boolean | undefined {
        return this['find_lock'];
    }
    public withHappenTime(happenTime: number): ShowLatestDeadLockSnapshotResponse {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
}