import { ComponentConfigurationParamVo } from './ComponentConfigurationParamVo';


export class ComponentConfigurationInfo {
    private 'configuration_status'?: string;
    public list?: Array<ComponentConfigurationParamVo>;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'node_status'?: string;
    public specification?: string;
    public constructor(nodeId?: string, nodeName?: string, nodeStatus?: string, specification?: string) { 
        this['node_id'] = nodeId;
        this['node_name'] = nodeName;
        this['node_status'] = nodeStatus;
        this['specification'] = specification;
    }
    public withConfigurationStatus(configurationStatus: string): ComponentConfigurationInfo {
        this['configuration_status'] = configurationStatus;
        return this;
    }
    public set configurationStatus(configurationStatus: string  | undefined) {
        this['configuration_status'] = configurationStatus;
    }
    public get configurationStatus(): string | undefined {
        return this['configuration_status'];
    }
    public withList(list: Array<ComponentConfigurationParamVo>): ComponentConfigurationInfo {
        this['list'] = list;
        return this;
    }
    public withNodeId(nodeId: string): ComponentConfigurationInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ComponentConfigurationInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeStatus(nodeStatus: string): ComponentConfigurationInfo {
        this['node_status'] = nodeStatus;
        return this;
    }
    public set nodeStatus(nodeStatus: string  | undefined) {
        this['node_status'] = nodeStatus;
    }
    public get nodeStatus(): string | undefined {
        return this['node_status'];
    }
    public withSpecification(specification: string): ComponentConfigurationInfo {
        this['specification'] = specification;
        return this;
    }
}