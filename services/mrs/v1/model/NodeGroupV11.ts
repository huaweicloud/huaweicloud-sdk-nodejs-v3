import { AutoScalingPolicy } from './AutoScalingPolicy';


export class NodeGroupV11 {
    private 'group_name'?: string;
    private 'node_num'?: number;
    private 'node_size'?: string;
    private 'root_volume_size'?: string;
    private 'root_volume_type'?: string;
    private 'data_volume_type'?: string;
    private 'data_volume_count'?: number;
    private 'data_volume_size'?: number;
    private 'auto_scaling_policy'?: AutoScalingPolicy;
    public constructor(groupName?: string, nodeNum?: number, nodeSize?: string) { 
        this['group_name'] = groupName;
        this['node_num'] = nodeNum;
        this['node_size'] = nodeSize;
    }
    public withGroupName(groupName: string): NodeGroupV11 {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withNodeNum(nodeNum: number): NodeGroupV11 {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodeSize(nodeSize: string): NodeGroupV11 {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string  | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize(): string | undefined {
        return this['node_size'];
    }
    public withRootVolumeSize(rootVolumeSize: string): NodeGroupV11 {
        this['root_volume_size'] = rootVolumeSize;
        return this;
    }
    public set rootVolumeSize(rootVolumeSize: string  | undefined) {
        this['root_volume_size'] = rootVolumeSize;
    }
    public get rootVolumeSize(): string | undefined {
        return this['root_volume_size'];
    }
    public withRootVolumeType(rootVolumeType: string): NodeGroupV11 {
        this['root_volume_type'] = rootVolumeType;
        return this;
    }
    public set rootVolumeType(rootVolumeType: string  | undefined) {
        this['root_volume_type'] = rootVolumeType;
    }
    public get rootVolumeType(): string | undefined {
        return this['root_volume_type'];
    }
    public withDataVolumeType(dataVolumeType: string): NodeGroupV11 {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: string  | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType(): string | undefined {
        return this['data_volume_type'];
    }
    public withDataVolumeCount(dataVolumeCount: number): NodeGroupV11 {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number  | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount(): number | undefined {
        return this['data_volume_count'];
    }
    public withDataVolumeSize(dataVolumeSize: number): NodeGroupV11 {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): number | undefined {
        return this['data_volume_size'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): NodeGroupV11 {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy  | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy(): AutoScalingPolicy | undefined {
        return this['auto_scaling_policy'];
    }
}