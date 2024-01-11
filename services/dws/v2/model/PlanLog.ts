

export class PlanLog {
    private 'exec_time'?: string;
    private 'stage_info'?: string;
    private 'exec_result'?: number;
    private 'exec_log'?: string;
    public constructor(execTime?: string, stageInfo?: string, execResult?: number, execLog?: string) { 
        this['exec_time'] = execTime;
        this['stage_info'] = stageInfo;
        this['exec_result'] = execResult;
        this['exec_log'] = execLog;
    }
    public withExecTime(execTime: string): PlanLog {
        this['exec_time'] = execTime;
        return this;
    }
    public set execTime(execTime: string  | undefined) {
        this['exec_time'] = execTime;
    }
    public get execTime(): string | undefined {
        return this['exec_time'];
    }
    public withStageInfo(stageInfo: string): PlanLog {
        this['stage_info'] = stageInfo;
        return this;
    }
    public set stageInfo(stageInfo: string  | undefined) {
        this['stage_info'] = stageInfo;
    }
    public get stageInfo(): string | undefined {
        return this['stage_info'];
    }
    public withExecResult(execResult: number): PlanLog {
        this['exec_result'] = execResult;
        return this;
    }
    public set execResult(execResult: number  | undefined) {
        this['exec_result'] = execResult;
    }
    public get execResult(): number | undefined {
        return this['exec_result'];
    }
    public withExecLog(execLog: string): PlanLog {
        this['exec_log'] = execLog;
        return this;
    }
    public set execLog(execLog: string  | undefined) {
        this['exec_log'] = execLog;
    }
    public get execLog(): string | undefined {
        return this['exec_log'];
    }
}