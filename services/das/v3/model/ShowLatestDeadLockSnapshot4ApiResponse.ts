import { MySQLDeadLock } from './MySQLDeadLock';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLatestDeadLockSnapshot4ApiResponse extends SdkResponse {
    private 'find_lock'?: boolean;
    private 'happen_time'?: number;
    private 'mysql_dead_lock'?: MySQLDeadLock;
    public constructor() { 
        super();
    }
    public withFindLock(findLock: boolean): ShowLatestDeadLockSnapshot4ApiResponse {
        this['find_lock'] = findLock;
        return this;
    }
    public set findLock(findLock: boolean  | undefined) {
        this['find_lock'] = findLock;
    }
    public get findLock(): boolean | undefined {
        return this['find_lock'];
    }
    public withHappenTime(happenTime: number): ShowLatestDeadLockSnapshot4ApiResponse {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withMysqlDeadLock(mysqlDeadLock: MySQLDeadLock): ShowLatestDeadLockSnapshot4ApiResponse {
        this['mysql_dead_lock'] = mysqlDeadLock;
        return this;
    }
    public set mysqlDeadLock(mysqlDeadLock: MySQLDeadLock  | undefined) {
        this['mysql_dead_lock'] = mysqlDeadLock;
    }
    public get mysqlDeadLock(): MySQLDeadLock | undefined {
        return this['mysql_dead_lock'];
    }
}