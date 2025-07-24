

export class CaseExecuteVo {
    private 'execute_rate'?: string;
    private 'executed_number'?: number;
    private 'not_executed_number'?: number;
    public constructor() { 
    }
    public withExecuteRate(executeRate: string): CaseExecuteVo {
        this['execute_rate'] = executeRate;
        return this;
    }
    public set executeRate(executeRate: string  | undefined) {
        this['execute_rate'] = executeRate;
    }
    public get executeRate(): string | undefined {
        return this['execute_rate'];
    }
    public withExecutedNumber(executedNumber: number): CaseExecuteVo {
        this['executed_number'] = executedNumber;
        return this;
    }
    public set executedNumber(executedNumber: number  | undefined) {
        this['executed_number'] = executedNumber;
    }
    public get executedNumber(): number | undefined {
        return this['executed_number'];
    }
    public withNotExecutedNumber(notExecutedNumber: number): CaseExecuteVo {
        this['not_executed_number'] = notExecutedNumber;
        return this;
    }
    public set notExecutedNumber(notExecutedNumber: number  | undefined) {
        this['not_executed_number'] = notExecutedNumber;
    }
    public get notExecutedNumber(): number | undefined {
        return this['not_executed_number'];
    }
}