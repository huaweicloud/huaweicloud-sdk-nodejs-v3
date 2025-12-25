import { IsapErrorRsp } from './IsapErrorRsp';
import { IsapNodeExpansion } from './IsapNodeExpansion';
import { Monitor } from './Monitor';


export class Node {
    private 'create_by'?: string;
    private 'create_time'?: number;
    public description?: IsapErrorRsp;
    private 'device_type'?: string;
    private 'ip_address'?: string;
    public monitor?: Monitor;
    private 'node_expansion'?: IsapNodeExpansion;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'os_type'?: string;
    private 'private_ip_address'?: string;
    public region?: string;
    public specification?: string;
    private 'subnet_id'?: string;
    private 'update_time'?: number;
    private 'vpc_endpoint_address'?: string;
    private 'vpc_endpoint_id'?: string;
    private 'vpc_id'?: string;
    private 'vpcep_service_ip'?: string;
    public constructor() { 
    }
    public withCreateBy(createBy: string): Node {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): Node {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDescription(description: IsapErrorRsp): Node {
        this['description'] = description;
        return this;
    }
    public withDeviceType(deviceType: string): Node {
        this['device_type'] = deviceType;
        return this;
    }
    public set deviceType(deviceType: string  | undefined) {
        this['device_type'] = deviceType;
    }
    public get deviceType(): string | undefined {
        return this['device_type'];
    }
    public withIpAddress(ipAddress: string): Node {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withMonitor(monitor: Monitor): Node {
        this['monitor'] = monitor;
        return this;
    }
    public withNodeExpansion(nodeExpansion: IsapNodeExpansion): Node {
        this['node_expansion'] = nodeExpansion;
        return this;
    }
    public set nodeExpansion(nodeExpansion: IsapNodeExpansion  | undefined) {
        this['node_expansion'] = nodeExpansion;
    }
    public get nodeExpansion(): IsapNodeExpansion | undefined {
        return this['node_expansion'];
    }
    public withNodeId(nodeId: string): Node {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): Node {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withOsType(osType: string): Node {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPrivateIpAddress(privateIpAddress: string): Node {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withRegion(region: string): Node {
        this['region'] = region;
        return this;
    }
    public withSpecification(specification: string): Node {
        this['specification'] = specification;
        return this;
    }
    public withSubnetId(subnetId: string): Node {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withUpdateTime(updateTime: number): Node {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVpcEndpointAddress(vpcEndpointAddress: string): Node {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
        return this;
    }
    public set vpcEndpointAddress(vpcEndpointAddress: string  | undefined) {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
    }
    public get vpcEndpointAddress(): string | undefined {
        return this['vpc_endpoint_address'];
    }
    public withVpcEndpointId(vpcEndpointId: string): Node {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
    public withVpcId(vpcId: string): Node {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcepServiceIp(vpcepServiceIp: string): Node {
        this['vpcep_service_ip'] = vpcepServiceIp;
        return this;
    }
    public set vpcepServiceIp(vpcepServiceIp: string  | undefined) {
        this['vpcep_service_ip'] = vpcepServiceIp;
    }
    public get vpcepServiceIp(): string | undefined {
        return this['vpcep_service_ip'];
    }
}