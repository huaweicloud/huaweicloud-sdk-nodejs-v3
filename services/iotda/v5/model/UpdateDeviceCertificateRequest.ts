import { UpdateDeviceCertificate } from './UpdateDeviceCertificate';


export class UpdateDeviceCertificateRequest {
    private 'Instance-Id'?: string;
    private 'certificate_id'?: string;
    public body?: UpdateDeviceCertificate;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withInstanceId(instanceId: string): UpdateDeviceCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withCertificateId(certificateId: string): UpdateDeviceCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: UpdateDeviceCertificate): UpdateDeviceCertificateRequest {
        this['body'] = body;
        return this;
    }
}