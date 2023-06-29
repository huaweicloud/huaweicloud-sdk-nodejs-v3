import { TaskNodeInfo } from './TaskNodeInfo';


export class ClusterScalingParams {
    private 'order_id'?: string | undefined;
    private 'scale_type': ClusterScalingParamsScaleTypeEnum | undefined;
    private 'node_id': string | undefined;
    private 'node_group'?: string | undefined;
    private 'skip_bootstrap_scripts'?: string | undefined;
    private 'scale_without_start'?: boolean | undefined;
    private 'server_ids'?: Array<string> | undefined;
    public instances: number;
    private 'task_node_info'?: TaskNodeInfo | undefined;
    public constructor(scaleType?: any, nodeId?: any, instances?: any) { 
        this['scale_type'] = scaleType;
        this['node_id'] = nodeId;
        this['instances'] = instances;
    }
    public withOrderId(orderId: string): ClusterScalingParams {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withScaleType(scaleType: ClusterScalingParamsScaleTypeEnum): ClusterScalingParams {
        this['scale_type'] = scaleType;
        return this;
    }
    public set scaleType(scaleType: ClusterScalingParamsScaleTypeEnum | undefined) {
        this['scale_type'] = scaleType;
    }
    public get scaleType() {
        return this['scale_type'];
    }
    public withNodeId(nodeId: string): ClusterScalingParams {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withNodeGroup(nodeGroup: string): ClusterScalingParams {
        this['node_group'] = nodeGroup;
        return this;
    }
    public set nodeGroup(nodeGroup: string | undefined) {
        this['node_group'] = nodeGroup;
    }
    public get nodeGroup() {
        return this['node_group'];
    }
    public withSkipBootstrapScripts(skipBootstrapScripts: string): ClusterScalingParams {
        this['skip_bootstrap_scripts'] = skipBootstrapScripts;
        return this;
    }
    public set skipBootstrapScripts(skipBootstrapScripts: string | undefined) {
        this['skip_bootstrap_scripts'] = skipBootstrapScripts;
    }
    public get skipBootstrapScripts() {
        return this['skip_bootstrap_scripts'];
    }
    public withScaleWithoutStart(scaleWithoutStart: boolean): ClusterScalingParams {
        this['scale_without_start'] = scaleWithoutStart;
        return this;
    }
    public set scaleWithoutStart(scaleWithoutStart: boolean | undefined) {
        this['scale_without_start'] = scaleWithoutStart;
    }
    public get scaleWithoutStart() {
        return this['scale_without_start'];
    }
    public withServerIds(serverIds: Array<string>): ClusterScalingParams {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string> | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds() {
        return this['server_ids'];
    }
    public withInstances(instances: number): ClusterScalingParams {
        this['instances'] = instances;
        return this;
    }
    public withTaskNodeInfo(taskNodeInfo: TaskNodeInfo): ClusterScalingParams {
        this['task_node_info'] = taskNodeInfo;
        return this;
    }
    public set taskNodeInfo(taskNodeInfo: TaskNodeInfo | undefined) {
        this['task_node_info'] = taskNodeInfo;
    }
    public get taskNodeInfo() {
        return this['task_node_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterScalingParamsScaleTypeEnum {
    SCALE_IN = 'scale_in',
    SCALE_OUT = 'scale_out'
}
