

export class SetCertStatusRequest {
    private 'cert_id'?: string;
    public status?: string;
    public constructor(certId?: string, status?: string) { 
        this['cert_id'] = certId;
        this['status'] = status;
    }
    public withCertId(certId: string): SetCertStatusRequest {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withStatus(status: string): SetCertStatusRequest {
        this['status'] = status;
        return this;
    }
}