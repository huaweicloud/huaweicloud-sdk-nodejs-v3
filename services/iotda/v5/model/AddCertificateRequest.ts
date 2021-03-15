import { CreateCertificateDTO } from './CreateCertificateDTO';


export class AddCertificateRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: CreateCertificateDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: CreateCertificateDTO): AddCertificateRequest {
        this['body'] = body;
        return this;
    }
}