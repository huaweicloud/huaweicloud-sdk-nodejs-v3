import { ApprovedStateEnum } from './ApprovedStateEnum';
import { AttachedEnterpriseRouterAttachmentId } from './AttachedEnterpriseRouterAttachmentId';
import { AttachedEnterpriseRouterId } from './AttachedEnterpriseRouterId';
import { AttachedEnterpriseRouterProjectId } from './AttachedEnterpriseRouterProjectId';
import { AttachedEnterpriseRouterRegionId } from './AttachedEnterpriseRouterRegionId';
import { AttachedEnterpriseRouterSiteCode } from './AttachedEnterpriseRouterSiteCode';
import { AttachedEnterpriseRouterTableId } from './AttachedEnterpriseRouterTableId';
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
import { EnterpriseRouterTableId } from './EnterpriseRouterTableId';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';
import { HostedCloudEnum } from './HostedCloudEnum';
import { IsFrozen } from './IsFrozen';
import { Name } from './Name';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CentralNetworkErRouteTableAttachment {
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
    private 'is_frozen'?: boolean;
    private 'bandwidth_type'?: BandwidthTypeEnum;
    private 'bandwidth_size'?: number;
    private 'enterprise_router_id'?: string;
    private 'enterprise_router_project_id'?: string;
    private 'enterprise_router_region_id'?: string;
    private 'enterprise_router_attachment_id'?: string;
    private 'enterprise_router_table_id'?: string;
    private 'enterprise_router_site_code'?: string;
    private 'attached_er_table_project_id'?: string;
    private 'attached_er_table_region_id'?: string;
    private 'attached_er_id'?: string;
    private 'attached_er_table_id'?: string;
    private 'attached_er_attachment_id'?: string;
    private 'attached_er_table_site_code'?: string;
    private 'approved_state'?: ApprovedStateEnum;
    private 'hosted_cloud'?: HostedCloudEnum;
    public reason?: string;
    public constructor(id?: string, name?: string, domainId?: string, state?: CentralNetworkConnectionStateEnum, createdAt?: Date, updatedAt?: Date, centralNetworkId?: string, centralNetworkPlaneId?: string, isFrozen?: boolean, bandwidthType?: BandwidthTypeEnum, enterpriseRouterId?: string, enterpriseRouterProjectId?: string, enterpriseRouterRegionId?: string, enterpriseRouterTableId?: string, enterpriseRouterSiteCode?: string, attachedErTableProjectId?: string, attachedErTableRegionId?: string, attachedErId?: string, attachedErTableId?: string, attachedErTableSiteCode?: string, approvedState?: ApprovedStateEnum) { 
        this['id'] = id;
        this['name'] = name;
        this['domain_id'] = domainId;
        this['state'] = state;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['central_network_id'] = centralNetworkId;
        this['central_network_plane_id'] = centralNetworkPlaneId;
        this['is_frozen'] = isFrozen;
        this['bandwidth_type'] = bandwidthType;
        this['enterprise_router_id'] = enterpriseRouterId;
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
        this['attached_er_table_project_id'] = attachedErTableProjectId;
        this['attached_er_table_region_id'] = attachedErTableRegionId;
        this['attached_er_id'] = attachedErId;
        this['attached_er_table_id'] = attachedErTableId;
        this['attached_er_table_site_code'] = attachedErTableSiteCode;
        this['approved_state'] = approvedState;
    }
    public withId(id: string): CentralNetworkErRouteTableAttachment {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CentralNetworkErRouteTableAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CentralNetworkErRouteTableAttachment {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CentralNetworkErRouteTableAttachment {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withState(state: CentralNetworkConnectionStateEnum): CentralNetworkErRouteTableAttachment {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): CentralNetworkErRouteTableAttachment {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CentralNetworkErRouteTableAttachment {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withCentralNetworkId(centralNetworkId: string): CentralNetworkErRouteTableAttachment {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CentralNetworkErRouteTableAttachment {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): CentralNetworkErRouteTableAttachment {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withIsFrozen(isFrozen: boolean): CentralNetworkErRouteTableAttachment {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): CentralNetworkErRouteTableAttachment {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
    public withBandwidthSize(bandwidthSize: number): CentralNetworkErRouteTableAttachment {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): CentralNetworkErRouteTableAttachment {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withEnterpriseRouterProjectId(enterpriseRouterProjectId: string): CentralNetworkErRouteTableAttachment {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        return this;
    }
    public set enterpriseRouterProjectId(enterpriseRouterProjectId: string  | undefined) {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public get enterpriseRouterProjectId(): string | undefined {
        return this['enterprise_router_project_id'];
    }
    public withEnterpriseRouterRegionId(enterpriseRouterRegionId: string): CentralNetworkErRouteTableAttachment {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        return this;
    }
    public set enterpriseRouterRegionId(enterpriseRouterRegionId: string  | undefined) {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public get enterpriseRouterRegionId(): string | undefined {
        return this['enterprise_router_region_id'];
    }
    public withEnterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string): CentralNetworkErRouteTableAttachment {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
        return this;
    }
    public set enterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string  | undefined) {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
    }
    public get enterpriseRouterAttachmentId(): string | undefined {
        return this['enterprise_router_attachment_id'];
    }
    public withEnterpriseRouterTableId(enterpriseRouterTableId: string): CentralNetworkErRouteTableAttachment {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        return this;
    }
    public set enterpriseRouterTableId(enterpriseRouterTableId: string  | undefined) {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public get enterpriseRouterTableId(): string | undefined {
        return this['enterprise_router_table_id'];
    }
    public withEnterpriseRouterSiteCode(enterpriseRouterSiteCode: string): CentralNetworkErRouteTableAttachment {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
        return this;
    }
    public set enterpriseRouterSiteCode(enterpriseRouterSiteCode: string  | undefined) {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
    }
    public get enterpriseRouterSiteCode(): string | undefined {
        return this['enterprise_router_site_code'];
    }
    public withAttachedErTableProjectId(attachedErTableProjectId: string): CentralNetworkErRouteTableAttachment {
        this['attached_er_table_project_id'] = attachedErTableProjectId;
        return this;
    }
    public set attachedErTableProjectId(attachedErTableProjectId: string  | undefined) {
        this['attached_er_table_project_id'] = attachedErTableProjectId;
    }
    public get attachedErTableProjectId(): string | undefined {
        return this['attached_er_table_project_id'];
    }
    public withAttachedErTableRegionId(attachedErTableRegionId: string): CentralNetworkErRouteTableAttachment {
        this['attached_er_table_region_id'] = attachedErTableRegionId;
        return this;
    }
    public set attachedErTableRegionId(attachedErTableRegionId: string  | undefined) {
        this['attached_er_table_region_id'] = attachedErTableRegionId;
    }
    public get attachedErTableRegionId(): string | undefined {
        return this['attached_er_table_region_id'];
    }
    public withAttachedErId(attachedErId: string): CentralNetworkErRouteTableAttachment {
        this['attached_er_id'] = attachedErId;
        return this;
    }
    public set attachedErId(attachedErId: string  | undefined) {
        this['attached_er_id'] = attachedErId;
    }
    public get attachedErId(): string | undefined {
        return this['attached_er_id'];
    }
    public withAttachedErTableId(attachedErTableId: string): CentralNetworkErRouteTableAttachment {
        this['attached_er_table_id'] = attachedErTableId;
        return this;
    }
    public set attachedErTableId(attachedErTableId: string  | undefined) {
        this['attached_er_table_id'] = attachedErTableId;
    }
    public get attachedErTableId(): string | undefined {
        return this['attached_er_table_id'];
    }
    public withAttachedErAttachmentId(attachedErAttachmentId: string): CentralNetworkErRouteTableAttachment {
        this['attached_er_attachment_id'] = attachedErAttachmentId;
        return this;
    }
    public set attachedErAttachmentId(attachedErAttachmentId: string  | undefined) {
        this['attached_er_attachment_id'] = attachedErAttachmentId;
    }
    public get attachedErAttachmentId(): string | undefined {
        return this['attached_er_attachment_id'];
    }
    public withAttachedErTableSiteCode(attachedErTableSiteCode: string): CentralNetworkErRouteTableAttachment {
        this['attached_er_table_site_code'] = attachedErTableSiteCode;
        return this;
    }
    public set attachedErTableSiteCode(attachedErTableSiteCode: string  | undefined) {
        this['attached_er_table_site_code'] = attachedErTableSiteCode;
    }
    public get attachedErTableSiteCode(): string | undefined {
        return this['attached_er_table_site_code'];
    }
    public withApprovedState(approvedState: ApprovedStateEnum): CentralNetworkErRouteTableAttachment {
        this['approved_state'] = approvedState;
        return this;
    }
    public set approvedState(approvedState: ApprovedStateEnum  | undefined) {
        this['approved_state'] = approvedState;
    }
    public get approvedState(): ApprovedStateEnum | undefined {
        return this['approved_state'];
    }
    public withHostedCloud(hostedCloud: HostedCloudEnum): CentralNetworkErRouteTableAttachment {
        this['hosted_cloud'] = hostedCloud;
        return this;
    }
    public set hostedCloud(hostedCloud: HostedCloudEnum  | undefined) {
        this['hosted_cloud'] = hostedCloud;
    }
    public get hostedCloud(): HostedCloudEnum | undefined {
        return this['hosted_cloud'];
    }
    public withReason(reason: string): CentralNetworkErRouteTableAttachment {
        this['reason'] = reason;
        return this;
    }
}