

export class Permission {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: string;
    private 'created_at'?: Date;
    private 'domain_id'?: string;
    private 'cloud_connection_id'?: string;
    private 'instance_id'?: string;
    private 'instance_type'?: string;
    private 'instance_domain_id'?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Permission {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Permission {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Permission {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): Permission {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): Permission {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDomainId(domainId: string): Permission {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCloudConnectionId(cloudConnectionId: string): Permission {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withInstanceId(instanceId: string): Permission {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): Permission {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceDomainId(instanceDomainId: string): Permission {
        this['instance_domain_id'] = instanceDomainId;
        return this;
    }
    public set instanceDomainId(instanceDomainId: string  | undefined) {
        this['instance_domain_id'] = instanceDomainId;
    }
    public get instanceDomainId(): string | undefined {
        return this['instance_domain_id'];
    }
    public withRegionId(regionId: string): Permission {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): Permission {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}