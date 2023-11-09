import { InstanceModify } from './InstanceModify';


export class ChangeInstanceRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    private 'instance_id'?: string;
    public body?: InstanceModify;
    public constructor(applicationId?: string, componentId?: string, instanceId?: string) { 
        this['application_id'] = applicationId;
        this['component_id'] = componentId;
        this['instance_id'] = instanceId;
    }
    public withApplicationId(applicationId: string): ChangeInstanceRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ChangeInstanceRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withInstanceId(instanceId: string): ChangeInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: InstanceModify): ChangeInstanceRequest {
        this['body'] = body;
        return this;
    }
}