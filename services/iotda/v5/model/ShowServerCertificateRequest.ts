

export class ShowServerCertificateRequest {
    private 'Instance-Id'?: string;
    private 'server_certificate_id'?: string;
    public constructor(serverCertificateId?: string) { 
        this['server_certificate_id'] = serverCertificateId;
    }
    public withInstanceId(instanceId: string): ShowServerCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withServerCertificateId(serverCertificateId: string): ShowServerCertificateRequest {
        this['server_certificate_id'] = serverCertificateId;
        return this;
    }
    public set serverCertificateId(serverCertificateId: string  | undefined) {
        this['server_certificate_id'] = serverCertificateId;
    }
    public get serverCertificateId(): string | undefined {
        return this['server_certificate_id'];
    }
}