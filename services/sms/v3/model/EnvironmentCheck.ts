

export class EnvironmentCheck {
    public id: number;
    public params?: Array<string>;
    public name: string;
    public result: EnvironmentCheckResultEnum;
    private 'error_code'?: string | undefined;
    private 'error_or_warn'?: string | undefined;
    private 'error_params'?: string | undefined;
    public constructor(id?: any, name?: any, result?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['result'] = result;
    }
    public withId(id: number): EnvironmentCheck {
        this['id'] = id;
        return this;
    }
    public withParams(params: Array<string>): EnvironmentCheck {
        this['params'] = params;
        return this;
    }
    public withName(name: string): EnvironmentCheck {
        this['name'] = name;
        return this;
    }
    public withResult(result: EnvironmentCheckResultEnum): EnvironmentCheck {
        this['result'] = result;
        return this;
    }
    public withErrorCode(errorCode: string): EnvironmentCheck {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorOrWarn(errorOrWarn: string): EnvironmentCheck {
        this['error_or_warn'] = errorOrWarn;
        return this;
    }
    public set errorOrWarn(errorOrWarn: string | undefined) {
        this['error_or_warn'] = errorOrWarn;
    }
    public get errorOrWarn() {
        return this['error_or_warn'];
    }
    public withErrorParams(errorParams: string): EnvironmentCheck {
        this['error_params'] = errorParams;
        return this;
    }
    public set errorParams(errorParams: string | undefined) {
        this['error_params'] = errorParams;
    }
    public get errorParams() {
        return this['error_params'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentCheckResultEnum {
    OK = 'OK',
    WARN = 'WARN',
    ERROR = 'ERROR'
}
