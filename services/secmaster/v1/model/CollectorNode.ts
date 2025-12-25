import { IsapNodeExpansion } from './IsapNodeExpansion';
import { Monitor } from './Monitor';


export class CollectorNode {
    private 'channel_instance_refer_count'?: number;
    private 'create_by'?: string;
    private 'custom_label'?: string;
    public description?: string;
    private 'device_type'?: string;
    private 'ip_address'?: string;
    public monitor?: Monitor;
    private 'node_expansion'?: IsapNodeExpansion;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'os_type'?: string;
    private 'private_ip_address'?: string;
    private 'project_id'?: string;
    public region?: string;
    public specification?: string;
    private 'update_time'?: number;
    private 'vpc_endpoint_address'?: string;
    private 'vpc_endpoint_id'?: string;
    private 'vpc_id'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withChannelInstanceReferCount(channelInstanceReferCount: number): CollectorNode {
        this['channel_instance_refer_count'] = channelInstanceReferCount;
        return this;
    }
    public set channelInstanceReferCount(channelInstanceReferCount: number  | undefined) {
        this['channel_instance_refer_count'] = channelInstanceReferCount;
    }
    public get channelInstanceReferCount(): number | undefined {
        return this['channel_instance_refer_count'];
    }
    public withCreateBy(createBy: string): CollectorNode {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCustomLabel(customLabel: string): CollectorNode {
        this['custom_label'] = customLabel;
        return this;
    }
    public set customLabel(customLabel: string  | undefined) {
        this['custom_label'] = customLabel;
    }
    public get customLabel(): string | undefined {
        return this['custom_label'];
    }
    public withDescription(description: string): CollectorNode {
        this['description'] = description;
        return this;
    }
    public withDeviceType(deviceType: string): CollectorNode {
        this['device_type'] = deviceType;
        return this;
    }
    public set deviceType(deviceType: string  | undefined) {
        this['device_type'] = deviceType;
    }
    public get deviceType(): string | undefined {
        return this['device_type'];
    }
    public withIpAddress(ipAddress: string): CollectorNode {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withMonitor(monitor: Monitor): CollectorNode {
        this['monitor'] = monitor;
        return this;
    }
    public withNodeExpansion(nodeExpansion: IsapNodeExpansion): CollectorNode {
        this['node_expansion'] = nodeExpansion;
        return this;
    }
    public set nodeExpansion(nodeExpansion: IsapNodeExpansion  | undefined) {
        this['node_expansion'] = nodeExpansion;
    }
    public get nodeExpansion(): IsapNodeExpansion | undefined {
        return this['node_expansion'];
    }
    public withNodeId(nodeId: string): CollectorNode {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): CollectorNode {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withOsType(osType: string): CollectorNode {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPrivateIpAddress(privateIpAddress: string): CollectorNode {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withProjectId(projectId: string): CollectorNode {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegion(region: string): CollectorNode {
        this['region'] = region;
        return this;
    }
    public withSpecification(specification: string): CollectorNode {
        this['specification'] = specification;
        return this;
    }
    public withUpdateTime(updateTime: number): CollectorNode {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVpcEndpointAddress(vpcEndpointAddress: string): CollectorNode {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
        return this;
    }
    public set vpcEndpointAddress(vpcEndpointAddress: string  | undefined) {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
    }
    public get vpcEndpointAddress(): string | undefined {
        return this['vpc_endpoint_address'];
    }
    public withVpcEndpointId(vpcEndpointId: string): CollectorNode {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
    public withVpcId(vpcId: string): CollectorNode {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withWorkspaceId(workspaceId: string): CollectorNode {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}