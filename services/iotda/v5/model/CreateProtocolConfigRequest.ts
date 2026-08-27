import { CreateProtocolConfigDTO } from './CreateProtocolConfigDTO';


export class CreateProtocolConfigRequest {
    private 'Instance-Id'?: string;
    public body?: CreateProtocolConfigDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateProtocolConfigRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateProtocolConfigDTO): CreateProtocolConfigRequest {
        this['body'] = body;
        return this;
    }
}