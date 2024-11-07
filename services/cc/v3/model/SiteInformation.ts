import { Asn } from './Asn';
import { GatewayId } from './GatewayId';
import { GatewayType } from './GatewayType';
import { GatewayTypeEnum } from './GatewayTypeEnum';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';
import { SiteCode } from './SiteCode';


export class SiteInformation {
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'gateway_type'?: GatewayTypeEnum;
    private 'gateway_id'?: string;
    private 'site_code'?: string;
    public asn?: number;
    public constructor(regionId?: string, projectId?: string, gatewayType?: GatewayTypeEnum, gatewayId?: string, siteCode?: string, asn?: number) { 
        this['region_id'] = regionId;
        this['project_id'] = projectId;
        this['gateway_type'] = gatewayType;
        this['gateway_id'] = gatewayId;
        this['site_code'] = siteCode;
        this['asn'] = asn;
    }
    public withRegionId(regionId: string): SiteInformation {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): SiteInformation {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGatewayType(gatewayType: GatewayTypeEnum): SiteInformation {
        this['gateway_type'] = gatewayType;
        return this;
    }
    public set gatewayType(gatewayType: GatewayTypeEnum  | undefined) {
        this['gateway_type'] = gatewayType;
    }
    public get gatewayType(): GatewayTypeEnum | undefined {
        return this['gateway_type'];
    }
    public withGatewayId(gatewayId: string): SiteInformation {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withSiteCode(siteCode: string): SiteInformation {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withAsn(asn: number): SiteInformation {
        this['asn'] = asn;
        return this;
    }
}