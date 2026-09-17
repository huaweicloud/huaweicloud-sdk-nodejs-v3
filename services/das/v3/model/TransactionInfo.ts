

export class TransactionInfo {
    private 'last_sec'?: number;
    private 'wait_locks'?: number;
    private 'hold_locks'?: number;
    private 'occurrence_time'?: number;
    public detail?: string;
    private 'collect_time'?: number;
    public constructor() { 
    }
    public withLastSec(lastSec: number): TransactionInfo {
        this['last_sec'] = lastSec;
        return this;
    }
    public set lastSec(lastSec: number  | undefined) {
        this['last_sec'] = lastSec;
    }
    public get lastSec(): number | undefined {
        return this['last_sec'];
    }
    public withWaitLocks(waitLocks: number): TransactionInfo {
        this['wait_locks'] = waitLocks;
        return this;
    }
    public set waitLocks(waitLocks: number  | undefined) {
        this['wait_locks'] = waitLocks;
    }
    public get waitLocks(): number | undefined {
        return this['wait_locks'];
    }
    public withHoldLocks(holdLocks: number): TransactionInfo {
        this['hold_locks'] = holdLocks;
        return this;
    }
    public set holdLocks(holdLocks: number  | undefined) {
        this['hold_locks'] = holdLocks;
    }
    public get holdLocks(): number | undefined {
        return this['hold_locks'];
    }
    public withOccurrenceTime(occurrenceTime: number): TransactionInfo {
        this['occurrence_time'] = occurrenceTime;
        return this;
    }
    public set occurrenceTime(occurrenceTime: number  | undefined) {
        this['occurrence_time'] = occurrenceTime;
    }
    public get occurrenceTime(): number | undefined {
        return this['occurrence_time'];
    }
    public withDetail(detail: string): TransactionInfo {
        this['detail'] = detail;
        return this;
    }
    public withCollectTime(collectTime: number): TransactionInfo {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
}