import { FullDeadLockListRespMysqlDeadlock } from './FullDeadLockListRespMysqlDeadlock';


export class FullDeadLockListRespFullDeadlockList {
    private 'happen_time'?: number;
    private 'mysql_deadlock'?: FullDeadLockListRespMysqlDeadlock;
    public constructor() { 
    }
    public withHappenTime(happenTime: number): FullDeadLockListRespFullDeadlockList {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withMysqlDeadlock(mysqlDeadlock: FullDeadLockListRespMysqlDeadlock): FullDeadLockListRespFullDeadlockList {
        this['mysql_deadlock'] = mysqlDeadlock;
        return this;
    }
    public set mysqlDeadlock(mysqlDeadlock: FullDeadLockListRespMysqlDeadlock  | undefined) {
        this['mysql_deadlock'] = mysqlDeadlock;
    }
    public get mysqlDeadlock(): FullDeadLockListRespMysqlDeadlock | undefined {
        return this['mysql_deadlock'];
    }
}