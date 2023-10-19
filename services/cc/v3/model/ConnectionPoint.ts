import { ConnectionPointTypeEnum } from './ConnectionPointTypeEnum';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';
import { SiteCode } from './SiteCode';
import { UUIDIdentifier } from './UUIDIdentifier';


export class ConnectionPoint {
    public id?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'site_code'?: string;
    private 'instance_id'?: string;
    public type?: ConnectionPointTypeEnum;
    public constructor(id?: string, projectId?: string, regionId?: string, siteCode?: string, instanceId?: string, type?: ConnectionPointTypeEnum) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['site_code'] = siteCode;
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withId(id: string): ConnectionPoint {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ConnectionPoint {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): ConnectionPoint {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSiteCode(siteCode: string): ConnectionPoint {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withInstanceId(instanceId: string): ConnectionPoint {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ConnectionPointTypeEnum): ConnectionPoint {
        this['type'] = type;
        return this;
    }
}