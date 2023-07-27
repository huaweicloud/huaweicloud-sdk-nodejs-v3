

export class AttachOrDetachCertsReqBody {
    private 'certificate_ids'?: Array<string>;
    private 'verified_client_certificate_enabled'?: boolean;
    public constructor(certificateIds?: Array<string>) { 
        this['certificate_ids'] = certificateIds;
    }
    public withCertificateIds(certificateIds: Array<string>): AttachOrDetachCertsReqBody {
        this['certificate_ids'] = certificateIds;
        return this;
    }
    public set certificateIds(certificateIds: Array<string>  | undefined) {
        this['certificate_ids'] = certificateIds;
    }
    public get certificateIds(): Array<string> | undefined {
        return this['certificate_ids'];
    }
    public withVerifiedClientCertificateEnabled(verifiedClientCertificateEnabled: boolean): AttachOrDetachCertsReqBody {
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