import { CreateServerCertificateDTO } from './CreateServerCertificateDTO';


export class CreateServerCertificateRequest {
    private 'Instance-Id'?: string;
    public body?: CreateServerCertificateDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateServerCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateServerCertificateDTO): CreateServerCertificateRequest {
        this['body'] = body;
        return this;
    }
}