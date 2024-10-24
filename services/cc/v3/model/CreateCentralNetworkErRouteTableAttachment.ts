import { AttachedEnterpriseRouterId } from './AttachedEnterpriseRouterId';
import { AttachedEnterpriseRouterProjectId } from './AttachedEnterpriseRouterProjectId';
import { AttachedEnterpriseRouterRegionId } from './AttachedEnterpriseRouterRegionId';
import { AttachedEnterpriseRouterTableId } from './AttachedEnterpriseRouterTableId';
import { AttachmentId } from './AttachmentId';
import { CentralNetworkPlaneId } from './CentralNetworkPlaneId';
import { Description } from './Description';
import { EnterpriseRouterId } from './EnterpriseRouterId';
import { EnterpriseRouterProjectId } from './EnterpriseRouterProjectId';
import { EnterpriseRouterRegionId } from './EnterpriseRouterRegionId';
import { EnterpriseRouterTableId } from './EnterpriseRouterTableId';
import { HostedCloud } from './HostedCloud';
import { Name } from './Name';
import { NonRequiredAutoAssociateRouteEnabled } from './NonRequiredAutoAssociateRouteEnabled';
import { NonRequiredAutoPropagateRouteEnabled } from './NonRequiredAutoPropagateRouteEnabled';


export class CreateCentralNetworkErRouteTableAttachment {
    public name?: string;
    public description?: string;
    private 'enterprise_router_id'?: string;
    private 'enterprise_router_project_id'?: string;
    private 'enterprise_router_region_id'?: string;
    private 'central_network_plane_id'?: string;
    private 'attachment_id'?: string;
    private 'enterprise_router_table_id'?: string;
    private 'attached_er_table_project_id'?: string;
    private 'attached_er_table_region_id'?: string;
    private 'attached_er_id'?: string;
    private 'attached_er_table_id'?: string;
    private 'hosted_cloud'?: CreateCentralNetworkErRouteTableAttachmentHostedCloudEnum | string;
    public constructor(name?: string, enterpriseRouterId?: string, enterpriseRouterProjectId?: string, enterpriseRouterRegionId?: string, centralNetworkPlaneId?: string, enterpriseRouterTableId?: string, attachedErTableProjectId?: string, attachedErTableRegionId?: string, attachedErId?: string, attachedErTableId?: string, hostedCloud?: string) { 
        this['name'] = name;
        this['enterprise_router_id'] = enterpriseRouterId;
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        this['central_network_plane_id'] = centralNetworkPlaneId;
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        this['attached_er_table_project_id'] = attachedErTableProjectId;
        this['attached_er_table_region_id'] = attachedErTableRegionId;
        this['attached_er_id'] = attachedErId;
        this['attached_er_table_id'] = attachedErTableId;
        this['hosted_cloud'] = hostedCloud;
    }
    public withName(name: string): CreateCentralNetworkErRouteTableAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateCentralNetworkErRouteTableAttachment {
        this['description'] = description;
        return this;
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): CreateCentralNetworkErRouteTableAttachment {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withEnterpriseRouterProjectId(enterpriseRouterProjectId: string): CreateCentralNetworkErRouteTableAttachment {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        return this;
    }
    public set enterpriseRouterProjectId(enterpriseRouterProjectId: string  | undefined) {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public get enterpriseRouterProjectId(): string | undefined {
        return this['enterprise_router_project_id'];
    }
    public withEnterpriseRouterRegionId(enterpriseRouterRegionId: string): CreateCentralNetworkErRouteTableAttachment {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        return this;
    }
    public set enterpriseRouterRegionId(enterpriseRouterRegionId: string  | undefined) {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public get enterpriseRouterRegionId(): string | undefined {
        return this['enterprise_router_region_id'];
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CreateCentralNetworkErRouteTableAttachment {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
    public withAttachmentId(attachmentId: string): CreateCentralNetworkErRouteTableAttachment {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
    public withEnterpriseRouterTableId(enterpriseRouterTableId: string): CreateCentralNetworkErRouteTableAttachment {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        return this;
    }
    public set enterpriseRouterTableId(enterpriseRouterTableId: string  | undefined) {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public get enterpriseRouterTableId(): string | undefined {
        return this['enterprise_router_table_id'];
    }
    public withAttachedErTableProjectId(attachedErTableProjectId: string): CreateCentralNetworkErRouteTableAttachment {
        this['attached_er_table_project_id'] = attachedErTableProjectId;
        return this;
    }
    public set attachedErTableProjectId(attachedErTableProjectId: string  | undefined) {
        this['attached_er_table_project_id'] = attachedErTableProjectId;
    }
    public get attachedErTableProjectId(): string | undefined {
        return this['attached_er_table_project_id'];
    }
    public withAttachedErTableRegionId(attachedErTableRegionId: string): CreateCentralNetworkErRouteTableAttachment {
        this['attached_er_table_region_id'] = attachedErTableRegionId;
        return this;
    }
    public set attachedErTableRegionId(attachedErTableRegionId: string  | undefined) {
        this['attached_er_table_region_id'] = attachedErTableRegionId;
    }
    public get attachedErTableRegionId(): string | undefined {
        return this['attached_er_table_region_id'];
    }
    public withAttachedErId(attachedErId: string): CreateCentralNetworkErRouteTableAttachment {
        this['attached_er_id'] = attachedErId;
        return this;
    }
    public set attachedErId(attachedErId: string  | undefined) {
        this['attached_er_id'] = attachedErId;
    }
    public get attachedErId(): string | undefined {
        return this['attached_er_id'];
    }
    public withAttachedErTableId(attachedErTableId: string): CreateCentralNetworkErRouteTableAttachment {
        this['attached_er_table_id'] = attachedErTableId;
        return this;
    }
    public set attachedErTableId(attachedErTableId: string  | undefined) {
        this['attached_er_table_id'] = attachedErTableId;
    }
    public get attachedErTableId(): string | undefined {
        return this['attached_er_table_id'];
    }
    public withHostedCloud(hostedCloud: CreateCentralNetworkErRouteTableAttachmentHostedCloudEnum | string): CreateCentralNetworkErRouteTableAttachment {
        this['hosted_cloud'] = hostedCloud;
        return this;
    }
    public set hostedCloud(hostedCloud: CreateCentralNetworkErRouteTableAttachmentHostedCloudEnum | string  | undefined) {
        this['hosted_cloud'] = hostedCloud;
    }
    public get hostedCloud(): CreateCentralNetworkErRouteTableAttachmentHostedCloudEnum | string | undefined {
        return this['hosted_cloud'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCentralNetworkErRouteTableAttachmentHostedCloudEnum {
    HWCLOUD = 'HWCloud',
    IRELAND = 'Ireland'
}
