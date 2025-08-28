

export class GetTransactionListRespTransactionInfoList {
    private 'last_sec'?: number;
    private 'wait_locks'?: number;
    private 'hold_locks'?: number;
    private 'occurrence_time'?: number;
    public detail?: string;
    private 'collect_time'?: number;
    public constructor(lastSec?: number, waitLocks?: number, holdLocks?: number, occurrenceTime?: number, detail?: string, collectTime?: number) { 
        this['last_sec'] = lastSec;
        this['wait_locks'] = waitLocks;
        this['hold_locks'] = holdLocks;
        this['occurrence_time'] = occurrenceTime;
        this['detail'] = detail;
        this['collect_time'] = collectTime;
    }
    public withLastSec(lastSec: number): GetTransactionListRespTransactionInfoList {
        this['last_sec'] = lastSec;
        return this;
    }
    public set lastSec(lastSec: number  | undefined) {
        this['last_sec'] = lastSec;
    }
    public get lastSec(): number | undefined {
        return this['last_sec'];
    }
    public withWaitLocks(waitLocks: number): GetTransactionListRespTransactionInfoList {
        this['wait_locks'] = waitLocks;
        return this;
    }
    public set waitLocks(waitLocks: number  | undefined) {
        this['wait_locks'] = waitLocks;
    }
    public get waitLocks(): number | undefined {
        return this['wait_locks'];
    }
    public withHoldLocks(holdLocks: number): GetTransactionListRespTransactionInfoList {
        this['hold_locks'] = holdLocks;
        return this;
    }
    public set holdLocks(holdLocks: number  | undefined) {
        this['hold_locks'] = holdLocks;
    }
    public get holdLocks(): number | undefined {
        return this['hold_locks'];
    }
    public withOccurrenceTime(occurrenceTime: number): GetTransactionListRespTransactionInfoList {
        this['occurrence_time'] = occurrenceTime;
        return this;
    }
    public set occurrenceTime(occurrenceTime: number  | undefined) {
        this['occurrence_time'] = occurrenceTime;
    }
    public get occurrenceTime(): number | undefined {
        return this['occurrence_time'];
    }
    public withDetail(detail: string): GetTransactionListRespTransactionInfoList {
        this['detail'] = detail;
        return this;
    }
    public withCollectTime(collectTime: number): GetTransactionListRespTransactionInfoList {
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