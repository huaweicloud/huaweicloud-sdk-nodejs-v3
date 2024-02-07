

export class InstanceInfo {
    public region?: string;
    public quarkVpcEndpoint?: string;
    private 'project_id'?: string;
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    private 'service_type'?: string;
    private 'service_id'?: string;
    private 'public_border_group'?: string;
    private 'instance_site'?: string;
    public constructor() { 
    }
    public withRegion(region: string): InstanceInfo {
        this['region'] = region;
        return this;
    }
    public withQuarkVpcEndpoint(quarkVpcEndpoint: string): InstanceInfo {
        this['quarkVpcEndpoint'] = quarkVpcEndpoint;
        return this;
    }
    public withProjectId(projectId: string): InstanceInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceType(instanceType: string): InstanceInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): InstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withServiceType(serviceType: string): InstanceInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withServiceId(serviceId: string): InstanceInfo {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): InstanceInfo {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withInstanceSite(instanceSite: string): InstanceInfo {
        this['instance_site'] = instanceSite;
        return this;
    }
    public set instanceSite(instanceSite: string  | undefined) {
        this['instance_site'] = instanceSite;
    }
    public get instanceSite(): string | undefined {
        return this['instance_site'];
    }
}