import { ApprovedStateEnum } from './ApprovedStateEnum';
import { HostedCloudEnum } from './HostedCloudEnum';


export class CentralNetworkAttachmentSpecificationValueInfo {
    private 'enterprise_router_table_id'?: string;
    private 'attached_er_id'?: string;
    private 'approved_state'?: ApprovedStateEnum;
    private 'hosted_cloud'?: HostedCloudEnum;
    public reason?: string;
    public constructor() { 
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
    public withAttachedErId(attachedErId: string): CentralNetworkAttachmentSpecificationValueInfo {
        this['attached_er_id'] = attachedErId;
        return this;
    }
    public set attachedErId(attachedErId: string  | undefined) {
        this['attached_er_id'] = attachedErId;
    }
    public get attachedErId(): string | undefined {
        return this['attached_er_id'];
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