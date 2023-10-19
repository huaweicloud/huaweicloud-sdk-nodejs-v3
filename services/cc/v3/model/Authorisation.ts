import { CloudConnectionId } from './CloudConnectionId';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { InstanceId } from './InstanceId';
import { Name } from './Name';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';
import { UUIDIdentifier } from './UUIDIdentifier';
import { UpdatedAt } from './UpdatedAt';


export class Authorisation {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'domain_id'?: string;
    private 'cloud_connection_id'?: string;
    public status?: string;
    private 'instance_type'?: string;
    private 'cloud_connection_domain_id'?: string;
    public constructor(id?: string, name?: string, instanceId?: string, projectId?: string, regionId?: string, createdAt?: Date, updatedAt?: Date, domainId?: string, cloudConnectionId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['instance_id'] = instanceId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['domain_id'] = domainId;
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public withId(id: string): Authorisation {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Authorisation {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Authorisation {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): Authorisation {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): Authorisation {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): Authorisation {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCreatedAt(createdAt: Date): Authorisation {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Authorisation {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): Authorisation {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCloudConnectionId(cloudConnectionId: string): Authorisation {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withStatus(status: string): Authorisation {
        this['status'] = status;
        return this;
    }
    public withInstanceType(instanceType: string): Authorisation {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withCloudConnectionDomainId(cloudConnectionDomainId: string): Authorisation {
        this['cloud_connection_domain_id'] = cloudConnectionDomainId;
        return this;
    }
    public set cloudConnectionDomainId(cloudConnectionDomainId: string  | undefined) {
        this['cloud_connection_domain_id'] = cloudConnectionDomainId;
    }
    public get cloudConnectionDomainId(): string | undefined {
        return this['cloud_connection_domain_id'];
    }
}