

export class UpgradeInstanceReq {
    private 'is_schedule'?: boolean;
    private 'execute_at'?: number;
    public constructor() { 
    }
    public withIsSchedule(isSchedule: boolean): UpgradeInstanceReq {
        this['is_schedule'] = isSchedule;
        return this;
    }
    public set isSchedule(isSchedule: boolean  | undefined) {
        this['is_schedule'] = isSchedule;
    }
    public get isSchedule(): boolean | undefined {
        return this['is_schedule'];
    }
    public withExecuteAt(executeAt: number): UpgradeInstanceReq {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
}