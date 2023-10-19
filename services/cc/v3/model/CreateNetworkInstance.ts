import { CloudConnectionId } from './CloudConnectionId';
import { Description } from './Description';
import { InstanceDomainId } from './InstanceDomainId';
import { InstanceId } from './InstanceId';
import { NonRequiredName } from './NonRequiredName';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';


export class CreateNetworkInstance {
    public name?: string;
    public description?: string;
    private 'instance_id'?: string;
    private 'instance_domain_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'cloud_connection_id'?: string;
    public type?: CreateNetworkInstanceTypeEnum | string;
    public cidrs?: Array<string>;
    public constructor(instanceId?: string, projectId?: string, regionId?: string, cloudConnectionId?: string, type?: string, cidrs?: Array<string>) { 
        this['instance_id'] = instanceId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['cloud_connection_id'] = cloudConnectionId;
        this['type'] = type;
        this['cidrs'] = cidrs;
    }
    public withName(name: string): CreateNetworkInstance {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateNetworkInstance {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): CreateNetworkInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceDomainId(instanceDomainId: string): CreateNetworkInstance {
        this['instance_domain_id'] = instanceDomainId;
        return this;
    }
    public set instanceDomainId(instanceDomainId: string  | undefined) {
        this['instance_domain_id'] = instanceDomainId;
    }
    public get instanceDomainId(): string | undefined {
        return this['instance_domain_id'];
    }
    public withProjectId(projectId: string): CreateNetworkInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CreateNetworkInstance {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCloudConnectionId(cloudConnectionId: string): CreateNetworkInstance {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withType(type: CreateNetworkInstanceTypeEnum | string): CreateNetworkInstance {
        this['type'] = type;
        return this;
    }
    public withCidrs(cidrs: Array<string>): CreateNetworkInstance {
        this['cidrs'] = cidrs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNetworkInstanceTypeEnum {
    VPC = 'vpc',
    VGW = 'vgw'
}
