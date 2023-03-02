

export class ErrorCodeRedirectRules {
    private 'error_code': number | undefined;
    private 'target_code': number | undefined;
    private 'target_link': string | undefined;
    public constructor(errorCode?: any, targetCode?: any, targetLink?: any) { 
        this['error_code'] = errorCode;
        this['target_code'] = targetCode;
        this['target_link'] = targetLink;
    }
    public withErrorCode(errorCode: number): ErrorCodeRedirectRules {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: number | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withTargetCode(targetCode: number): ErrorCodeRedirectRules {
        this['target_code'] = targetCode;
        return this;
    }
    public set targetCode(targetCode: number | undefined) {
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