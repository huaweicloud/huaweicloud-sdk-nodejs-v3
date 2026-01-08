

export class DeleteCertRequest {
    private 'cert_id'?: string;
    public constructor(certId?: string) { 
        this['cert_id'] = certId;
    }
    public withCertId(certId: string): DeleteCertRequest {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
}