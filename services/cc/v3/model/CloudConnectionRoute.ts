import { CloudConnectionId } from './CloudConnectionId';
import { DomainId } from './DomainId';
import { InstanceId } from './InstanceId';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';
import { UUIDIdentifier } from './UUIDIdentifier';


export class CloudConnectionRoute {
    public id?: string;
    private 'cloud_connection_id'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public type?: CloudConnectionRouteTypeEnum | string;
    public destination?: string;
    public constructor(id?: string, cloudConnectionId?: string, domainId?: string, instanceId?: string, projectId?: string, regionId?: string) { 
        this['id'] = id;
        this['cloud_connection_id'] = cloudConnectionId;
        this['domain_id'] = domainId;
        this['instance_id'] = instanceId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
    }
    public withId(id: string): CloudConnectionRoute {
        this['id'] = id;
        return this;
    }
    public withCloudConnectionId(cloudConnectionId: string): CloudConnectionRoute {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withDomainId(domainId: string): CloudConnectionRoute {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): CloudConnectionRoute {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): CloudConnectionRoute {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CloudConnectionRoute {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withType(type: CloudConnectionRouteTypeEnum | string): CloudConnectionRoute {
        this['type'] = type;
        return this;
    }
    public withDestination(destination: string): CloudConnectionRoute {
        this['destination'] = destination;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloudConnectionRouteTypeEnum {
    VPC = 'vpc',
    VGW = 'vgw'
}
