import { GatewayId } from './GatewayId';
import { GatewayType } from './GatewayType';
import { GatewayTypeEnum } from './GatewayTypeEnum';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';


export class CreateSiteInformation {
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'gateway_type'?: GatewayTypeEnum;
    private 'gateway_id'?: string;
    public constructor(regionId?: string, projectId?: string, gatewayType?: GatewayTypeEnum, gatewayId?: string) { 
        this['region_id'] = regionId;
        this['project_id'] = projectId;
        this['gateway_type'] = gatewayType;
        this['gateway_id'] = gatewayId;
    }
    public withRegionId(regionId: string): CreateSiteInformation {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): CreateSiteInformation {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGatewayType(gatewayType: GatewayTypeEnum): CreateSiteInformation {
        this['gateway_type'] = gatewayType;
        return this;
    }
    public set gatewayType(gatewayType: GatewayTypeEnum  | undefined) {
        this['gateway_type'] = gatewayType;
    }
    public get gatewayType(): GatewayTypeEnum | undefined {
        return this['gateway_type'];
    }
    public withGatewayId(gatewayId: string): CreateSiteInformation {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
}