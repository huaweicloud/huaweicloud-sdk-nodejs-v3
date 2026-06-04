

export class ErrorCodeRedirectRules {
    private 'error_code'?: number;
    private 'execution_mode'?: string;
    private 'target_code'?: number;
    private 'target_link'?: string;
    public constructor(errorCode?: number, targetCode?: number, targetLink?: string) { 
        this['error_code'] = errorCode;
        this['target_code'] = targetCode;
        this['target_link'] = targetLink;
    }
    public withErrorCode(errorCode: number): ErrorCodeRedirectRules {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: number  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): number | undefined {
        return this['error_code'];
    }
    public withExecutionMode(executionMode: string): ErrorCodeRedirectRules {
        this['execution_mode'] = executionMode;
        return this;
    }
    public set executionMode(executionMode: string  | undefined) {
        this['execution_mode'] = executionMode;
    }
    public get executionMode(): string | undefined {
        return this['execution_mode'];
    }
    public withTargetCode(targetCode: number): ErrorCodeRedirectRules {
        this['target_code'] = targetCode;
        return this;
    }
    public set targetCode(targetCode: number  | undefined) {
        this['target_code'] = targetCode;
    }
    public get targetCode(): number | undefined {
        return this['target_code'];
    }
    public withTargetLink(targetLink: string): ErrorCodeRedirectRules {
        this['target_link'] = targetLink;
        return this;
    }
    public set targetLink(targetLink: string  | undefined) {
        this['target_link'] = targetLink;
    }
    public get targetLink(): string | undefined {
        return this['target_link'];
    }
}