import { UpdateOtaModule } from './UpdateOtaModule';


export class UpdateOtaModuleRequest {
    private 'Instance-Id'?: string;
    private 'module_id'?: string;
    public body?: UpdateOtaModule;
    public constructor(moduleId?: string) { 
        this['module_id'] = moduleId;
    }
    public withInstanceId(instanceId: string): UpdateOtaModuleRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withModuleId(moduleId: string): UpdateOtaModuleRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withBody(body: UpdateOtaModule): UpdateOtaModuleRequest {
        this['body'] = body;
        return this;
    }
}