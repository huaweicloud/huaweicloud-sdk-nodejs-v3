

export class ShowCertificateRequest {
    private 'Sp-Auth-Token'?: string;
    private 'Stage-Auth-Token'?: string;
    private 'Instance-Id'?: string;
    private 'certificate_id'?: string;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withSpAuthToken(spAuthToken: string): ShowCertificateRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string  | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken(): string | undefined {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): ShowCertificateRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string  | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken(): string | undefined {
        return this['Stage-Auth-Token'];
    }
    public withInstanceId(instanceId: string): ShowCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withCertificateId(certificateId: string): ShowCertificateRequest {
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