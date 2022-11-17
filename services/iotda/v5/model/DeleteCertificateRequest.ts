

export class DeleteCertificateRequest {
    private 'Sp-Auth-Token'?: string | undefined;
    private 'Stage-Auth-Token'?: string | undefined;
    private 'Instance-Id'?: string | undefined;
    private 'certificate_id': string | undefined;
    public constructor(certificateId?: any) { 
        this['certificate_id'] = certificateId;
    }
    public withSpAuthToken(spAuthToken: string): DeleteCertificateRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken() {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): DeleteCertificateRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken() {
        return this['Stage-Auth-Token'];
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