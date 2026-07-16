import { RecoverRecord } from './RecoverRecord';


export class RunningRecord {
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'xpu_start_at'?: number;
    private 'start_type'?: string;
    private 'end_reason'?: string;
    private 'end_related_task'?: string;
    private 'end_recover'?: string;
    private 'end_recover_before_downgrade'?: string;
    private 'recover_records'?: Array<RecoverRecord>;
    public constructor() { 
    }
    public withStartAt(startAt: number): RunningRecord {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): RunningRecord {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withXpuStartAt(xpuStartAt: number): RunningRecord {
        this['xpu_start_at'] = xpuStartAt;
        return this;
    }
    public set xpuStartAt(xpuStartAt: number  | undefined) {
        this['xpu_start_at'] = xpuStartAt;
    }
    public get xpuStartAt(): number | undefined {
        return this['xpu_start_at'];
    }
    public withStartType(startType: string): RunningRecord {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
    public withEndReason(endReason: string): RunningRecord {
        this['end_reason'] = endReason;
        return this;
    }
    public set endReason(endReason: string  | undefined) {
        this['end_reason'] = endReason;
    }
    public get endReason(): string | undefined {
        return this['end_reason'];
    }
    public withEndRelatedTask(endRelatedTask: string): RunningRecord {
        this['end_related_task'] = endRelatedTask;
        return this;
    }
    public set endRelatedTask(endRelatedTask: string  | undefined) {
        this['end_related_task'] = endRelatedTask;
    }
    public get endRelatedTask(): string | undefined {
        return this['end_related_task'];
    }
    public withEndRecover(endRecover: string): RunningRecord {
        this['end_recover'] = endRecover;
        return this;
    }
    public set endRecover(endRecover: string  | undefined) {
        this['end_recover'] = endRecover;
    }
    public get endRecover(): string | undefined {
        return this['end_recover'];
    }
    public withEndRecoverBeforeDowngrade(endRecoverBeforeDowngrade: string): RunningRecord {
        this['end_recover_before_downgrade'] = endRecoverBeforeDowngrade;
        return this;
    }
    public set endRecoverBeforeDowngrade(endRecoverBeforeDowngrade: string  | undefined) {
        this['end_recover_before_downgrade'] = endRecoverBeforeDowngrade;
    }
    public get endRecoverBeforeDowngrade(): string | undefined {
        return this['end_recover_before_downgrade'];
    }
    public withRecoverRecords(recoverRecords: Array<RecoverRecord>): RunningRecord {
        this['recover_records'] = recoverRecords;
        return this;
    }
    public set recoverRecords(recoverRecords: Array<RecoverRecord>  | undefined) {
        this['recover_records'] = recoverRecords;
    }
    public get recoverRecords(): Array<RecoverRecord> | undefined {
        return this['recover_records'];
    }
}