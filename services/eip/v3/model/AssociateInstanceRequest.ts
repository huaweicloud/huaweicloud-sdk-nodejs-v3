import { AssociateInstanceGlobalEipRequestBody } from './AssociateInstanceGlobalEipRequestBody';


export class AssociateInstanceRequest {
    private 'binding-instance-service'?: string;
    private 'global_eip_id'?: string;
    public body?: AssociateInstanceGlobalEipRequestBody;
    public constructor(globalEipId?: string) { 
        this['global_eip_id'] = globalEipId;
    }
    public withBindingInstanceService(bindingInstanceService: string): AssociateInstanceRequest {
        this['binding-instance-service'] = bindingInstanceService;
        return this;
    }
    public set bindingInstanceService(bindingInstanceService: string  | undefined) {
        this['binding-instance-service'] = bindingInstanceService;
    }
    public get bindingInstanceService(): string | undefined {
        return this['binding-instance-service'];
    }
    public withGlobalEipId(globalEipId: string): AssociateInstanceRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withBody(body: AssociateInstanceGlobalEipRequestBody): AssociateInstanceRequest {
        this['body'] = body;
        return this;
    }
}