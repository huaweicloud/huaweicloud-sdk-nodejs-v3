import { AutoScalingPolicy } from './AutoScalingPolicy';


export class TaskNodeGroup {
    private 'node_num'?: number;
    private 'node_size'?: string;
    private 'data_volume_type'?: TaskNodeGroupDataVolumeTypeEnum | string;
    private 'data_volume_count'?: number;
    private 'data_volume_size'?: number;
    private 'auto_scaling_policy'?: AutoScalingPolicy;
    public constructor(nodeNum?: number, nodeSize?: string, dataVolumeType?: string, dataVolumeCount?: number, dataVolumeSize?: number) { 
        this['node_num'] = nodeNum;
        this['node_size'] = nodeSize;
        this['data_volume_type'] = dataVolumeType;
        this['data_volume_count'] = dataVolumeCount;
        this['data_volume_size'] = dataVolumeSize;
    }
    public withNodeNum(nodeNum: number): TaskNodeGroup {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodeSize(nodeSize: string): TaskNodeGroup {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string  | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize(): string | undefined {
        return this['node_size'];
    }
    public withDataVolumeType(dataVolumeType: TaskNodeGroupDataVolumeTypeEnum | string): TaskNodeGroup {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: TaskNodeGroupDataVolumeTypeEnum | string  | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType(): TaskNodeGroupDataVolumeTypeEnum | string | undefined {
        return this['data_volume_type'];
    }
    public withDataVolumeCount(dataVolumeCount: number): TaskNodeGroup {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number  | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount(): number | undefined {
        return this['data_volume_count'];
    }
    public withDataVolumeSize(dataVolumeSize: number): TaskNodeGroup {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): number | undefined {
        return this['data_volume_size'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): TaskNodeGroup {
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

/**
    * @export
    * @enum {string}
    */
export enum TaskNodeGroupDataVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
