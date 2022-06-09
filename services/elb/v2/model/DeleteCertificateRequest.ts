

export class DeleteCertificateRequest {
    private 'certificate_id': string | undefined;
    public constructor(certificateId?: any) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): DeleteCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId() {
        return this['certificate_id'];
    }
}