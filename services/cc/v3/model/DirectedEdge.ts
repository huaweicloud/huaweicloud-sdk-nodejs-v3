import { GatewayId } from './GatewayId';
import { GatewayType } from './GatewayType';
import { GatewayTypeEnum } from './GatewayTypeEnum';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';
import { SiteCode } from './SiteCode';
import { UUID64Identifier } from './UUID64Identifier';


export class DirectedEdge {
    public id?: string;
    private 'region_id'?: string;
    private 'gateway_id'?: string;
    private 'gateway_type'?: GatewayTypeEnum;
    private 'site_code'?: string;
    private 'project_id'?: string;
    public constructor(id?: string, regionId?: string, gatewayId?: string, gatewayType?: GatewayTypeEnum, siteCode?: string, projectId?: string) { 
        this['id'] = id;
        this['region_id'] = regionId;
        this['gateway_id'] = gatewayId;
        this['gateway_type'] = gatewayType;
        this['site_code'] = siteCode;
        this['project_id'] = projectId;
    }
    public withId(id: string): DirectedEdge {
        this['id'] = id;
        return this;
    }
    public withRegionId(regionId: string): DirectedEdge {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withGatewayId(gatewayId: string): DirectedEdge {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withGatewayType(gatewayType: GatewayTypeEnum): DirectedEdge {
        this['gateway_type'] = gatewayType;
        return this;
    }
    public set gatewayType(gatewayType: GatewayTypeEnum  | undefined) {
        this['gateway_type'] = gatewayType;
    }
    public get gatewayType(): GatewayTypeEnum | undefined {
        return this['gateway_type'];
    }
    public withSiteCode(siteCode: string): DirectedEdge {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withProjectId(projectId: string): DirectedEdge {
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