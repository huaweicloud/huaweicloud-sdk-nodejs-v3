import { ComponentConfigurationParam } from './ComponentConfigurationParam';
import { IsapNodeExpansion } from './IsapNodeExpansion';
import { Monitor } from './Monitor';
import { NodeApplyFailEnum } from './NodeApplyFailEnum';


export class ComponentConfiguration {
    private 'component_id'?: string;
    private 'component_name'?: string;
    private 'config_status'?: ComponentConfigurationConfigStatusEnum | string;
    private 'create_time'?: number;
    private 'fail_deploy_message'?: string;
    private 'ip_address'?: string;
    public list?: Array<ComponentConfigurationParam>;
    public monitor?: Monitor;
    private 'node_apply_fail_enum'?: NodeApplyFailEnum;
    private 'node_expansion'?: IsapNodeExpansion;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'private_ip_address'?: string;
    public region?: string;
    public specification?: string;
    private 'vpc_endpoint_address'?: string;
    private 'vpc_endpoint_id'?: string;
    public constructor() { 
    }
    public withComponentId(componentId: string): ComponentConfiguration {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withComponentName(componentName: string): ComponentConfiguration {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withConfigStatus(configStatus: ComponentConfigurationConfigStatusEnum | string): ComponentConfiguration {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: ComponentConfigurationConfigStatusEnum | string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): ComponentConfigurationConfigStatusEnum | string | undefined {
        return this['config_status'];
    }
    public withCreateTime(createTime: number): ComponentConfiguration {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withFailDeployMessage(failDeployMessage: string): ComponentConfiguration {
        this['fail_deploy_message'] = failDeployMessage;
        return this;
    }
    public set failDeployMessage(failDeployMessage: string  | undefined) {
        this['fail_deploy_message'] = failDeployMessage;
    }
    public get failDeployMessage(): string | undefined {
        return this['fail_deploy_message'];
    }
    public withIpAddress(ipAddress: string): ComponentConfiguration {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withList(list: Array<ComponentConfigurationParam>): ComponentConfiguration {
        this['list'] = list;
        return this;
    }
    public withMonitor(monitor: Monitor): ComponentConfiguration {
        this['monitor'] = monitor;
        return this;
    }
    public withNodeApplyFailEnum(nodeApplyFailEnum: NodeApplyFailEnum): ComponentConfiguration {
        this['node_apply_fail_enum'] = nodeApplyFailEnum;
        return this;
    }
    public set nodeApplyFailEnum(nodeApplyFailEnum: NodeApplyFailEnum  | undefined) {
        this['node_apply_fail_enum'] = nodeApplyFailEnum;
    }
    public get nodeApplyFailEnum(): NodeApplyFailEnum | undefined {
        return this['node_apply_fail_enum'];
    }
    public withNodeExpansion(nodeExpansion: IsapNodeExpansion): ComponentConfiguration {
        this['node_expansion'] = nodeExpansion;
        return this;
    }
    public set nodeExpansion(nodeExpansion: IsapNodeExpansion  | undefined) {
        this['node_expansion'] = nodeExpansion;
    }
    public get nodeExpansion(): IsapNodeExpansion | undefined {
        return this['node_expansion'];
    }
    public withNodeId(nodeId: string): ComponentConfiguration {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ComponentConfiguration {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withPrivateIpAddress(privateIpAddress: string): ComponentConfiguration {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withRegion(region: string): ComponentConfiguration {
        this['region'] = region;
        return this;
    }
    public withSpecification(specification: string): ComponentConfiguration {
        this['specification'] = specification;
        return this;
    }
    public withVpcEndpointAddress(vpcEndpointAddress: string): ComponentConfiguration {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
        return this;
    }
    public set vpcEndpointAddress(vpcEndpointAddress: string  | undefined) {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
    }
    public get vpcEndpointAddress(): string | undefined {
        return this['vpc_endpoint_address'];
    }
    public withVpcEndpointId(vpcEndpointId: string): ComponentConfiguration {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentConfigurationConfigStatusEnum {
    UN_SAVED = 'UN_SAVED',
    SAVE_AND_UN_APPLY = 'SAVE_AND_UN_APPLY',
    MOVE_AND_UN_APPLY = 'MOVE_AND_UN_APPLY',
    APPLYING = 'APPLYING',
    FAIL_APPLY = 'FAIL_APPLY',
    APPLIED = 'APPLIED'
}
