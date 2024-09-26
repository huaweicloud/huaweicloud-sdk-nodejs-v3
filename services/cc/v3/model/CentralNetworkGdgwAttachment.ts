import { AutoAssociateRouteEnabled } from './AutoAssociateRouteEnabled';
import { AutoPropagateRouteEnabled } from './AutoPropagateRouteEnabled';
import { BandwidthSize } from './BandwidthSize';
import { BandwidthType } from './BandwidthType';
import { BandwidthTypeEnum } from './BandwidthTypeEnum';
import { CentralNetworkConnectionState } from './CentralNetworkConnectionState';
import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { CentralNetworkId } from './CentralNetworkId';
import { CentralNetworkPlaneId } from './CentralNetworkPlaneId';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseRouterAttachmentId } from './EnterpriseRouterAttachmentId';
import { EnterpriseRouterId } from './EnterpriseRouterId';
import { EnterpriseRouterProjectId } from './EnterpriseRouterProjectId';
import { EnterpriseRouterRegionId } from './EnterpriseRouterRegionId';
import { EnterpriseRouterSiteCode } from './EnterpriseRouterSiteCode';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';
import { GlobalDcGatewayId } from './GlobalDcGatewayId';
import { GlobalDcGatewayPeerLinkId } from './GlobalDcGatewayPeerLinkId';
import { GlobalDcGatewayProjectId } from './GlobalDcGatewayProjectId';
import { GlobalDcGatewayRegionId } from './GlobalDcGatewayRegionId';
import { IsFrozen } from './IsFrozen';
import { Name } from './Name';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CentralNetworkGdgwAttachment {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    public state?: CentralNetworkConnectionStateEnum;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'central_network_id'?: string;
    private 'central_network_plane_id'?: string;
    private 'global_connection_bandwidth_id'?: string;
    private 'bandwidth_type'?: BandwidthTypeEnum;
    private 'bandwidth_size'?: number;
    private 'is_frozen'?: boolean;
    private 'enterprise_router_id'?: string;
    private 'enterprise_router_project_id'?: string;
    private 'enterprise_router_region_id'?: string;
    private 'enterprise_router_attachment_id'?: string;
    private 'global_dc_gateway_peer_link_id'?: string;
    private 'global_dc_gateway_id'?: string;
    private 'global_dc_gateway_project_id'?: string;
    private 'global_dc_gateway_region_id'?: string;
    private 'enterprise_router_site_code'?: string;
    private 'global_dc_gateway_site_code'?: string;
    public constructor(id?: string, name?: string, domainId?: string, state?: CentralNetworkConnectionStateEnum, createdAt?: Date, updatedAt?: Date, centralNetworkId?: string, centralNetworkPlaneId?: string, bandwidthType?: BandwidthTypeEnum, isFrozen?: boolean, enterpriseRouterId?: string, enterpriseRouterProjectId?: string, enterpriseRouterRegionId?: string, globalDcGatewayId?: string, globalDcGatewayProjectId?: string, globalDcGatewayRegionId?: string, enterpriseRouterSiteCode?: string, globalDcGatewaySiteCode?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['domain_id'] = domainId;
        this['state'] = state;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['central_network_id'] = centralNetworkId;
        this['central_network_plane_id'] = centralNetworkPlaneId;
        this['bandwidth_type'] = bandwidthType;
        this['is_frozen'] = isFrozen;
        this['enterprise_router_id'] = enterpriseRouterId;
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        this['global_dc_gateway_id'] = globalDcGatewayId;
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
        this['global_dc_gateway_site_code'] = globalDcGatewaySiteCode;
    }
    public withId(id: string): CentralNetworkGdgwAttachment {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CentralNetworkGdgwAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CentralNetworkGdgwAttachment {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CentralNetworkGdgwAttachment {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withState(state: CentralNetworkConnectionStateEnum): CentralNetworkGdgwAttachment {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): CentralNetworkGdgwAttachment {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CentralNetworkGdgwAttachment {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withCentralNetworkId(centralNetworkId: string): CentralNetworkGdgwAttachment {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CentralNetworkGdgwAttachment {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): CentralNetworkGdgwAttachment {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): CentralNetworkGdgwAttachment {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
    public withBandwidthSize(bandwidthSize: number): CentralNetworkGdgwAttachment {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withIsFrozen(isFrozen: boolean): CentralNetworkGdgwAttachment {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): CentralNetworkGdgwAttachment {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withEnterpriseRouterProjectId(enterpriseRouterProjectId: string): CentralNetworkGdgwAttachment {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        return this;
    }
    public set enterpriseRouterProjectId(enterpriseRouterProjectId: string  | undefined) {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public get enterpriseRouterProjectId(): string | undefined {
        return this['enterprise_router_project_id'];
    }
    public withEnterpriseRouterRegionId(enterpriseRouterRegionId: string): CentralNetworkGdgwAttachment {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        return this;
    }
    public set enterpriseRouterRegionId(enterpriseRouterRegionId: string  | undefined) {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public get enterpriseRouterRegionId(): string | undefined {
        return this['enterprise_router_region_id'];
    }
    public withEnterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string): CentralNetworkGdgwAttachment {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
        return this;
    }
    public set enterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string  | undefined) {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
    }
    public get enterpriseRouterAttachmentId(): string | undefined {
        return this['enterprise_router_attachment_id'];
    }
    public withGlobalDcGatewayPeerLinkId(globalDcGatewayPeerLinkId: string): CentralNetworkGdgwAttachment {
        this['global_dc_gateway_peer_link_id'] = globalDcGatewayPeerLinkId;
        return this;
    }
    public set globalDcGatewayPeerLinkId(globalDcGatewayPeerLinkId: string  | undefined) {
        this['global_dc_gateway_peer_link_id'] = globalDcGatewayPeerLinkId;
    }
    public get globalDcGatewayPeerLinkId(): string | undefined {
        return this['global_dc_gateway_peer_link_id'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): CentralNetworkGdgwAttachment {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withGlobalDcGatewayProjectId(globalDcGatewayProjectId: string): CentralNetworkGdgwAttachment {
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
        return this;
    }
    public set globalDcGatewayProjectId(globalDcGatewayProjectId: string  | undefined) {
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
    }
    public get globalDcGatewayProjectId(): string | undefined {
        return this['global_dc_gateway_project_id'];
    }
    public withGlobalDcGatewayRegionId(globalDcGatewayRegionId: string): CentralNetworkGdgwAttachment {
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
        return this;
    }
    public set globalDcGatewayRegionId(globalDcGatewayRegionId: string  | undefined) {
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
    }
    public get globalDcGatewayRegionId(): string | undefined {
        return this['global_dc_gateway_region_id'];
    }
    public withEnterpriseRouterSiteCode(enterpriseRouterSiteCode: string): CentralNetworkGdgwAttachment {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
        return this;
    }
    public set enterpriseRouterSiteCode(enterpriseRouterSiteCode: string  | undefined) {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
    }
    public get enterpriseRouterSiteCode(): string | undefined {
        return this['enterprise_router_site_code'];
    }
    public withGlobalDcGatewaySiteCode(globalDcGatewaySiteCode: string): CentralNetworkGdgwAttachment {
        this['global_dc_gateway_site_code'] = globalDcGatewaySiteCode;
        return this;
    }
    public set globalDcGatewaySiteCode(globalDcGatewaySiteCode: string  | undefined) {
        this['global_dc_gateway_site_code'] = globalDcGatewaySiteCode;
    }
    public get globalDcGatewaySiteCode(): string | undefined {
        return this['global_dc_gateway_site_code'];
    }
}