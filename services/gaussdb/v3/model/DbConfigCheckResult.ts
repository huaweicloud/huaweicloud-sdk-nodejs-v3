

export class DbConfigCheckResult {
    private 'param_name'?: string;
    public value?: string;
    private 'check_result'?: DbConfigCheckResultCheckResultEnum | string;
    public constructor() { 
    }
    public withParamName(paramName: string): DbConfigCheckResult {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withValue(value: string): DbConfigCheckResult {
        this['value'] = value;
        return this;
    }
    public withCheckResult(checkResult: DbConfigCheckResultCheckResultEnum | string): DbConfigCheckResult {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: DbConfigCheckResultCheckResultEnum | string  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): DbConfigCheckResultCheckResultEnum | string | undefined {
        return this['check_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DbConfigCheckResultCheckResultEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
