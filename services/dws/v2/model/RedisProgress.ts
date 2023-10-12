

export class RedisProgress {
    private 'bytes_done'?: number;
    private 'byte_left'?: number;
    private 'tables_done'?: number;
    private 'tables_left'?: number;
    private 'table_progress'?: number;
    private 'total_progress'?: number;
    private 'redis_rate'?: string;
    private 'estimated_time'?: string;
    public completed?: boolean;
    public initialed?: boolean;
    private 'fail_count'?: number;
    public redistributing?: boolean;
    public status?: string;
    private 'pause_by_user'?: boolean;
    public constructor() { 
    }
    public withBytesDone(bytesDone: number): RedisProgress {
        this['bytes_done'] = bytesDone;
        return this;
    }
    public set bytesDone(bytesDone: number  | undefined) {
        this['bytes_done'] = bytesDone;
    }
    public get bytesDone(): number | undefined {
        return this['bytes_done'];
    }
    public withByteLeft(byteLeft: number): RedisProgress {
        this['byte_left'] = byteLeft;
        return this;
    }
    public set byteLeft(byteLeft: number  | undefined) {
        this['byte_left'] = byteLeft;
    }
    public get byteLeft(): number | undefined {
        return this['byte_left'];
    }
    public withTablesDone(tablesDone: number): RedisProgress {
        this['tables_done'] = tablesDone;
        return this;
    }
    public set tablesDone(tablesDone: number  | undefined) {
        this['tables_done'] = tablesDone;
    }
    public get tablesDone(): number | undefined {
        return this['tables_done'];
    }
    public withTablesLeft(tablesLeft: number): RedisProgress {
        this['tables_left'] = tablesLeft;
        return this;
    }
    public set tablesLeft(tablesLeft: number  | undefined) {
        this['tables_left'] = tablesLeft;
    }
    public get tablesLeft(): number | undefined {
        return this['tables_left'];
    }
    public withTableProgress(tableProgress: number): RedisProgress {
        this['table_progress'] = tableProgress;
        return this;
    }
    public set tableProgress(tableProgress: number  | undefined) {
        this['table_progress'] = tableProgress;
    }
    public get tableProgress(): number | undefined {
        return this['table_progress'];
    }
    public withTotalProgress(totalProgress: number): RedisProgress {
        this['total_progress'] = totalProgress;
        return this;
    }
    public set totalProgress(totalProgress: number  | undefined) {
        this['total_progress'] = totalProgress;
    }
    public get totalProgress(): number | undefined {
        return this['total_progress'];
    }
    public withRedisRate(redisRate: string): RedisProgress {
        this['redis_rate'] = redisRate;
        return this;
    }
    public set redisRate(redisRate: string  | undefined) {
        this['redis_rate'] = redisRate;
    }
    public get redisRate(): string | undefined {
        return this['redis_rate'];
    }
    public withEstimatedTime(estimatedTime: string): RedisProgress {
        this['estimated_time'] = estimatedTime;
        return this;
    }
    public set estimatedTime(estimatedTime: string  | undefined) {
        this['estimated_time'] = estimatedTime;
    }
    public get estimatedTime(): string | undefined {
        return this['estimated_time'];
    }
    public withCompleted(completed: boolean): RedisProgress {
        this['completed'] = completed;
        return this;
    }
    public withInitialed(initialed: boolean): RedisProgress {
        this['initialed'] = initialed;
        return this;
    }
    public withFailCount(failCount: number): RedisProgress {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: number  | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount(): number | undefined {
        return this['fail_count'];
    }
    public withRedistributing(redistributing: boolean): RedisProgress {
        this['redistributing'] = redistributing;
        return this;
    }
    public withStatus(status: string): RedisProgress {
        this['status'] = status;
        return this;
    }
    public withPauseByUser(pauseByUser: boolean): RedisProgress {
        this['pause_by_user'] = pauseByUser;
        return this;
    }
    public set pauseByUser(pauseByUser: boolean  | undefined) {
        this['pause_by_user'] = pauseByUser;
    }
    public get pauseByUser(): boolean | undefined {
        return this['pause_by_user'];
    }
}