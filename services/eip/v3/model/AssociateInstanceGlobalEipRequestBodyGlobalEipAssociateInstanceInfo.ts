

export class AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
    public region?: string;
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'service_id'?: string;
    private 'service_type'?: string;
    public constructor() { 
    }
    public withRegion(region: string): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
        this['region'] = region;
        return this;
    }
    public withInstanceType(instanceType: string): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withServiceId(serviceId: string): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceType(serviceType: string): AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
}