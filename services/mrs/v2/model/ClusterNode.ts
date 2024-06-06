import { ComponentInfo } from './ComponentInfo';
import { NodeDetail } from './NodeDetail';
import { ServerInfo } from './ServerInfo';
import { Tag } from './Tag';


export class ClusterNode {
    private 'node_name'?: string;
    private 'resource_id'?: string;
    private 'node_group_name'?: string;
    private 'node_type'?: string;
    private 'billing_type'?: string;
    private 'deployment_type'?: string;
    private 'server_info'?: ServerInfo;
    public tags?: Array<Tag>;
    private 'node_detail'?: NodeDetail;
    private 'node_status'?: string;
    private 'component_infos'?: Array<ComponentInfo>;
    public constructor(deploymentType?: string) { 
        this['deployment_type'] = deploymentType;
    }
    public withNodeName(nodeName: string): ClusterNode {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withResourceId(resourceId: string): ClusterNode {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withNodeGroupName(nodeGroupName: string): ClusterNode {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string  | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName(): string | undefined {
        return this['node_group_name'];
    }
    public withNodeType(nodeType: string): ClusterNode {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withBillingType(billingType: string): ClusterNode {
        this['billing_type'] = billingType;
        return this;
    }
    public set billingType(billingType: string  | undefined) {
        this['billing_type'] = billingType;
    }
    public get billingType(): string | undefined {
        return this['billing_type'];
    }
    public withDeploymentType(deploymentType: string): ClusterNode {
        this['deployment_type'] = deploymentType;
        return this;
    }
    public set deploymentType(deploymentType: string  | undefined) {
        this['deployment_type'] = deploymentType;
    }
    public get deploymentType(): string | undefined {
        return this['deployment_type'];
    }
    public withServerInfo(serverInfo: ServerInfo): ClusterNode {
        this['server_info'] = serverInfo;
        return this;
    }
    public set serverInfo(serverInfo: ServerInfo  | undefined) {
        this['server_info'] = serverInfo;
    }
    public get serverInfo(): ServerInfo | undefined {
        return this['server_info'];
    }
    public withTags(tags: Array<Tag>): ClusterNode {
        this['tags'] = tags;
        return this;
    }
    public withNodeDetail(nodeDetail: NodeDetail): ClusterNode {
        this['node_detail'] = nodeDetail;
        return this;
    }
    public set nodeDetail(nodeDetail: NodeDetail  | undefined) {
        this['node_detail'] = nodeDetail;
    }
    public get nodeDetail(): NodeDetail | undefined {
        return this['node_detail'];
    }
    public withNodeStatus(nodeStatus: string): ClusterNode {
        this['node_status'] = nodeStatus;
        return this;
    }
    public set nodeStatus(nodeStatus: string  | undefined) {
        this['node_status'] = nodeStatus;
    }
    public get nodeStatus(): string | undefined {
        return this['node_status'];
    }
    public withComponentInfos(componentInfos: Array<ComponentInfo>): ClusterNode {
        this['component_infos'] = componentInfos;
        return this;
    }
    public set componentInfos(componentInfos: Array<ComponentInfo>  | undefined) {
        this['component_infos'] = componentInfos;
    }
    public get componentInfos(): Array<ComponentInfo> | undefined {
        return this['component_infos'];
    }
}