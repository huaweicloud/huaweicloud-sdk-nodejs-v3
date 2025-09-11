

export class AuditUpgradeStep {
    public msg?: string;
    private 'result_code'?: string;
    private 'step_name'?: string;
    public time?: string;
    public constructor() { 
    }
    public withMsg(msg: string): AuditUpgradeStep {
        this['msg'] = msg;
        return this;
    }
    public withResultCode(resultCode: string): AuditUpgradeStep {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withStepName(stepName: string): AuditUpgradeStep {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withTime(time: string): AuditUpgradeStep {
        this['time'] = time;
        return this;
    }
}