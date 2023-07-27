

export class DisassociateCertificateV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    private 'domain_id'?: string;
    private 'certificate_id'?: string;
    public constructor(instanceId?: string, groupId?: string, domainId?: string, certificateId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
        this['domain_id'] = domainId;
        this['certificate_id'] = certificateId;
    }
    public withInstanceId(instanceId: string): DisassociateCertificateV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): DisassociateCertificateV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDomainId(domainId: string): DisassociateCertificateV2Request {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCertificateId(certificateId: string): DisassociateCertificateV2Request {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
}