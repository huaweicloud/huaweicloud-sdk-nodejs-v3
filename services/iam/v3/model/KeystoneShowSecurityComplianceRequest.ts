

export class KeystoneShowSecurityComplianceRequest {
    private 'domain_id': string | undefined;
    public constructor(domainId: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): KeystoneShowSecurityComplianceRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
}