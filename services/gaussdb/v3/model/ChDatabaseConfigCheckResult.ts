

export class ChDatabaseConfigCheckResult {
    private 'param_name'?: string;
    public value?: string;
    private 'check_result'?: string;
    public constructor(paramName?: string, value?: string, checkResult?: string) { 
        this['param_name'] = paramName;
        this['value'] = value;
        this['check_result'] = checkResult;
    }
    public withParamName(paramName: string): ChDatabaseConfigCheckResult {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withValue(value: string): ChDatabaseConfigCheckResult {
        this['value'] = value;
        return this;
    }
    public withCheckResult(checkResult: string): ChDatabaseConfigCheckResult {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: string  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): string | undefined {
        return this['check_result'];
    }
}