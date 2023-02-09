

export class BatchCopyResultVo {
    public reason?: string;
    public status: BatchCopyResultVoStatusEnum;
    private 'domain_name': string | undefined;
    public constructor(status?: any, domainName?: any) { 
        this['status'] = status;
        this['domain_name'] = domainName;
    }
    public withReason(reason: string): BatchCopyResultVo {
        this['reason'] = reason;
        return this;
    }
    public withStatus(status: BatchCopyResultVoStatusEnum): BatchCopyResultVo {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): BatchCopyResultVo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCopyResultVoStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
