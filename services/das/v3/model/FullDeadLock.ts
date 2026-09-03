import { MySQLDeadLock } from './MySQLDeadLock';


export class FullDeadLock {
    private 'happen_time'?: number;
    private 'dead_lock_id'?: string;
    private 'mysql_dead_lock'?: MySQLDeadLock;
    public constructor() { 
    }
    public withHappenTime(happenTime: number): FullDeadLock {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withDeadLockId(deadLockId: string): FullDeadLock {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
    public withMysqlDeadLock(mysqlDeadLock: MySQLDeadLock): FullDeadLock {
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