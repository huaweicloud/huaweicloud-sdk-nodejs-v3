

export class NetworkInstance {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    public status?: NetworkInstanceStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public type?: NetworkInstanceTypeEnum | string;
    private 'cloud_connection_id'?: string;
    private 'instance_id'?: string;
    private 'instance_domain_id'?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    public cidrs?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): NetworkInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NetworkInstance {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NetworkInstance {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): NetworkInstance {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStatus(status: NetworkInstanceStatusEnum | string): NetworkInstance {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): NetworkInstance {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NetworkInstance {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withType(type: NetworkInstanceTypeEnum | string): NetworkInstance {
        this['type'] = type;
        return this;
    }
    public withCloudConnectionId(cloudConnectionId: string): NetworkInstance {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withInstanceId(instanceId: string): NetworkInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceDomainId(instanceDomainId: string): NetworkInstance {
        this['instance_domain_id'] = instanceDomainId;
        return this;
    }
    public set instanceDomainId(instanceDomainId: string  | undefined) {
        this['instance_domain_id'] = instanceDomainId;
    }
    public get instanceDomainId(): string | undefined {
        return this['instance_domain_id'];
    }
    public withRegionId(regionId: string): NetworkInstance {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): NetworkInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCidrs(cidrs: Array<string>): NetworkInstance {
        this['cidrs'] = cidrs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NetworkInstanceStatusEnum {
    ACTIVE = 'ACTIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum NetworkInstanceTypeEnum {
    VPC = 'vpc',
    VGW = 'vgw'
}
