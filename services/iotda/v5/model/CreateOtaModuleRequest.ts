import { CreateOtaModule } from './CreateOtaModule';


export class CreateOtaModuleRequest {
    private 'Instance-Id'?: string;
    public body?: CreateOtaModule;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateOtaModuleRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateOtaModule): CreateOtaModuleRequest {
        this['body'] = body;
        return this;
    }
}