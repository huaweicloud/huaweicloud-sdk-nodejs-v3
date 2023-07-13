import { AutoScalingPolicy } from './AutoScalingPolicy';


export class NodeGroupV11 {
    private 'group_name': string | undefined;
    private 'node_num': number | undefined;
    private 'node_size': string | undefined;
    private 'root_volume_size'?: string | undefined;
    private 'root_volume_type'?: string | undefined;
    private 'data_volume_type'?: string | undefined;
    private 'data_volume_count'?: number | undefined;
    private 'data_volume_size'?: number | undefined;
    private 'auto_scaling_policy'?: AutoScalingPolicy | undefined;
    public constructor(groupName?: any, nodeNum?: any, nodeSize?: any) { 
        this['group_name'] = groupName;
        this['node_num'] = nodeNum;
        this['node_size'] = nodeSize;
    }
    public withGroupName(groupName: string): NodeGroupV11 {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withNodeNum(nodeNum: number): NodeGroupV11 {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
    public withNodeSize(nodeSize: string): NodeGroupV11 {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize() {
        return this['node_size'];
    }
    public withRootVolumeSize(rootVolumeSize: string): NodeGroupV11 {
        this['root_volume_size'] = rootVolumeSize;
        return this;
    }
    public set rootVolumeSize(rootVolumeSize: string | undefined) {
        this['root_volume_size'] = rootVolumeSize;
    }
    public get rootVolumeSize() {
        return this['root_volume_size'];
    }
    public withRootVolumeType(rootVolumeType: string): NodeGroupV11 {
        this['root_volume_type'] = rootVolumeType;
        return this;
    }
    public set rootVolumeType(rootVolumeType: string | undefined) {
        this['root_volume_type'] = rootVolumeType;
    }
    public get rootVolumeType() {
        return this['root_volume_type'];
    }
    public withDataVolumeType(dataVolumeType: string): NodeGroupV11 {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: string | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType() {
        return this['data_volume_type'];
    }
    public withDataVolumeCount(dataVolumeCount: number): NodeGroupV11 {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount() {
        return this['data_volume_count'];
    }
    public withDataVolumeSize(dataVolumeSize: number): NodeGroupV11 {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize() {
        return this['data_volume_size'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): NodeGroupV11 {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy() {
        return this['auto_scaling_policy'];
    }
}