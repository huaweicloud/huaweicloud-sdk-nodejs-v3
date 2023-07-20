import { VerifyCertificateDTO } from './VerifyCertificateDTO';


export class CheckCertificateRequest {
    private 'Sp-Auth-Token'?: string;
    private 'Stage-Auth-Token'?: string;
    private 'Instance-Id'?: string;
    private 'certificate_id'?: string;
    private 'action_id'?: string;
    public body?: VerifyCertificateDTO;
    public constructor(certificateId?: string, actionId?: string) { 
        this['certificate_id'] = certificateId;
        this['action_id'] = actionId;
    }
    public withSpAuthToken(spAuthToken: string): CheckCertificateRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string  | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken(): string | undefined {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): CheckCertificateRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string  | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken(): string | undefined {
        return this['Stage-Auth-Token'];
    }
    public withInstanceId(instanceId: string): CheckCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withCertificateId(certificateId: string): CheckCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withActionId(actionId: string): CheckCertificateRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withBody(body: VerifyCertificateDTO): CheckCertificateRequest {
        this['body'] = body;
        return this;
    }
}