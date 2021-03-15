

export class DeleteCertificateRequest {
    private 'Instance-Id'?: string | undefined;
    private 'certificate_id': string | undefined;
    public constructor(certificateId: any) { 
        this['certificate_id'] = certificateId;
    }
    public withInstanceId(instanceId: string): DeleteCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
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