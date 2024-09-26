import { ApprovedStateEnum } from './ApprovedStateEnum';
import { AutoAssociateRouteEnabled } from './AutoAssociateRouteEnabled';
import { AutoPropagateRouteEnabled } from './AutoPropagateRouteEnabled';
import { EnterpriseRouterTableId } from './EnterpriseRouterTableId';
import { HostedCloudEnum } from './HostedCloudEnum';


export class CentralNetworkAttachmentSpecificationValueInfo {
    private 'enterprise_router_table_id'?: string;
    private 'attachment_parent_instance_id'?: string;
    private 'approved_state'?: ApprovedStateEnum;
    private 'hosted_cloud'?: HostedCloudEnum;
    public reason?: string;
    public constructor(enterpriseRouterTableId?: string) { 
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public withEnterpriseRouterTableId(enterpriseRouterTableId: string): CentralNetworkAttachmentSpecificationValueInfo {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        return this;
    }
    public set enterpriseRouterTableId(enterpriseRouterTableId: string  | undefined) {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public get enterpriseRouterTableId(): string | undefined {
        return this['enterprise_router_table_id'];
    }
    public withAttachmentParentInstanceId(attachmentParentInstanceId: string): CentralNetworkAttachmentSpecificationValueInfo {
        this['attachment_parent_instance_id'] = attachmentParentInstanceId;
        return this;
    }
    public set attachmentParentInstanceId(attachmentParentInstanceId: string  | undefined) {
        this['attachment_parent_instance_id'] = attachmentParentInstanceId;
    }
    public get attachmentParentInstanceId(): string | undefined {
        return this['attachment_parent_instance_id'];
    }
    public withApprovedState(approvedState: ApprovedStateEnum): CentralNetworkAttachmentSpecificationValueInfo {
        this['approved_state'] = approvedState;
        return this;
    }
    public set approvedState(approvedState: ApprovedStateEnum  | undefined) {
        this['approved_state'] = approvedState;
    }
    public get approvedState(): ApprovedStateEnum | undefined {
        return this['approved_state'];
    }
    public withHostedCloud(hostedCloud: HostedCloudEnum): CentralNetworkAttachmentSpecificationValueInfo {
        this['hosted_cloud'] = hostedCloud;
        return this;
    }
    public set hostedCloud(hostedCloud: HostedCloudEnum  | undefined) {
        this['hosted_cloud'] = hostedCloud;
    }
    public get hostedCloud(): HostedCloudEnum | undefined {
        return this['hosted_cloud'];
    }
    public withReason(reason: string): CentralNetworkAttachmentSpecificationValueInfo {
        this['reason'] = reason;
        return this;
    }
}