import { CreateCertificateDTO } from './CreateCertificateDTO';


export class AddCertificateRequest {
    private 'Sp-Auth-Token'?: string | undefined;
    private 'Stage-Auth-Token'?: string | undefined;
    private 'Instance-Id'?: string | undefined;
    public body?: CreateCertificateDTO;
    public constructor() { 
    }
    public withSpAuthToken(spAuthToken: string): AddCertificateRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken() {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): AddCertificateRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken() {
        return this['Stage-Auth-Token'];
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