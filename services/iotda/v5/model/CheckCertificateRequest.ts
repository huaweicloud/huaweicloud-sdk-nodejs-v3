import { VerifyCertificateDTO } from './VerifyCertificateDTO';


export class CheckCertificateRequest {
    private 'Instance-Id'?: string | undefined;
    private 'certificate_id': string | undefined;
    private 'action_id': string | undefined;
    public body?: VerifyCertificateDTO;
    public constructor(certificateId?: any, actionId?: any) { 
        this['certificate_id'] = certificateId;
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): CheckCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withCertificateId(certificateId: string): CheckCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId() {
        return this['certificate_id'];
    }
    public withActionId(actionId: string): CheckCertificateRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId() {
        return this['action_id'];
    }
    public withBody(body: VerifyCertificateDTO): CheckCertificateRequest {
        this['body'] = body;
        return this;
    }
}