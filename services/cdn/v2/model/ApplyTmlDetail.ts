

export class ApplyTmlDetail {
    public status?: string;
    private 'domain_name'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withStatus(status: string): ApplyTmlDetail {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): ApplyTmlDetail {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withErrorMsg(errorMsg: string): ApplyTmlDetail {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}