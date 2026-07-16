

export class RecoverRecord {
    private 'recover_start_at'?: number;
    private 'recover_end_at'?: number;
    public recover?: string;
    private 'fault_scenario'?: string;
    public reason?: string;
    private 'related_task'?: string;
    private 'recover_result'?: string;
    public constructor() { 
    }
    public withRecoverStartAt(recoverStartAt: number): RecoverRecord {
        this['recover_start_at'] = recoverStartAt;
        return this;
    }
    public set recoverStartAt(recoverStartAt: number  | undefined) {
        this['recover_start_at'] = recoverStartAt;
    }
    public get recoverStartAt(): number | undefined {
        return this['recover_start_at'];
    }
    public withRecoverEndAt(recoverEndAt: number): RecoverRecord {
        this['recover_end_at'] = recoverEndAt;
        return this;
    }
    public set recoverEndAt(recoverEndAt: number  | undefined) {
        this['recover_end_at'] = recoverEndAt;
    }
    public get recoverEndAt(): number | undefined {
        return this['recover_end_at'];
    }
    public withRecover(recover: string): RecoverRecord {
        this['recover'] = recover;
        return this;
    }
    public withFaultScenario(faultScenario: string): RecoverRecord {
        this['fault_scenario'] = faultScenario;
        return this;
    }
    public set faultScenario(faultScenario: string  | undefined) {
        this['fault_scenario'] = faultScenario;
    }
    public get faultScenario(): string | undefined {
        return this['fault_scenario'];
    }
    public withReason(reason: string): RecoverRecord {
        this['reason'] = reason;
        return this;
    }
    public withRelatedTask(relatedTask: string): RecoverRecord {
        this['related_task'] = relatedTask;
        return this;
    }
    public set relatedTask(relatedTask: string  | undefined) {
        this['related_task'] = relatedTask;
    }
    public get relatedTask(): string | undefined {
        return this['related_task'];
    }
    public withRecoverResult(recoverResult: string): RecoverRecord {
        this['recover_result'] = recoverResult;
        return this;
    }
    public set recoverResult(recoverResult: string  | undefined) {
        this['recover_result'] = recoverResult;
    }
    public get recoverResult(): string | undefined {
        return this['recover_result'];
    }
}