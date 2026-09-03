

export class DeadLockTrendPoint {
    private 'occurrence_time'?: number;
    private 'total_deadlock_count'?: number;
    private 'key_deadlock_count'?: number;
    private 'object_deadlock_count'?: number;
    private 'rid_deadlock_count'?: number;
    private 'page_deadlock_count'?: number;
    private 'compile_deadlock_count'?: number;
    public constructor() { 
    }
    public withOccurrenceTime(occurrenceTime: number): DeadLockTrendPoint {
        this['occurrence_time'] = occurrenceTime;
        return this;
    }
    public set occurrenceTime(occurrenceTime: number  | undefined) {
        this['occurrence_time'] = occurrenceTime;
    }
    public get occurrenceTime(): number | undefined {
        return this['occurrence_time'];
    }
    public withTotalDeadlockCount(totalDeadlockCount: number): DeadLockTrendPoint {
        this['total_deadlock_count'] = totalDeadlockCount;
        return this;
    }
    public set totalDeadlockCount(totalDeadlockCount: number  | undefined) {
        this['total_deadlock_count'] = totalDeadlockCount;
    }
    public get totalDeadlockCount(): number | undefined {
        return this['total_deadlock_count'];
    }
    public withKeyDeadlockCount(keyDeadlockCount: number): DeadLockTrendPoint {
        this['key_deadlock_count'] = keyDeadlockCount;
        return this;
    }
    public set keyDeadlockCount(keyDeadlockCount: number  | undefined) {
        this['key_deadlock_count'] = keyDeadlockCount;
    }
    public get keyDeadlockCount(): number | undefined {
        return this['key_deadlock_count'];
    }
    public withObjectDeadlockCount(objectDeadlockCount: number): DeadLockTrendPoint {
        this['object_deadlock_count'] = objectDeadlockCount;
        return this;
    }
    public set objectDeadlockCount(objectDeadlockCount: number  | undefined) {
        this['object_deadlock_count'] = objectDeadlockCount;
    }
    public get objectDeadlockCount(): number | undefined {
        return this['object_deadlock_count'];
    }
    public withRidDeadlockCount(ridDeadlockCount: number): DeadLockTrendPoint {
        this['rid_deadlock_count'] = ridDeadlockCount;
        return this;
    }
    public set ridDeadlockCount(ridDeadlockCount: number  | undefined) {
        this['rid_deadlock_count'] = ridDeadlockCount;
    }
    public get ridDeadlockCount(): number | undefined {
        return this['rid_deadlock_count'];
    }
    public withPageDeadlockCount(pageDeadlockCount: number): DeadLockTrendPoint {
        this['page_deadlock_count'] = pageDeadlockCount;
        return this;
    }
    public set pageDeadlockCount(pageDeadlockCount: number  | undefined) {
        this['page_deadlock_count'] = pageDeadlockCount;
    }
    public get pageDeadlockCount(): number | undefined {
        return this['page_deadlock_count'];
    }
    public withCompileDeadlockCount(compileDeadlockCount: number): DeadLockTrendPoint {
        this['compile_deadlock_count'] = compileDeadlockCount;
        return this;
    }
    public set compileDeadlockCount(compileDeadlockCount: number  | undefined) {
        this['compile_deadlock_count'] = compileDeadlockCount;
    }
    public get compileDeadlockCount(): number | undefined {
        return this['compile_deadlock_count'];
    }
}