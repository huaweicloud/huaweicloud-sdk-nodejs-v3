import { TaskNodeInfo } from './TaskNodeInfo';


export class ClusterScalingParams {
    private 'order_id'?: string;
    private 'scale_type'?: ClusterScalingParamsScaleTypeEnum | string;
    private 'node_id'?: string;
    private 'node_group'?: string;
    private 'skip_bootstrap_scripts'?: string;
    private 'scale_without_start'?: boolean;
    private 'server_ids'?: Array<string>;
    public instances?: number;
    private 'task_node_info'?: TaskNodeInfo;
    public constructor(scaleType?: string, nodeId?: string, instances?: number) { 
        this['scale_type'] = scaleType;
        this['node_id'] = nodeId;
        this['instances'] = instances;
    }
    public withOrderId(orderId: string): ClusterScalingParams {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withScaleType(scaleType: ClusterScalingParamsScaleTypeEnum | string): ClusterScalingParams {
        this['scale_type'] = scaleType;
        return this;
    }
    public set scaleType(scaleType: ClusterScalingParamsScaleTypeEnum | string  | undefined) {
        this['scale_type'] = scaleType;
    }
    public get scaleType(): ClusterScalingParamsScaleTypeEnum | string | undefined {
        return this['scale_type'];
    }
    public withNodeId(nodeId: string): ClusterScalingParams {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeGroup(nodeGroup: string): ClusterScalingParams {
        this['node_group'] = nodeGroup;
        return this;
    }
    public set nodeGroup(nodeGroup: string  | undefined) {
        this['node_group'] = nodeGroup;
    }
    public get nodeGroup(): string | undefined {
        return this['node_group'];
    }
    public withSkipBootstrapScripts(skipBootstrapScripts: string): ClusterScalingParams {
        this['skip_bootstrap_scripts'] = skipBootstrapScripts;
        return this;
    }
    public set skipBootstrapScripts(skipBootstrapScripts: string  | undefined) {
        this['skip_bootstrap_scripts'] = skipBootstrapScripts;
    }
    public get skipBootstrapScripts(): string | undefined {
        return this['skip_bootstrap_scripts'];
    }
    public withScaleWithoutStart(scaleWithoutStart: boolean): ClusterScalingParams {
        this['scale_without_start'] = scaleWithoutStart;
        return this;
    }
    public set scaleWithoutStart(scaleWithoutStart: boolean  | undefined) {
        this['scale_without_start'] = scaleWithoutStart;
    }
    public get scaleWithoutStart(): boolean | undefined {
        return this['scale_without_start'];
    }
    public withServerIds(serverIds: Array<string>): ClusterScalingParams {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
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
    public set taskNodeInfo(taskNodeInfo: TaskNodeInfo  | undefined) {
        this['task_node_info'] = taskNodeInfo;
    }
    public get taskNodeInfo(): TaskNodeInfo | undefined {
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
