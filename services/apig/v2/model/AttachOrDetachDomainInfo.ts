

export class AttachOrDetachDomainInfo {
    public domain?: string;
    private 'instance_ids'?: Array<string>;
    private 'verified_client_certificate_enabled'?: boolean;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): AttachOrDetachDomainInfo {
        this['domain'] = domain;
        return this;
    }
    public withInstanceIds(instanceIds: Array<string>): AttachOrDetachDomainInfo {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): AttachOrDetachDomainInfo {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
        return this;
    }
    public set verifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean  | undefined) {
        this['verified_client_certificate_enabled'] = verifiedClientCertificateEnabled;
    }
    public get verifiedClientCertificateEnabled(): boolean | undefined {
        return this['verified_client_certificate_enabled'];
    }
}