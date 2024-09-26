import { Asn } from './Asn';
import { EnterpriseRouterId } from './EnterpriseRouterId';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';
import { SiteCode } from './SiteCode';
import { UUID64Identifier } from './UUID64Identifier';


export class CentralNetworkErInstance {
    public id?: string;
    private 'enterprise_router_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public asn?: number;
    private 'site_code'?: string;
    public constructor(id?: string, enterpriseRouterId?: string, projectId?: string, regionId?: string, asn?: number, siteCode?: string) { 
        this['id'] = id;
        this['enterprise_router_id'] = enterpriseRouterId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['asn'] = asn;
        this['site_code'] = siteCode;
    }
    public withId(id: string): CentralNetworkErInstance {
        this['id'] = id;
        return this;
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): CentralNetworkErInstance {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withProjectId(projectId: string): CentralNetworkErInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CentralNetworkErInstance {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAsn(asn: number): CentralNetworkErInstance {
        this['asn'] = asn;
        return this;
    }
    public withSiteCode(siteCode: string): CentralNetworkErInstance {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
}