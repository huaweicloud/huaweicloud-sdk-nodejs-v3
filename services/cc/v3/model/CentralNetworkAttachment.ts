import { AttachmentId } from './AttachmentId';
import { AttachmentInstanceId } from './AttachmentInstanceId';
import { AttachmentInstanceProjectId } from './AttachmentInstanceProjectId';
import { AttachmentInstanceRegionId } from './AttachmentInstanceRegionId';
import { AttachmentInstanceSiteCode } from './AttachmentInstanceSiteCode';
import { AttachmentInstanceType } from './AttachmentInstanceType';
import { AttachmentInstanceTypeEnum } from './AttachmentInstanceTypeEnum';
import { BandwidthSize } from './BandwidthSize';
import { BandwidthType } from './BandwidthType';
import { BandwidthTypeEnum } from './BandwidthTypeEnum';
import { CentralNetworkAttachmentSpecificationValueInfo } from './CentralNetworkAttachmentSpecificationValueInfo';
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
import { IsFrozen } from './IsFrozen';
import { Name } from './Name';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CentralNetworkAttachment {
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
    private 'attachment_instance_type'?: AttachmentInstanceTypeEnum;
    private 'attachment_instance_id'?: string;
    private 'attachment_id'?: string;
    private 'attachment_instance_project_id'?: string;
    private 'attachment_instance_region_id'?: string;
    private 'attachment_instance_site_code'?: string;
    private 'enterprise_router_site_code'?: string;
    private 'specification_value'?: CentralNetworkAttachmentSpecificationValueInfo;
    public constructor(id?: string, name?: string, domainId?: string, state?: CentralNetworkConnectionStateEnum, createdAt?: Date, updatedAt?: Date, centralNetworkId?: string, centralNetworkPlaneId?: string, bandwidthType?: BandwidthTypeEnum, isFrozen?: boolean, enterpriseRouterId?: string, enterpriseRouterProjectId?: string, enterpriseRouterRegionId?: string, attachmentInstanceType?: AttachmentInstanceTypeEnum, attachmentInstanceId?: string, attachmentInstanceProjectId?: string, attachmentInstanceRegionId?: string, attachmentInstanceSiteCode?: string, enterpriseRouterSiteCode?: string) { 
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
        this['attachment_instance_type'] = attachmentInstanceType;
        this['attachment_instance_id'] = attachmentInstanceId;
        this['attachment_instance_project_id'] = attachmentInstanceProjectId;
        this['attachment_instance_region_id'] = attachmentInstanceRegionId;
        this['attachment_instance_site_code'] = attachmentInstanceSiteCode;
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
    }
    public withId(id: string): CentralNetworkAttachment {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CentralNetworkAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CentralNetworkAttachment {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CentralNetworkAttachment {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withState(state: CentralNetworkConnectionStateEnum): CentralNetworkAttachment {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): CentralNetworkAttachment {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CentralNetworkAttachment {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withCentralNetworkId(centralNetworkId: string): CentralNetworkAttachment {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CentralNetworkAttachment {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): CentralNetworkAttachment {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): CentralNetworkAttachment {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
    public withBandwidthSize(bandwidthSize: number): CentralNetworkAttachment {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withIsFrozen(isFrozen: boolean): CentralNetworkAttachment {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): CentralNetworkAttachment {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withEnterpriseRouterProjectId(enterpriseRouterProjectId: string): CentralNetworkAttachment {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        return this;
    }
    public set enterpriseRouterProjectId(enterpriseRouterProjectId: string  | undefined) {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public get enterpriseRouterProjectId(): string | undefined {
        return this['enterprise_router_project_id'];
    }
    public withEnterpriseRouterRegionId(enterpriseRouterRegionId: string): CentralNetworkAttachment {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        return this;
    }
    public set enterpriseRouterRegionId(enterpriseRouterRegionId: string  | undefined) {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public get enterpriseRouterRegionId(): string | undefined {
        return this['enterprise_router_region_id'];
    }
    public withEnterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string): CentralNetworkAttachment {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
        return this;
    }
    public set enterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string  | undefined) {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
    }
    public get enterpriseRouterAttachmentId(): string | undefined {
        return this['enterprise_router_attachment_id'];
    }
    public withAttachmentInstanceType(attachmentInstanceType: AttachmentInstanceTypeEnum): CentralNetworkAttachment {
        this['attachment_instance_type'] = attachmentInstanceType;
        return this;
    }
    public set attachmentInstanceType(attachmentInstanceType: AttachmentInstanceTypeEnum  | undefined) {
        this['attachment_instance_type'] = attachmentInstanceType;
    }
    public get attachmentInstanceType(): AttachmentInstanceTypeEnum | undefined {
        return this['attachment_instance_type'];
    }
    public withAttachmentInstanceId(attachmentInstanceId: string): CentralNetworkAttachment {
        this['attachment_instance_id'] = attachmentInstanceId;
        return this;
    }
    public set attachmentInstanceId(attachmentInstanceId: string  | undefined) {
        this['attachment_instance_id'] = attachmentInstanceId;
    }
    public get attachmentInstanceId(): string | undefined {
        return this['attachment_instance_id'];
    }
    public withAttachmentId(attachmentId: string): CentralNetworkAttachment {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
    public withAttachmentInstanceProjectId(attachmentInstanceProjectId: string): CentralNetworkAttachment {
        this['attachment_instance_project_id'] = attachmentInstanceProjectId;
        return this;
    }
    public set attachmentInstanceProjectId(attachmentInstanceProjectId: string  | undefined) {
        this['attachment_instance_project_id'] = attachmentInstanceProjectId;
    }
    public get attachmentInstanceProjectId(): string | undefined {
        return this['attachment_instance_project_id'];
    }
    public withAttachmentInstanceRegionId(attachmentInstanceRegionId: string): CentralNetworkAttachment {
        this['attachment_instance_region_id'] = attachmentInstanceRegionId;
        return this;
    }
    public set attachmentInstanceRegionId(attachmentInstanceRegionId: string  | undefined) {
        this['attachment_instance_region_id'] = attachmentInstanceRegionId;
    }
    public get attachmentInstanceRegionId(): string | undefined {
        return this['attachment_instance_region_id'];
    }
    public withAttachmentInstanceSiteCode(attachmentInstanceSiteCode: string): CentralNetworkAttachment {
        this['attachment_instance_site_code'] = attachmentInstanceSiteCode;
        return this;
    }
    public set attachmentInstanceSiteCode(attachmentInstanceSiteCode: string  | undefined) {
        this['attachment_instance_site_code'] = attachmentInstanceSiteCode;
    }
    public get attachmentInstanceSiteCode(): string | undefined {
        return this['attachment_instance_site_code'];
    }
    public withEnterpriseRouterSiteCode(enterpriseRouterSiteCode: string): CentralNetworkAttachment {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
        return this;
    }
    public set enterpriseRouterSiteCode(enterpriseRouterSiteCode: string  | undefined) {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
    }
    public get enterpriseRouterSiteCode(): string | undefined {
        return this['enterprise_router_site_code'];
    }
    public withSpecificationValue(specificationValue: CentralNetworkAttachmentSpecificationValueInfo): CentralNetworkAttachment {
        this['specification_value'] = specificationValue;
        return this;
    }
    public set specificationValue(specificationValue: CentralNetworkAttachmentSpecificationValueInfo  | undefined) {
        this['specification_value'] = specificationValue;
    }
    public get specificationValue(): CentralNetworkAttachmentSpecificationValueInfo | undefined {
        return this['specification_value'];
    }
}