

export class ErrorCodeRedirectRules {
    private 'error_code': string | undefined;
    private 'target_code': string | undefined;
    private 'target_link': string | undefined;
    public constructor(errorCode?: any, targetCode?: any, targetLink?: any) { 
        this['error_code'] = errorCode;
        this['target_code'] = targetCode;
        this['target_link'] = targetLink;
    }
    public withErrorCode(errorCode: string): ErrorCodeRedirectRules {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withTargetCode(targetCode: string): ErrorCodeRedirectRules {
        this['target_code'] = targetCode;
        return this;
    }
    public set targetCode(targetCode: string | undefined) {
        this['target_code'] = targetCode;
    }
    public get targetCode() {
        return this['target_code'];
    }
    public withTargetLink(targetLink: string): ErrorCodeRedirectRules {
        this['target_link'] = targetLink;
        return this;
    }
    public set targetLink(targetLink: string | undefined) {
        this['target_link'] = targetLink;
    }
    public get targetLink() {
        return this['target_link'];
    }
}