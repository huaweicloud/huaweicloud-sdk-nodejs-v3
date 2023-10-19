import { CloudConnectionId } from './CloudConnectionId';
import { Description } from './Description';
import { InstanceId } from './InstanceId';
import { NonRequiredName } from './NonRequiredName';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';


export class CreateAuthorisation {
    public name?: string;
    public description?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'cloud_connection_id'?: string;
    private 'instance_type'?: CreateAuthorisationInstanceTypeEnum | string;
    private 'cloud_connection_domain_id'?: string;
    public constructor(instanceId?: string, projectId?: string, regionId?: string, cloudConnectionId?: string, instanceType?: string, cloudConnectionDomainId?: string) { 
        this['instance_id'] = instanceId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['cloud_connection_id'] = cloudConnectionId;
        this['instance_type'] = instanceType;
        this['cloud_connection_domain_id'] = cloudConnectionDomainId;
    }
    public withName(name: string): CreateAuthorisation {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAuthorisation {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): CreateAuthorisation {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): CreateAuthorisation {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CreateAuthorisation {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCloudConnectionId(cloudConnectionId: string): CreateAuthorisation {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withInstanceType(instanceType: CreateAuthorisationInstanceTypeEnum | string): CreateAuthorisation {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: CreateAuthorisationInstanceTypeEnum | string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): CreateAuthorisationInstanceTypeEnum | string | undefined {
        return this['instance_type'];
    }
    public withCloudConnectionDomainId(cloudConnectionDomainId: string): CreateAuthorisation {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateAuthorisationInstanceTypeEnum {
    VPC = 'vpc'
}
